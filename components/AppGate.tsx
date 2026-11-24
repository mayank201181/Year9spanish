"use client";
// Status machine: loading → (welcome | who's studying? | load error) → app.
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useStore } from "@/lib/store";
import { AuthGate } from "./AuthGate";
import { ProfilePicker } from "./ProfilePicker";
import { SiteHeader, MobileNav } from "./SiteHeader";
import { ErrorBoundary } from "./ErrorBoundary";

function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-ink-2" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-soft border-t-brand" aria-hidden />
      <span>Opening your Spanish Lab…</span>
    </div>
  );
}

function LoadError() {
  const { retryLoad, logout, switchProfile, account } = useStore();
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <div className="text-5xl" aria-hidden>
        📡
      </div>
      <h1 className="mt-2 text-xl font-extrabold">Couldn&apos;t load your progress</h1>
      <p className="mt-2 text-ink-2">We couldn&apos;t reach the server, so nothing has been changed. Check the internet connection and try again.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button type="button" className="btn btn-primary" onClick={() => void retryLoad()}>
          Try again
        </button>
        {account && account.profiles.length > 1 ? (
          <button type="button" className="btn btn-secondary" onClick={switchProfile}>
            Switch learner
          </button>
        ) : null}
        <button type="button" className="btn btn-ghost" onClick={() => void logout()}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export function AppGate({ children }: { children: ReactNode }) {
  const { status, startGuest } = useStore();
  const path = usePathname();
  // The parent dashboard works without choosing a learner (it has its own PIN gate).
  const parentRoute = path?.startsWith("/parent");
  let body: ReactNode;
  if (status === "loading") body = <Loading />;
  else if (status === "load-error") body = <LoadError />;
  else if (status === "no-profile" && !parentRoute) body = <ProfilePicker />;
  else body = children;
  const showChrome = status === "ready" || status === "anon" || (status === "no-profile" && parentRoute);
  return (
    <>
      {showChrome ? (
        <ErrorBoundary silent>
          <SiteHeader />
        </ErrorBoundary>
      ) : null}
      <main className={`mx-auto w-full max-w-5xl px-4 pt-4 ${showChrome ? "pb-28" : "pb-12"}`}>{body}</main>
      {status === "anon" ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Optional cloud sync"
          onClick={(e) => {
            if (e.target === e.currentTarget) startGuest();
          }}
        >
          <div className="relative w-full max-w-md rounded-2xl bg-bg p-4 shadow-2xl">
            <button
              type="button"
              onClick={startGuest}
              aria-label="Close and stay in local mode"
              className="btn btn-ghost absolute right-3 top-3 text-sm"
            >
              ✕
            </button>
            <AuthGate />
          </div>
        </div>
      ) : null}
      {showChrome ? (
        <ErrorBoundary silent>
          <MobileNav />
        </ErrorBoundary>
      ) : null}
    </>
  );
}
