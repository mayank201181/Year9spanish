// Markdown-lite + {{maths}} renderer used for every piece of content text.
// See the format notes at the top of lib/types.ts.
import { Fragment, type ReactNode } from "react";
import { toMathML } from "@/lib/mathml";

// Keys are positions within one render call, so re-rendering the same text keeps
// the same DOM (no remounts: text selection and aria-live regions survive).

/**
 * Styled inline text: **bold** and *italic* may nest in either order
 * (*Juego **al** fútbol* or **bold *it* bold**), `code` is literal, \n → <br/>.
 * A lone * with spaces on both sides stays a literal asterisk.
 */
function pushStyled(text: string, out: ReactNode[]) {
  let bold = false;
  let italic = false;
  let buf = "";
  const flush = () => {
    if (!buf) return;
    const key = out.length;
    let node: ReactNode = buf;
    if (italic) node = <em>{node}</em>;
    if (bold) node = <strong>{node}</strong>;
    out.push(<Fragment key={key}>{node}</Fragment>);
    buf = "";
  };
  const isSpace = (c: string | undefined) => c === undefined || /\s/.test(c);
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "\n") {
      flush();
      out.push(<br key={out.length} />);
    } else if (c === "`") {
      const end = text.indexOf("`", i + 1);
      if (end > i + 1) {
        flush();
        out.push(<code key={out.length} className="break-words">{text.slice(i + 1, end)}</code>);
        i = end;
      } else buf += c;
    } else if (c === "*" && text[i + 1] === "*") {
      const opening = !bold;
      if (opening ? !isSpace(text[i + 2]) && text.indexOf("**", i + 2) > 0 : !isSpace(text[i - 1])) {
        flush();
        bold = !bold;
        i++;
      } else {
        buf += "**";
        i++;
      }
    } else if (c === "*") {
      const opening = !italic;
      const canOpen = !isSpace(text[i + 1]) && /\*/.test(text.slice(i + 1).replace(/\*\*/g, ""));
      const canClose = !isSpace(text[i - 1]);
      if (opening ? canOpen : canClose) {
        flush();
        italic = !italic;
      } else buf += c;
    } else buf += c;
  }
  flush();
}

/** Inline: {{maths}}, **bold**, *italic* (nestable), `code`. Newlines become <br/>. */
export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const k = () => out.length;
  const parts = String(text ?? "").split(/(\{\{[\s\S]+?\}\})/g);
  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith("{{") && part.endsWith("}}")) {
      out.push(
        <span key={k()} className="math" dangerouslySetInnerHTML={{ __html: toMathML(part.slice(2, -2)) }} />,
      );
      continue;
    }
    pushStyled(part, out);
  }
  return out;
}

function splitRow(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

function renderTable(lines: string[], key: number): ReactNode {
  const rows = lines.filter((l) => !/^\s*\|?\s*:?-{2,}/.test(l));
  const [head, ...body] = rows.map(splitRow);
  return (
    <div key={key} className="rich-table-wrap">
      <table className="rich-table">
        <thead>
          <tr>{head.map((c, i) => <th key={i}>{renderInline(c)}</th>)}</tr>
        </thead>
        <tbody>
          {body.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}>{renderInline(c)}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Block-level renderer: paragraphs, bullets, numbered lists, tables, callouts, calc lines. */
export function renderBlocks(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const k = () => out.length;
  const blocks = String(text ?? "").replace(/\r\n/g, "\n").split(/\n\s*\n/);
  for (const block of blocks) {
    if (!block.trim()) continue;
    const lines = block.split("\n");
    // Group consecutive lines of the same kind inside a block.
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^\s*#{1,4}\s+/.test(line)) {
        out.push(
          <h4 key={k()} className="rich-h3">
            {renderInline(line.replace(/^\s*#{1,4}\s+/, ""))}
          </h4>,
        );
        i++;
      } else if (/^\s*\|/.test(line)) {
        const tbl: string[] = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) tbl.push(lines[i++]);
        out.push(renderTable(tbl, k()));
      } else if (/^\s*[-•]\s+/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\s*[-•]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-•]\s+/, ""));
        out.push(<ul key={k()} className="rich-ul">{items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ul>);
      } else if (/^\s*\d+[.)]\s+/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)]\s+/, ""));
        out.push(<ol key={k()} className="rich-ol">{items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}</ol>);
      } else if (/^>\s?/.test(line)) {
        const q: string[] = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ""));
        out.push(<blockquote key={k()} className="rich-callout">{renderInline(q.join("\n"))}</blockquote>);
      } else if (/^( {4}|\t)/.test(line)) {
        const c: string[] = [];
        while (i < lines.length && /^( {4}|\t)/.test(lines[i])) c.push(lines[i++].replace(/^( {4}|\t)/, ""));
        out.push(<div key={k()} className="rich-calc">{c.map((l, j) => <div key={j}>{renderInline(l)}</div>)}</div>);
      } else {
        const p: string[] = [];
        while (
          i < lines.length &&
          !/^\s*#{1,4}\s+/.test(lines[i]) &&
          !/^\s*\|/.test(lines[i]) &&
          !/^\s*[-•]\s+/.test(lines[i]) &&
          !/^\s*\d+[.)]\s+/.test(lines[i]) &&
          !/^>\s?/.test(lines[i]) &&
          !/^( {4}|\t)/.test(lines[i])
        )
          p.push(lines[i++]);
        out.push(<p key={k()}>{renderInline(p.join("\n"))}</p>);
      }
    }
  }
  return out;
}

/** Rich block text. */
export function Rich({ text, className }: { text: string; className?: string }) {
  return <div className={`rich ${className ?? ""}`}>{renderBlocks(text)}</div>;
}

/** Rich inline text (for options, hints, short labels). */
export function RichInline({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{renderInline(text)}</span>;
}

/** Inline SVG diagram from trusted content. */
export function Diagram({ svg, caption }: { svg: string; caption?: string }) {
  return (
    <figure className="diagram">
      <div className="diagram-svg" dangerouslySetInnerHTML={{ __html: svg }} />
      {caption ? <figcaption>{renderInline(caption)}</figcaption> : null}
    </figure>
  );
}
