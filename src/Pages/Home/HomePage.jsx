import Hero from '../../Components/Hero/Hero';
import './Home.css'
import hero_2 from '../../Components/Assets/hero/hero-2.jpg'
import SwiperSection from '../../Components/SwiperSection/SwiperSection';






export default function HomePage() {

  
  
  return (
    
      <div className='home'>
      
      <Hero/>
      <div className='mid-div'>
        <img src={hero_2} alt='' />
       <div className='about-us'>
        <h2>About ATHATH:</h2>
        <hr />
        <p>
          At ATHATH, we believe your home should be a reflection of your style and story. That's why we curate a collection of high-quality, handcrafted furniture that's designed to not only elevate your space but also provide lasting comfort and functionality. Founded in [1972], we're passionate about making furniture shopping accessible and enjoyable, offering a diverse selection that caters to various tastes and budgets. Whether you're searching for a statement piece for your living room or cozy accents for your bedroom, we're here to help you create a haven that reflects your unique personality.
        </p>
       </div>
       </div> 
       <SwiperSection/> 
     
      
        
    </div>
   
  );


 
}
//{product.map((product, i)=>(
  //<Item key={i} product={product}/>
//))}