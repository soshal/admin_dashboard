import React from "react";

import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";


import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Fotter/Footer.jsx';
import Menu from './components/Menu/Menu.jsx';
import Home from './pages/Home/Home.jsx';
import User from './pages/users/User.jsx';
import Products from './pages/products/Products.jsx';
function App() {
 

  const Layout = () => {
    return (
      <>
        
        <div className="main">
        <Navbar />
          <div className="container">
            <div className="menuContainer">
            <Menu />
            </div>
            <div className="contentContainer">
            <Outlet />
            </div>
          </div>
          <Footer />
        </div>
          
          
           
          
          
      </>
    );
  }
  


    
    const router =createBrowserRouter([{
    
      path:"/",
      element:<Layout />,
      children:[
        {path:"/",element:<Home />},
        {path:"/users",element:<User />},
        {path:"/products",element:<Products />}
      ]
    }]);  
  
    
   return (
    <RouterProvider router={router}>
    
    </RouterProvider>
   )
}

export default App;
