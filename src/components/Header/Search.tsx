import { FaBagShopping, FaMagnifyingGlass } from 'react-icons/fa6'

function Search() {
  return (
    <div className="ml-auto flex shrink-0 items-center gap-2">
      <label className="flex h-9 w-9 items-center justify-center gap-2 rounded-full bg-agrone-cream px-2.5 sm:w-32 sm:justify-start">
        <FaMagnifyingGlass aria-hidden="true" className="size-3.5 shrink-0 text-agrone-green" />
        <input
          aria-label="Search"
          className="hidden w-full bg-transparent text-xs text-agrone-green outline-none placeholder:text-agrone-green/70 sm:block"
          placeholder="Search"
          type="search"
        />
      </label>
      <button
        aria-label="Shopping bag"
        className="flex size-9 items-center justify-center rounded-xl bg-agrone-cream text-agrone-green transition-colors hover:bg-agrone-lime"
        type="button"
      >
        <FaBagShopping aria-hidden="true" className="size-3.5" />
      </button>
    </div>
  )
}

export default Search
