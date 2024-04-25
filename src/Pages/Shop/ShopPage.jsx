import './shop.css';
import Item from '../../Components/Items/Item';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';







export default function ShopPage() {
  const[product, setProduct] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() =>{
    setIsloading(true);
    setTimeout(()=>{
    axios("http://localhost:3004/products?category=BedRooms").then((data) =>{
       setProduct(data.data);
       console.log(data.data);
       setIsloading(false);
    })
    }, 1000);
  },[])
if (isloading)return <Loader/>
  
  return (
    <div className='Main-Page'>
      <h1>Shop All Furniture</h1>
      <hr />
      <div className='bedroom'>
         {product.map((product, i)=>(
           <Item key={i} product={product}/>
          ))}
       </div>
     
             
    </div>
  )
}
