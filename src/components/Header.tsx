import { Link } from "react-router-dom";
import LogoIcon from "@/assets/icons/logo.svg";
import imgAvatar from "@/assets/icons/header_icons/image_icon.svg"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navHeaders } from "@/constants";
import CloseIcon from "@/assets/icons/close.svg"
import { useTheme } from "@/components/theme-provider"
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { MenuIcon } from "lucide-react";



export default function Header() {
  const [toggle, setToggle] = useState(false)
  const { setTheme, theme } = useTheme()

  const isDarkMode = theme === "dark"

  // useEffect(() => {
  //   if(toggle) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "auto"
  //   }
  
  //   return () => {
  //     document.body.style.overflow = "auto"
  //   }
  // }, [toggle])
  

  const handleToogleButton = () => {
    setToggle(!toggle)
  }

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <header className='fixed top-0 z-50 bg-white dark:bg-background-dark w-full h-[64px] shadow-md flex justify-between items-center'>
      <div className="flex justify-between items-center container" >
        {/* logo */}
        <div>
          <Link to='/' className="dark:bg-white text-white" >
            <img src={LogoIcon} alt="logo" className="w-[37px] h-fit" />
          </Link>
        </div>

        <nav>
          {/* mobile */}
          <div
            className={`${
              toggle ? "lg:block translate-x-0 opacity-100" : "translate-x-full opacity-50 hidden"
            } flex lg:hidden bg-white dark:bg-background-dark dark:text-white min-h-screen absolute top-[63px] right-0 p-6 h-screen transition-all duration-500 ease-in-out transform w-[100%]`}
          >
            <ul className="w-full">
              {navHeaders.map((link) => (
                <li className={`mb-2 text-[14px]`} key={link.label}>
                  <NavLink
                    to={link.link}
                    onClick={handleToogleButton}
                    className={({ isActive }) => isActive ? "flex gap-4 items-center w-full py-2 px-4 relative" : "flex gap-4 items-center w-full py-2 px-4 relative"}
                  >
                    <img src={link.icon} alt={link.label} />
                    {link.label}
                    {link.label === "Notifications" ? <span className="cursor-pointer absolute right-4 bg-[#F43F5E] text-white w-5 h-5 rounded-full flex justify-center items-center">3</span> : null}
                  </NavLink>
                </li>
              ))}
              <li className="flex gap-2 items-center w-full py-2 px-4 text-sm">
                <Switch 
                  id="dark-mode" className="bg-gray-200 dark:bg-gray-900"
                  checked={isDarkMode}
                  onCheckedChange={toggleTheme}
                />
                <Label htmlFor="dark-mode" className="font-normal">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </Label>
              </li>
              <li className="flex gap-2 items-center w-full py-2 px-4 text-sm">
                <img src={imgAvatar} alt="user icon" className="cursor-pointer w-8 h-fit border rounded-full" />
                <div className="flex flex-col cursor-pointer">
                  <p>Zubair Alao</p>
                  <p>AlaoZubair@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* toggleBar */}
        <div>
          {toggle ? 
          <img
            src={CloseIcon}
            alt="close"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={handleToogleButton}
          />
          :
          // <img
          //   src={MenubarIcon}
          //   alt="menu"
          //   className="w-[24px] h-[24px] object-contain flex md:hidden cursor-pointer"
          //   onClick={handleToogleButton}
          // />
          <MenuIcon 
          className="w-[24px] h-[24px] flex xl:hidden cursor-pointer dark:text-white text-[#64748B]"
            onClick={handleToogleButton}
          />
          }
        </div>
      </div>
    </header>

  );
}
