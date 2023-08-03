import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
// import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
  </React.StrictMode>
);




serviceWorkerRegistration.register();





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
