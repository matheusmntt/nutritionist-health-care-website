import React from 'react'

export const NavLink = ({ children }: { children: React.ReactNode }) => {
  return <li className="hover:text-greenShade70 cursor-pointer">{children}</li>
}
