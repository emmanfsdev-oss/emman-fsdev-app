import { Bone, ChipRow, ViewSkeleton } from "./Skeleton";

export function OverviewSkeleton() {
  return (
    <ViewSkeleton label="overview" className="flex min-h-full flex-wrap gap-4">
      <div className="flex flex-[2_1_560px] flex-col justify-center gap-6 rounded-tile bg-card p-7 sm:p-11">
        <div className="flex items-center gap-4">
          <Bone className="size-20 rounded-full" />
          <Bone className="h-9 w-64 rounded-full" />
        </div>
        <div className="flex flex-col gap-3">
          <Bone className="h-12 w-11/12 sm:h-14" />
          <Bone className="h-12 w-10/12 sm:h-14" />
          <Bone className="h-12 w-7/12 sm:h-14" />
        </div>
        <div className="flex flex-col gap-2.5">
          <Bone className="h-4 w-full max-w-2xl" />
          <Bone className="h-4 w-9/12 max-w-xl" />
        </div>
        <div className="flex gap-2.5">
          <Bone className="h-12 w-40 rounded-full" />
          <Bone className="h-12 w-36 rounded-full" />
        </div>
      </div>
      <div className="flex flex-[1_1_300px] flex-col gap-4">
        <div className="flex min-h-56 flex-1 flex-col justify-between gap-3 rounded-tile bg-tile p-7">
          <Bone className="h-4 w-44 bg-tile-ink/15" />
          <Bone className="h-20 w-48 bg-tile-ink/15" />
          <Bone className="h-4 w-52 bg-tile-ink/15" />
        </div>
        <div className="flex min-h-48 flex-1 flex-col gap-3 rounded-tile bg-warm/40 p-7">
          <Bone className="h-3 w-12 bg-warm/60" />
          <Bone className="h-8 w-44 bg-warm/60" />
          <Bone className="h-4 w-full bg-warm/60" />
        </div>
      </div>
    </ViewSkeleton>
  );
}

export function WorkSkeleton() {
  return (
    <ViewSkeleton label="work" className="flex flex-wrap items-start gap-4">
      <div className="flex flex-[2_1_560px] flex-col gap-4 rounded-tile bg-card p-7 sm:p-10">
        <div className="flex justify-between">
          <Bone className="h-7 w-24 rounded-full" />
          <Bone className="h-5 w-36" />
        </div>
        <Bone className="h-10 w-10/12" />
        <Bone className="h-10 w-5/12" />
        <Bone className="h-4 w-64" />
        <Bone className="h-5 w-80 max-w-full" />
        <div className="flex flex-col gap-3 py-1">
          {["w-full", "w-11/12", "w-10/12", "w-8/12", "w-9/12"].map((w) => (
            <Bone key={w} className={`h-4 ${w}`} />
          ))}
        </div>
        <ChipRow count={7} />
      </div>
      <div className="flex flex-[1_1_320px] flex-col gap-3">
        <Bone className="mx-1.5 my-1 h-3.5 w-20" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-2.5 rounded-[20px] bg-card px-6 py-5">
            <div className="flex justify-between gap-3">
              <Bone className="h-5 w-40" />
              <Bone className="h-4 w-28" />
            </div>
            <Bone className="h-4 w-44" />
            <Bone className="h-4 w-10/12" />
          </div>
        ))}
      </div>
    </ViewSkeleton>
  );
}

export function StackSkeleton() {
  return (
    <ViewSkeleton
      label="stack"
      className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]"
    >
      {[9, 10, 8, 3, 5, 6].map((chips, i) => (
        <div key={i} className="flex flex-col gap-3.5 rounded-3xl bg-card p-7">
          <Bone className="h-6 w-28" />
          <ChipRow count={chips} />
        </div>
      ))}
      <div className="col-span-full flex flex-wrap items-center gap-5 rounded-3xl bg-tile p-7">
        <div className="flex flex-[1_1_240px] flex-col gap-2">
          <Bone className="h-6 w-44 bg-tile-ink/15" />
          <Bone className="h-4 w-64 bg-tile-ink/15" />
        </div>
        <div className="flex-[3_1_480px]">
          <ChipRow count={12} className="h-10 bg-tile-ink/15" />
        </div>
      </div>
    </ViewSkeleton>
  );
}

export function ProjectsSkeleton() {
  return (
    <ViewSkeleton
      label="projects"
      className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr))]"
    >
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex min-h-[340px] flex-col gap-3.5 rounded-tile bg-card p-8">
          <div className="flex justify-between">
            <Bone className="h-4 w-6" />
            <Bone className="h-6 w-28 rounded-full" />
          </div>
          <Bone className="h-7 w-9/12" />
          <Bone className="h-4 w-6/12" />
          <div className="flex flex-1 flex-col gap-2.5">
            <Bone className="h-4 w-full" />
            <Bone className="h-4 w-11/12" />
            <Bone className="h-4 w-8/12" />
          </div>
          <ChipRow count={4} className="h-6" />
        </div>
      ))}
    </ViewSkeleton>
  );
}

export function ContactSkeleton() {
  return (
    <ViewSkeleton label="contact" className="flex min-h-full flex-wrap gap-4">
      <div className="flex flex-[2_1_560px] flex-col justify-center gap-6 rounded-tile bg-brand/50 p-8 sm:p-12">
        <div className="flex flex-col gap-3">
          <Bone className="h-12 w-10/12 bg-white/25 sm:h-14" />
          <Bone className="h-12 w-6/12 bg-white/25 sm:h-14" />
        </div>
        <Bone className="h-5 w-full max-w-lg bg-white/25" />
        <div className="flex flex-wrap gap-2.5">
          <Bone className="h-13 w-64 rounded-full bg-white/25" />
          <Bone className="h-13 w-36 rounded-full bg-white/25" />
          <Bone className="h-13 w-48 rounded-full bg-white/25" />
        </div>
      </div>
      <div className="flex flex-[1_1_300px] flex-col gap-4">
        <div className="flex flex-1 flex-col gap-3 rounded-tile bg-card p-7">
          <Bone className="h-3.5 w-20" />
          <Bone className="h-7 w-52" />
          <Bone className="h-4 w-56" />
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-tile bg-tile p-7">
          <Bone className="h-3.5 w-28 bg-tile-ink/15" />
          <Bone className="h-7 w-24 bg-tile-ink/15" />
          <Bone className="h-4 w-52 bg-tile-ink/15" />
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-tile bg-brand-soft p-7">
          <Bone className="h-3.5 w-20 bg-brand/20" />
          <Bone className="h-7 w-32 bg-brand/20" />
          <Bone className="h-4 w-48 bg-brand/20" />
        </div>
      </div>
    </ViewSkeleton>
  );
}

/** Skeleton to show while navigating to `href`. */
export function skeletonFor(href: string) {
  if (href.startsWith("/work")) return <WorkSkeleton />;
  if (href.startsWith("/stack")) return <StackSkeleton />;
  if (href.startsWith("/projects")) return <ProjectsSkeleton />;
  if (href.startsWith("/contact")) return <ContactSkeleton />;
  return <OverviewSkeleton />;
}
