import React from 'react';
import './App.css';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aboutpage from './pages/aboutpage'
import Blog from './pages/blog'
import Cart from './pages/cart'
import Changepassword from './pages/changepassword'
import Checkout from './pages/checkout'
import Contactuspage from './pages/contactuspage'
import Myaccount from './pages/myaccount'
import Myorders from './pages/myorders'
import Ordertrack from './pages/ordertrack'
import Pagecategory from './pages/pagecategory'
import Pageoffer from './pages/pageoffer'
import Paycheckout from './pages/paycheckout'
import Signup from './pages/signup'
import Wishlistpage from './pages/wishlistpage'
import Makeup from './pages/beauty/makup'
import Skincare from './pages/beauty/skincare';
import Haircare from './pages/beauty/haircare';
import Fragrance from './pages/beauty/fragrance';
import Foothandcare from './pages/beauty/foothandcare';
import Accessories from './pages/beauty/accessories';
import Shaving from './pages/beauty/shaving';
import Personalcare from './pages/beauty/personalcare';
import {useContext} from "react";
import ThemeProvider from "./context/themecontext.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },  {
    path: "/aboutpage",
    element: <Aboutpage />,
  },  {
    path: "/blog",
    element: <Blog />,
  },  {
    path: "/cart",
    element: <Cart />,
  },  {
    path: "/changepassword",
    element: <Changepassword />,
  },  {
    path: "/checkout",
    element: <Checkout />,
  },  {
    path: "/contactuspage",
    element: <Contactuspage />,
  },  {
    path: "/myaccount",
    element: <Myaccount />,
  },  {
    path: "/myorders",
    element: <Myorders />,
  },  {
    path: "/ordertrack",
    element: <Ordertrack />,
  },  {
    path: "/pagecategory",
    element: <Pagecategory />,
  },  {
    path: "/pageoffer",
    element: <Pageoffer />,
  },  {
    path: "/paycheckout",
    element: <Paycheckout />,
  },  {
    path: "/signup",
    element: <Signup />,
  },  {
    path: "/wishlistpage",
    element: <Wishlistpage />,
  },   {
    path: "/makeup",
    element: <Makeup />,
  },   {
    path: "/skincare",
    element: <Skincare />,
  },   {
    path: "/haircare",
    element: <Haircare />,
  },   {
    path: "/fragrance",
    element: <Fragrance />,
  },   {
    path: "/foothandcare",
    element: <Foothandcare />,
  },   {
    path: "/accessories",
    element: <Accessories />,
  },   {
    path: "/shaving",
    element: <Shaving />,
  },   {
    path: "/personalcare",
    element: <Personalcare />,
  }, 
]);


function App() {
  const {theme} = useContext(ThemeProvider);


  return (
  <div className={`${theme}`}>
      
      <RouterProvider router={router} />
    
  </div>
  );
}



export default App;
