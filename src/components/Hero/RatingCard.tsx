import { FaGoogle, FaStar } from 'react-icons/fa6'
import { TbNorthStar } from "react-icons/tb";

const reviewerImages = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80',
]

function RatingCard() {
  return (
    <aside
      aria-label="Rated 4.9 out of 5 by over 1,200 customers"
      className="relative mt-10 flex w-full max-w-[280px] flex-col self-stretch pt-2 text-white md:mt-0 md:w-[280px] md:max-w-none"
    >
      <div aria-hidden="true" className="absolute top-0 left-5 right-5 z-0 h-3 rounded-t-full bg-agrone-cream" />
      <div className="relative z-10 flex flex-1 flex-col justify-between rounded-[1.6rem] bg-agrone-lime p-5 shadow-xl sm:p-6">
        <div className="flex items-start gap-1">
          <span className="text-7xl leading-none font-regular tracking-tight">4.9</span>
          <FaStar aria-hidden="true" className="mt-1 size-7" />
        </div>
        <p className="text-sm font-medium">1200+ Customers Review</p>
        <div aria-label="Customer reviewers" className="mt-5 flex -space-x-2">
          {reviewerImages.map((image) => (
            <img
              alt=""
              aria-hidden="true"
              className="size-10 rounded-full border-2 border-agrone-lime object-cover"
              key={image}
              src={image}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between">
          <FaGoogle aria-hidden="true" className="size-7" />
          <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-full bg-agrone-green">
            <TbNorthStar className="size-7 text-agrone-lime" />
          </span>
        </div>
      </div>
    </aside>
  )
}

export default RatingCard
