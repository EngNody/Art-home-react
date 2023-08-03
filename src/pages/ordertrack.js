import React from 'react';
import './ordertrack.css'
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Ordertrack = () => {
  return (
    <>
    <Helmet>
    <title>Order Track</title>
    </Helmet>

    <div id="page" class="site single-page paycheck orrder">

    <Header />

            <main>
              {/* the second theme for order track html & css & js */}
              {/* Animated Step Progriss Bay */}
              <div className="main">
                <div className="head">
                  <p className="head-1">Animate Step <span>Progress Bar</span></p>
                  <p className="head-2">Using Html , Css &amp; java script</p>
                </div>
                <ul>
                  <li>
                    <img src="images/focus.png" alt="" />
                    <div className=" progress one">
                      <p>1</p>
                      {/* <img src="images/check3.jpg" alt=""> */}
                      {/* <span class="icon-check-alt"></span> */}
                      <span className="icon-checkmark" />
                    </div>
                    <p className="text">Add To Cart</p>
                  </li>
                  <li>
                    <img src="images/details.jpg" alt="" />
                    <div className="progress two">
                      <p>2</p>
                      <span className="icon-checkmark" />
                    </div>
                    <p className="text">Fill Details</p>
                  </li>
                  <li>
                    <img src="images/credit-card.png" alt="" />
                    <div className="progress three">
                      <p>3</p>
                      <span className="icon-checkmark" />
                    </div>
                    <p className="text">Make Payment</p>
                  </li>
                  <li>
                    <img src="images/exchange-arrow.png" alt="" />
                    <div className="progress four">
                      <p>4</p>
                      <span className="icon-checkmark" />
                    </div>
                    <p className="text">Order In Progress</p>
                  </li>
                  <li>
                    <img src="images/map.jpg" alt="" />
                    <div className="progress five">
                      <p>5</p>
                      <span className="icon-checkmark" />
                    </div>
                    <p className="text">Order Arrived</p>
                  </li>
                </ul>
              </div>
              {/* the second theme for order track by html & css only*/}
              <div className="containertrack">
                <div className="details">
                  <div className="order">
                    <h1>Order <span>4567890</span></h1>
                  </div>
                  <div className="date">
                    <p>Expected Arrival <span className="arrdate" /></p>
                    {/* 21/10/2021 */}
                    <p>USPS <b>3456788888890</b></p>
                  </div>
                </div>
                <div className="mobilecase">
                  <div className="track">
                    <ul id="progress" className="text-center">
                      <li className="one2" />
                      <li className="two2" />
                      <li className="three2" />
                      <li className="four2" />
                    </ul>
                  </div>
                  <div className="lists">
                    <div className="list">
                      <img src="images/procesed1.png" alt="" />
                      <p>Order <br /> Procesed</p>
                    </div>
                    <div className="list">
                      <img src="images/hhh.png" alt="" />
                      <p>Order <br /> Shipping</p>
                    </div>
                    <div className="list">
                      <img src="images/shipping1.jpg" alt="" />
                      <p>Order <br /> Enroute</p>
                    </div>
                    <div className="list">
                      <img src="images/home4.jpg" alt="" />
                      <p>Order <br /> Arrived</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>


    <Menubottom />
    <Footer />

  </div>
  </>
  );
}

export default Ordertrack;
