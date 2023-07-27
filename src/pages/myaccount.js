import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'


const Myaccount = () => {
  return (
    
          <div id="page" className="site single-page">
          <Header />

            <main id='acc'>
              <div className="single-product">
                <div className="container">
                  <div className="wrapper">
                    <div className="breadcrumb">
                      <ul className="flexitem">
                        <li><a href="/E-commerce2.html">Home </a></li>
                        <li><a href="#&quot;"> My Account</a></li>
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
                          <li> <a href="myaccont.html" className="active">My Account<span>&gt;</span></a></li>
                          <li> <a href="change-password.html">Change Password<span>&gt;</span></a></li>
                          <li> <a href="paycheckout.html">Billing Details<span>&gt;</span></a></li>
                          <li> <a href="myorders.html">My Orders<span>&gt;</span></a></li>
                          <li> <a href="sign up.html">Delete Account<span>&gt;</span></a></li>
                          <li> <a href="sign up.html">Logout<span>&gt;</span></a></li>
                        </ul>
                      </div>
                      <div className="account-detail">
                        <h2>Account</h2>
                        <div className="billing-detail">					
                          <form className="checkout-form">
                            <div className="form-inline">
                              <div className="form-group">
                                <label>First Name</label>
                                <input type="text" id="fname" name="fname" defaultValue="John" />
                              </div>
                              <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" id="lname" name="lname" defaultValue="Doe" />
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Company Name (Optional)</label>
                              <input type="text" id="cname" name="cname" />
                            </div>
                            <div className="form-inline">
                              <div className="form-group">
                                <label>Country</label>
                                <select id="country" name="country">
                                  <option selected>---Select a Country---</option>
                                  <option value="pakistan">Pakistan</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>City</label>
                                <select id="city" name="city">
                                  <option selected>---Select a City---</option>
                                  <option value="karachi">Karachi</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Address</label>
                              <textarea style={{resize: 'none'}} id="address" name="address" rows={3} defaultValue={"xyz area, street 24 "} />
                            </div>
                            <div className="form-inline">					
                              <div className="form-group">
                                <label>Tel</label>
                                <input type="text" id="tel" name="tel" minLength={11} maxLength={11} defaultValue="555-XXXXXXX" />
                              </div>
                              <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" id="mobile" name="mobile" minLength={11} maxLength={11} defaultValue="555-XXXXXXX" />
                              </div>
                            </div>
                            <div className="form-group">
                              <label />
                              <input type="submit" id="update" name="update" defaultValue="Update" />
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
  
  );
}

export default Myaccount;
