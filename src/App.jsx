import React from 'react'
import './index.css'
import Headr from './components/Headr'
import Slider from './components/Slider'
import Department from './components/Department'
import TopPicks from './components/TopPicks'
import RugSale from './components/RugSale'
import HorizontalScroll from './components/HorizontalScroll'
import BrandCarousel from './components/BrandCarousel'
import ImpactSection from './components/ImpactSection'
import About from './components/About'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
   <Headr/>
   <Slider/>
   <Department/>
   <TopPicks/>
   <RugSale/>
   <div className='hidden sm-736:block'>
    <HorizontalScroll/>
   </div>
   <BrandCarousel/>
   <ImpactSection/>
   <About/>
   <Footer/>
    </>

  )
}

export default App