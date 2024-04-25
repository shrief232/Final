import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../../Components/Items/Item";
import './profile.css'
import Loader from "../../Components/Loader/Loader";


export default function ProfilePage() {
  const[product, setProduct] = useState([]);
  const [isloading, setIsloading] = useState(false);
  

  useEffect(() =>{
    setIsloading(true);
    setTimeout(()=>{
    axios("http://localhost:3004/products?category=Kids").then((data) =>{
       setProduct(data.data);
       setIsloading(false);
       console.log(data.data);
    })
  }, 1000);
  },[])

  if (isloading) return <Loader/>;

  return (
    <div className="profile">
      <h1>The Finest Selection of Home Decor</h1>
      <hr />
      <div className='bedroom'>
         {product.map((product, i)=>(
           <Item key={i} product={product}/>
          ))}
       </div>
    </div>
  )
}
