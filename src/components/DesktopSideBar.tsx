import imgAvatar from "@/assets/icons/header_icons/image_icon.svg"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navHeaders } from "@/constants";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "@/components/theme-provider"
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoIcon from "@/assets/icons/logo.svg";


const DesktopSideBar = () => {
    const [toggleDesktopFullWidth, setToggleDesktopFullWidth] = useState(false)
    const { setTheme, theme } = useTheme()

    const isDarkMode = theme === "dark"

    const toggleTheme = () => {
        setTheme(isDarkMode ? "light" : "dark")
    }

    const handleToggleDesktopFullWidth = () => {
        setToggleDesktopFullWidth(!toggleDesktopFullWidth)
      }
    
  return (
    <div>
        {/* desktop */}
        <div
            className={`pt-20 xl:pt-4 max-w-fit sticky top-0 z-20 hidden xl:flex flex-col bg-white dark:bg-background-dark dark:text-white min-h-screen p-6 h-screen transform w-full border-r dark:border-none border-gray-300`}
          >
            <div className="mb-4 px-4">
              <Link to='/' className="dark:bg-white text-white" >
                <img src={LogoIcon} alt="logo" className="w-[37px] h-fit" />
              </Link>
            </div>
            <ul className="w-full">
              {navHeaders.map((link) => (
                <li className={`text-[14px]`} key={link.label}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) => isActive ? "flex gap-4 items-center w-full py-2 px-4 relative" : "flex gap-4 items-center w-full py-2 px-4 relative"}
                  >
                    <img src={link.icon} alt={link.label} />
                    <p className={`${toggleDesktopFullWidth ? "hidden" : "block" }`}>
                        {link.label}
                        {link.label === "Notifications" ? <span className="cursor-pointer absolute right-4 top-2 bg-[#F43F5E] text-white w-5 h-5 rounded-full flex justify-center items-center">3</span> : null}
                    </p>
                  </NavLink>
                </li>
              ))}
              <li className="flex gap-2 items-center w-full py-2 px-4 text-sm">
                {toggleDesktopFullWidth ? 
                    <ArrowRight 
                    className="cursor-pointer w-[24px] text-[#64748B]"
                        onClick={handleToggleDesktopFullWidth}
                    />
                 : 
                    <ArrowLeft 
                    className="cursor-pointer w-[24px] text-[#64748B]"
                    onClick={handleToggleDesktopFullWidth}
                    />
                 }
                <p className={`cursor-pointer ${toggleDesktopFullWidth ? "hidden" : "block" }`} onClick={handleToggleDesktopFullWidth}>
                  collapse
                </p>
              </li>
              <li className="flex gap-2 items-center w-full py-2 px-4 text-sm">
                <Switch 
                  id="dark-mode" className="bg-gray-200 dark:bg-gray-900"
                  checked={isDarkMode}
                  onCheckedChange={toggleTheme}
                />
                <Label htmlFor="dark-mode" className={`${toggleDesktopFullWidth ? "hidden" : "block" } font-normal cursor-pointer`}>
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </Label>
              </li>
              <li className="flex gap-2 items-center w-full py-2 px-4 text-sm">
                <img src={imgAvatar} alt="usericon" className="cursor-pointer w-8 h-fit border rounded-full" />
                <div className={`${toggleDesktopFullWidth ? "hidden" : "block"} flex flex-col cursor-pointer`}>
                  <p>Zubair Alao</p>
                  <p className="">AlaoZubair@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default DesktopSideBar