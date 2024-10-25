import InformationIcon from "@/assets/icons/information.svg"
import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg"
import ArrowDownIcon from "@/assets/icons/arrow-down-right.svg"

const Hero = () => {
  return (
    <section className='pt-20 xl:pt-0 container'>
        <h1 className='text-base font-semibold mb-4 mt-4'>Welcome! here’s your summary</h1>
        <div className='space-y-2 lg:space-y-0 text-base lg:flex gap-4'>
            <div className='border-2 dark:border-none dark:bg-background-dark p-2 rounded-md flex-1'>
                <div className='space-x-3 flex items-center'>
                    <p className='text-base font-bold text-primarySelect'>Total Events</p>
                    <img src={InformationIcon}alt="infor icon" />
                </div>
                <div className='space-x-2 flex items-center'>
                    <p className='text-xl font-bold'>100,000</p>
                    <div className='flex items-center gap-2'>
                        <img src={ArrowUpIcon} alt="arrow up" />
                        <p className='text-green-500'>+5%</p>
                    </div>
                </div>
            </div>
            <div className='border-2 dark:border-none dark:bg-background-dark p-2 rounded-md flex-1'>
                <div className='space-x-3 flex items-center'>
                    <p className='text-base font-semibold text-primarySelect'>Active Speakers</p>
                    <img src={InformationIcon}alt="infor icon" />
                </div>
                <div className='space-x-2 flex items-center'>
                    <p className='text-xl font-bold'>25</p>
                    <div className='flex items-center gap-2'>
                        <img src={ArrowDownIcon} alt="arrow down" />
                        <p className='text-red-500'>-5%</p>
                    </div>
                </div>
            </div>
            <div className='border-2 dark:border-none dark:bg-background-dark p-2 rounded-md flex-1'>
                <div className='space-x-3 flex items-center'>
                    <p className='text-base font-semibold text-primarySelect'>Total Registrations</p>
                    <img src={InformationIcon}alt="infor icon" />
                </div>
                <div className='space-x-2 flex items-center'>
                    <p className='text-xl font-bold'>300</p>
                    <div className='flex items-center gap-2'>
                        <img src={ArrowUpIcon} alt="arrow up" />
                        <p className='text-green-500'>+5%</p>
                    </div>
                </div>
            </div>
            <div className='border-2 dark:border-none dark:bg-background-dark p-2 rounded-md flex-1'>
                <div className='space-x-3 flex items-center'>
                    <p className='text-xl font-semibold text-primarySelect'>Total Revenue</p>
                    <img src={InformationIcon}alt="infor icon" />
                </div>
                <div className='space-x-2 flex items-center'>
                    <p className='text-xl font-bold'>500,000</p>
                    <div className='flex items-center gap-2'>
                        <img src={ArrowUpIcon} alt="arrow up" />
                        <p className='text-green-500'>+5%</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero