import { FaBolt } from "react-icons/fa6";
import { TbDrone, TbNorthStar } from "react-icons/tb";

function SectionHeading() {
  return (
    <div className="flex items-start justify-between gap-8 max-md:flex-col max-md:gap-5">
      <h2
        className="max-w-3xl text-[clamp(2.2rem,4.5vw,4rem)] leading-[0.98] font-medium tracking-[-0.055em] text-agrone-green"
        id="operations-intro-heading"
      >
        <span className="flex items-center gap-2">
          <span className="inline-flex shrink-0 items-center gap-0.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-agrone-cream text-agrone-green sm:size-10">
              <FaBolt aria-hidden="true" className="size-4" />
            </span>
            <span className="flex size-10 items-center justify-center rounded-full bg-agrone-green text-agrone-lime sm:size-12">
              <TbDrone aria-hidden="true" className="size-6" />
            </span>
          </span>
          <span>Elevates</span>
        </span>
        <span className="block">
          drone agricultural
          <span className="inline-flex size-9 shrink-0 items-center ml-3 justify-center rounded-full bg-agrone-cream text-agrone-lime sm:size-11">
            <TbNorthStar aria-hidden="true" className="size-7" />
          </span>
        </span>
        <span className="block">operations new heights</span>
      </h2>
      <a
        className="mt-4 inline-flex shrink-0 items-center justify-center rounded-full border border-agrone-green px-5 py-2.5 text-sm font-medium uppercase text-agrone-green transition-colors hover:bg-agrone-green hover:text-white max-md:mt-0"
        href="#products"
      >
        Explore Drones
      </a>
    </div>
  );
}

export default SectionHeading;
