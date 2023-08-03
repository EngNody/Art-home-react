import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'
import { Helmet } from 'react-helmet-async';


const Changepassword = () => {
  return (
    <>
    <Helmet>
    <title>Change Password</title>
    </Helmet>


          <div id="page" className="site single-page">
          <Header />

            <main id='acc'>
              <div className="single-product">
                <div className="container">
                  <div className="wrapper">
                    <div className="breadcrumb">
                      <ul className="flexitem">
                        <li><a href="/E-commerce2.html">Home</a></li>
                        <li><a href="#&quot;">My Account</a></li>
                        {/* <li>Men Slip On Shoes Casual with Arch Support Insoles</li> */}
                      </ul>
                    </div>
                    <div className="account-page">
                      <div className="profil">
                        <div className="profil-detail">
                          {/* <img src="./images/background.18.jpeg" alt=""> */}
                          <img src="./images/zr3.3.jpg" alt="" />
                          <h2>Hend Mohamed</h2>
                          <p>totatota1990253@gmail.com</p>
                        </div>
                        <ul>
                          <li> <a href="myaccount.html">My Account<span>&gt;</span></a></li>
                          <li> <a href="change-password.html" className="active">Change Password<span>&gt;</span></a></li>
                          <li> <a href="myaccont.html">Billing Details<span>&gt;</span></a></li>
                          <li> <a href="myorders.html">My Orders<span>&gt;</span></a></li>
                          <li> <a href="myaccont.html">Delete Account<span>&gt;</span></a></li>
                          <li> <a href="myaccont.html">Logout<span>&gt;</span></a></li>
                        </ul>
                      </div>
                      <div className="account-detail">
                        <h2>Change Password</h2>
                        <div className="billing-detail">					
                          <form className="checkout-form">
                            <div className="form-group">
                              <label className="pass">Old Password</label>
                              <input type="password" id="old_password" name="old_password" />
                            </div>
                            <div className="form-inline">
                              <div className="form-group">
                                <label className="pass">New Password</label>
                                <input type="password" id="new_password" name="new_password" />
                              </div>
                              <div className="form-group">
                                <label className="pass">Confirm Password</label>
                                <input type="password" id="confirm_password" name="confirm_password" />
                              </div>
                            </div>
                            <div className="form-group">
                              <label />
                              <input type="submit" id="update_pass" name="update_pass" defaultValue="Update" />
                            </div>
                          </form>		
                        </div>
                      </div>	
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

export default Changepassword;
