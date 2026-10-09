import ContactButton from './ContactButton'
import Logo from './Logo'
import Navigation from './Navigation'
import Search from './Search'

function Header() {
  return (
    <header className="relative z-20 px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] items-center gap-2 sm:gap-3">
        <Logo />
        <div className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-full bg-white px-3 py-2.5 sm:px-5 lg:px-7">
          <Navigation />
          <Search />
        </div>
        <ContactButton />
      </div>
    </header>
  )
}

export default Header
