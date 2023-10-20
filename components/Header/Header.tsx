import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { AbstractDesign, Arrow, CricketBall } from '@/components/Icons'

export const Header = () => {
  return (
    <header id="top" className="bg-darkGreen15 w-full">
      <div className="px-40 py-4">
        <div className="h-11 bg-darkGreen20 px-5 rounded-md flex justify-between">
          <AbstractDesign />
          <div className="flex items-center text-absoluteWhite text-sm gap-3">
            <CricketBall />
            <p>Join Our Personalized Nutrition Demo For Free</p>
            <Arrow />
          </div>
          <AbstractDesign reverse={true} />
        </div>
      </div>
      <nav className="py-5 px-40 flex justify-between items-center">
        <Logo />
        <ul className="flex gap-3 text-absoluteWhite items-center">
          <NavLink>
            <a href="#">Home</a>
          </NavLink>
          <NavLink>
            <a href="#">About</a>
          </NavLink>
          <NavLink>
            <a href="#">Team</a>
          </NavLink>
          <NavLink>
            <a href="#">Process</a>
          </NavLink>
          <NavLink>
            <a href="#">Pricing</a>
          </NavLink>
          <NavLink>
            <a href="#">Blog</a>
          </NavLink>
          <a
            href="#"
            className="px-6 py-3 bg-greenShade70 text-greyShade15 rounded-lg"
          >
            Contact Us
          </a>
        </ul>
      </nav>
    </header>
  )
}
