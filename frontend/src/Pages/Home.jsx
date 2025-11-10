import React from 'react'
import Hero from'../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'
import SearchBar from '../Components/SearchBar'

const Home = () => {
  return (
    <div>
      <SearchBar/>
      <Hero/>
       <LatestCollection/>
       <BestSeller/>
       <OurPolicy/>
       <NewsletterBox/>
    </div>
  )
}

export default Home
