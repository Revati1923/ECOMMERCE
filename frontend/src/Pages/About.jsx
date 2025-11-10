import React from 'react'
import SearchBar from '../Components/SearchBar'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'; 


const About = () => {

  return (
    <div>
       <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever was born out of a passion to create something meaningful and lasting.
            It began with a simple idea: to turn deep emotion into timeless design.
            Every detail reflects the love and care that inspired its origin.
              This isn’t just a brand — it’s a story that never fades.</p>
          <p>Since our inception, we've poured heart and soul into everything we do.
             We've literally grown from a spark of passion into something truly meaningful.
            Every step has been driven by purpose, creativity, and connection.
              And we're just getting started.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to create meaningful experiences that inspire and connect.We’re driven by passion, guided by purpose, and committed to lasting impact.
                Everything we do is rooted in quality, creativity, and care.</p>
           </div>
        </div>
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>

       <div className='flex flex-col md:flex-row text-sm mb-20' >
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gay-600'> We prioritize quality at every step to ensure you receive only the best.Every product undergoes careful checks for performance, durability, and finish.
             Your satisfaction is our promise — excellence is our standard.</p>
     </div>

      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b> Convenience:</b>
        <p className='text-gay-600'>We design every experience with your convenience in mind.From seamless navigation to quick support, everything is built to save you time and effort.
          Because simplicity shouldn’t come at the cost of quality.</p>
       </div>

       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b> Exceptional Customer Service:</b>
         <p className='text-gay-600'>  We’re here for you — every question, every concern, every step of the way.Our team is dedicated to providing fast, friendly, and reliable support.
        Because you deserve nothing less than exceptional care.</p>
       </div>
   </div>

    <NewsletterBox/>

       </div>
    
  )
}

export default About
