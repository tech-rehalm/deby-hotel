import Carousel from '@/components/Carousel'
import DailyOffer from '@/components/DailyOffer'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import { Hero } from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen w-full">
      <Hero/>
      <Services/>
      <Carousel/>
      <DailyOffer/>
      <Features/>
      <Footer/>
    </div>
  )
}
