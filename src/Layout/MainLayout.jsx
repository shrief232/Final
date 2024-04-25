import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import './MainLayout.css';
import Footer from '../Components/Footer/Footer';



export default function MainLayout() {

  return (
  
    <div className="body">
    
        <Header />
        <Outlet />
        <Footer/>
      </div>  

    
  )
}
