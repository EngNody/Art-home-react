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

// import reportWebVitals from './reportWebVitals';

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
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
