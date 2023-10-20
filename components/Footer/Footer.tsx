import { ArrowUp, Location, Mail, Phone } from '../Icons'
import { Logo } from '../Logo'
import { NavLink } from '../NavLink'

export const Footer = () => {
  return (
    <footer className="px-[10.125rem] py-[3.125rem] bg-darkGreen15 grid gap-[3.125rem] mt-[9.375rem]">
      <nav className="flex justify-between">
        <Logo />

        <ul className="flex gap-7 text-absoluteWhite items-center">
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
          <NavLink>
            <a href="#">Contact</a>
          </NavLink>
        </ul>

        <div className="flex items-center gap-5">
          <span className="text-[1.125rem] text-absoluteWhite">Got To Top</span>
          <a href="#top" className="p-3 bg-darkGreen20 rounded-full">
            <ArrowUp />
          </a>
        </div>
      </nav>

      <div className="p-5 bg-darkGreen20 rounded-lg flex justify-between items-center">
        <div className="flex gap-5">
          <div className="p-3 flex gap-1 border border-absoluteWhite/20 rounded-md">
            <Mail />
            <span className="text-absoluteWhite">hello@squareup.com</span>
          </div>
          <div className="p-3 flex gap-1 border border-absoluteWhite/20 rounded-md">
            <Phone />
            <span className="text-absoluteWhite">+91 91813 23 2309</span>
          </div>
          <div className="p-3 flex gap-1 border border-absoluteWhite/20 rounded-md">
            <Location />
            <span className="text-absoluteWhite">Somewhere in the World</span>
          </div>
        </div>
        <span className="text-absoluteWhite font-normal">
          &copy; 2023 Nutritionist. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
