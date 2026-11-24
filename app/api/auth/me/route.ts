import { NextResponse } from "next/server";
import { accountsEnabled, currentAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const accounts = accountsEnabled();
  const ai = !!process.env.ANTHROPIC_API_KEY;
  if (!accounts) return NextResponse.json({ account: null, accounts, ai });
  try {
    return NextResponse.json({ account: await currentAccount(), accounts, ai });
  } catch {
    return NextResponse.json({ error: "Couldn't reach the account service." }, { status: 503 });
  }
}
