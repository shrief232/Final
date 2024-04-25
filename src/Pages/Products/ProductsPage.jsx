import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../../Components/Items/Item";
import './Products.css'
import Loader from "../../Components/Loader/Loader";



export default function ProductsPage() {
  const[product, setProduct] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() =>{
    setIsloading(true);
    setTimeout(()=>{
    axios("http://localhost:3004/products?category=LivingRoom").then((data) =>{
       setProduct(data.data);
       console.log(data.data);
       setIsloading(false);
    })
  }, 1000);
  },[])

  if(isloading) return <Loader/>

  return (
    <div className="ProductsPage">
      <h1>Shop Unique & Sustainable Products</h1>
      <hr />
      <div className='bedroom'>
         {product.map((product, i)=>(
           <Item key={i} product={product}/>
          ))}
       </div>
    </div>
  )
}
