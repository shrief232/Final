
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/Home/HomePage';
import ProductsPage from './Pages/Products/ProductsPage';
import CartPage from './Pages/Cart/CartPage';
import ProfilePage from './Pages/Profile/ProfilePage';
import LoginPage from './Join/Login/LoginPage';
import RegisterPage from './Join/Register/RegisterPage';
import { RecoilRoot } from 'recoil';
import IsLoggedin from './Components/ProtectedRoutes/IsLoggedin';
import IsNotLoggedin from './Components/ProtectedRoutes/IsNotLoggedin';
import ShopPage from './Pages/Shop/ShopPage';
import SingleProduct from './Pages/SinglePages/SingleProduct';



function App() {
  return (
    <div className="App">
     <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path="" element={<IsLoggedin><Outlet /></IsLoggedin>}>
              <Route index element={<HomePage />} />
              <Route path='products' element={<ProductsPage/>} />
              <Route path='cart' element={<CartPage/>} />
              <Route path='profile' element={<ProfilePage/>} />
              <Route path='shop' element={<ShopPage/>} />
              <Route path='product/:id' element={<SingleProduct />} />
            </Route>
            <Route path="" element={<IsNotLoggedin><Outlet/></IsNotLoggedin>}>
              <Route path='login' element={<LoginPage/>} />
              <Route path='register' element={<RegisterPage/>} />
            </Route>
            
          </Route>


        </Routes>
      
      
      </BrowserRouter>
     </RecoilRoot> 
        
      
      
      
     
    
    </div>
  );
}

export default App;
