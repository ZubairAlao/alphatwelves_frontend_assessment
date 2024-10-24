import EventChart from '@/components/EventChart'
import EventHistory from '@/components/EventHistory'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      <EventChart />
      <EventHistory/>

    </div>
  )
}

export default Home