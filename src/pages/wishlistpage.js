import React from 'react';
import './wishlist.css';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'
import { Helmet } from 'react-helmet-async';

const Wishlistpage = () => {
  return (
    <>
    <Helmet>
    <title>Wishlist</title>
    </Helmet>


          <div id="page" className="site single-page wishlist ">
          <Header />

            <main>
              <div className="single-product">
                <div className="container">
                  <div className="wrapper">
                    <div className="breadcrumb">
                      <ul className="flexitem">
                        <li><a href="/E-commerce2.html">Home </a></li>
                        <li><a href="#&quot;">Wishlist</a></li>
                      </ul>
                    </div>
                    <div className="redcontainer">
                    </div>
                  </div>
                </div>
              </div>
            </main>
          
          </div>
          <Menubottom />
          <Footer />
  
    </>
  );
}

export default Wishlistpage;
