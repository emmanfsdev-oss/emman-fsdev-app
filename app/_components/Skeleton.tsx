/**
 * A single pulsing placeholder block. Size and shape come from `className`;
 * pass a `bg-*` class to override the default colour (e.g. on dark tiles).
 */
export function Bone({ className = "" }: { className?: string }) {
  const tone = /(^|\s)bg-/.test(className) ? "" : "bg-chip";
  const radius = /(^|\s)rounded-/.test(className) ? "" : "rounded-lg";
  return <div aria-hidden className={`animate-pulse ${radius} ${tone} ${className}`} />;
}

/** Wraps a view skeleton and announces the loading state to screen readers. */
export function ViewSkeleton({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div role="status" aria-busy="true" className={className}>
      <span className="sr-only">Loading {label}…</span>
      {children}
    </div>
  );
}

/** A row of chip-shaped bones, e.g. for tech stacks. `className` overrides height/colour. */
export function ChipRow({ count, className = "" }: { count: number; className?: string }) {
  const height = /(^|\s)h-/.test(className) ? "" : "h-8";
  return (
    <div aria-hidden className="flex flex-wrap gap-2">
      {Array.from({ length: count }, (_, i) => (
        <Bone
          key={i}
          className={`rounded-xl ${height} ${["w-20", "w-16", "w-24", "w-14", "w-28"][i % 5]} ${className}`}
        />
      ))}
    </div>
  );
}
