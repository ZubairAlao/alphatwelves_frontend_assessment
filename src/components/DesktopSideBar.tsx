import imgAvatar from "@/assets/icons/header_icons/image_icon.svg"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navHeaders } from "@/constants";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "./theme-provider";
import { ArrowLeft, ArrowRight } from "lucide-react";


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
            className={`pt-20 max-w-[240px] overflow-y-auto hidden xl:flex bg-white dark:bg-background-dark dark:text-white min-h-screen p-6 h-screen transform w-[100%] border-r dark:border-none border-gray-300`}
          >
            <ul className="w-full">
              {navHeaders.map((link) => (
                <li className={`mb-2 text-[14px]`} key={link.label}>
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
                <p className={`${toggleDesktopFullWidth ? "hidden" : "block" }`}>
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
                <div className={`${toggleDesktopFullWidth ? "hidden" : "block"}  flex flex-col cursor-pointer`}>
                  <p>Zubair Alao</p>
                  <p>AlaoZubair@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default DesktopSideBar