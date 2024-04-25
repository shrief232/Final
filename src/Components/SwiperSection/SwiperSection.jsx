import React from 'react';
import './SwiperSection.css'
import panner_1 from '../Assets/Swiper/panner-1.jpg'
import panner_3 from '../Assets/Swiper/panner-3.jpg'
import panner_2 from '../Assets/Swiper/panner-2.jpg'
import swiper_1 from '../Assets/Swiper/swiper-1.jpg'
import swiper_2 from '../Assets/Swiper/swiper-2.jpg'
import swiper_3 from '../Assets/Swiper/swiper-3.jpg'
import swiper_4 from '../Assets/Swiper/swiper-4.jpg'
import swiper_5 from '../Assets/Swiper/swiper-5.jpg'
    
const SwiperSection = () => {
    return(
        <div className='swiper-section'>
           <div className="slide-trak">
             <div className='swiper'><img  src={swiper_1} alt="" /></div> 
             <div className='swiper'><img  src={swiper_2} alt="" /></div>
             <div className='swiper'><img  src={swiper_3} alt="" /></div>
             <div className='swiper'><img  src={swiper_3} alt="" /></div>
             <div className='swiper'><img  src={swiper_3} alt="" /></div>
             <div className='swiper'><img  src={swiper_4} alt="" /></div>
             <div className='swiper'><img  src={swiper_5 } alt="" /></div>
             <div className='swiper'><img  src={panner_3 }alt="" /></div>
             <div className='swiper'><img  src={panner_2 } alt="" /></div>
             <div className='swiper'><img  src={panner_1 } alt="" /></div>
             <div className='swiper'><img  src={swiper_1} alt="" /></div>
             <div className='swiper'><img  src={swiper_2} alt="" /></div>
             <div className='swiper'><img  src={swiper_3} alt="" /></div>
             <div className='swiper'><img  src={swiper_4} alt="" /></div>
             <div className='swiper'><img  src={swiper_5 } alt="" /></div>
             <div className='swiper'><img  src={panner_3 }alt="" /></div>
             <div className='swiper'><img  src={panner_2 } alt="" /></div>
             <div className='swiper'><img  src={panner_1 } alt="" /></div>
           </div>  

        </div>
    )
}
   
export default SwiperSection
