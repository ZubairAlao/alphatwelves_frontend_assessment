import { footerHeaders } from "@/constants"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-800 flex items-center border-t justify-between py-2 container fixed bottom-0 lg:hidden'>
       {footerHeaders.map((link) => (
          <li className='list-none' key={link.label}>
            <NavLink
              to={link.link}
              className={({ isActive }) => isActive
                ? "relative text-gray-600 dark:text-blue-600 flex flex-col gap-2 items-center p-2 text-[14px] after:content-[''] after:absolute after:left-0 after:right-0 after:top-[-10px] after:h-[4px] after:bg-blue-500 transition-all duration-300 ease-in-out"
                : "flex flex-col gap-2 items-center w-full p-2 hover:text-gray-600 text-[#9C9D9F] dark:text-white text-[14px] transition-all duration-300 ease-in-out"
              }
            >
              <img src={link.icon} alt={link.label}/>
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
    </footer>
  )
}

export default Footer