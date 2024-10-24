import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col bg-black min-h-screen'>
      <div className='text-white mt-[60px] text-xl'>NotFound</div>
      <Link to="/">
      go back
      </Link>
    </div>
  )
}

export default NotFound