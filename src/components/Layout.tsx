import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import DesktopSideBar from './DesktopSideBar'

const Layout = () => {
  return (
    <div>
        <Header />
        <main className='xl:flex gap-2 bg-white dark:bg-gray-800 dark:text-white'>
            <DesktopSideBar/>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout