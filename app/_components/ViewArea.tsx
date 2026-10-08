"use client";

import { useNavigation } from "./Navigation";
import { skeletonFor } from "./skeletons";

/**
 * The scrollable view area. While a navigation is in flight, the destination's
 * skeleton is laid over the old view. It fades in after a short delay (see
 * `.view-skeleton` in globals.css), so prefetched views that arrive instantly
 * never flash a skeleton.
 */
export function ViewArea({ children }: { children: React.ReactNode }) {
  const { target } = useNavigation();

  return (
    <div className="relative min-h-0 flex-1">
      <main className="absolute inset-0 scroll-pt-4 overflow-y-auto p-4 sm:scroll-pt-7 sm:p-7">
        {children}
      </main>
      {target && (
        <div key={target} className="view-skeleton absolute inset-0 overflow-hidden bg-bg p-4 sm:p-7">
          {skeletonFor(target)}
        </div>
      )}
    </div>
  );
}
