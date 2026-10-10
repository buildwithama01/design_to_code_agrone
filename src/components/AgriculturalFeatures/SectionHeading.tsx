import { TbNorthStar } from "react-icons/tb";
import { HiArrowLongRight } from "react-icons/hi2";
function SectionHeading() {
  return (
    <h2
      className="mx-auto max-w-5xl text-center text-[clamp(2rem,10vw,2.75rem)] leading-[0.98] font-medium tracking-[-0.055em] text-agrone-green sm:text-[clamp(2.75rem,6vw,5rem)]"
      id="agricultural-features-heading"
    >
      <span className="inline-flex items-center justify-center gap-2">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-agrone-cream text-agrone-lime sm:size-12">
          <TbNorthStar aria-hidden="true" className="size-8" />
        </span>
        Elevates agricultural
      </span>
      <span className="mt-1 flex flex-wrap items-center justify-center gap-2 sm:translate-x-[0.75em]">
        operations to
        <span className="inline-flex h-9 w-20 items-center justify-center rounded-full bg-agrone-lime text-agrone-green">
          <HiArrowLongRight aria-hidden="true" className="size-8" />
        </span>
      </span>
      <span className="mt-1 block sm:translate-x-[0.75em]">new heights</span>
    </h2>
  );
}

export default SectionHeading;
