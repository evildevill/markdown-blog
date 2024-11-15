import React from "react";

export function SkeletonLoader () {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-0 hidden w-14 flex-col pt-20 border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-9 w-9 bg-muted animate-pulse rounded-lg" />
          ))}
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-0 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-muted animate-pulse rounded-full" />
            <div className="space-y-1">
              <div className="h-4 bg-muted animate-pulse rounded w-24" />
              <div className="h-3 bg-muted animate-pulse rounded w-16" />
            </div>
          </div>
          <div className="ml-auto h-8 w-20 bg-muted animate-pulse rounded" />
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <div className="grid gap-4">
            <div className="h-8 bg-muted animate-pulse rounded w-2/3" />
            <div className="h-6 bg-muted animate-pulse rounded w-1/3" />
          </div>
        </main>
      </div>
    </div>
  );
};
