import React from 'react'
import Banner from '../Components/Banner/Banner'
import Newsletter from '../Components/Newsletter/Newsletter'
import Peoples from '../Components/People/Peoples'

const Home = () => {
  return (
    <div>
    <Banner />
  <div className='my-20'>
    <h2 className="text-3xl text-center font-semibold">
      <span className='font-bold text-emerald-600'>Peoples</span> who are using this website
    </h2>
  <Peoples />
  </div>
    <Newsletter />
    </div>
  )
}

export default Home
