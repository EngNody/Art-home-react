import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'
import { Helmet } from 'react-helmet-async';


const Paycheckout = () => {
  return (
    <>
    <Helmet>
    <title>Chech Out</title>
    </Helmet>

          <div id="page" className="site single-page paycheck">
  
            <Header />

            <div className="container">
              <main id='acc'>
                <div className="breadcrumb paypash">
                  <ul>
                    <li><a href="E-commerce2.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li style={{color: 'white', fontSize: '20px'}}>Checkout</li>
                  </ul>
                </div> {/* End of Breadcrumb*/}
                <h2>Billing Detail</h2>
                <div className="checkout-page">
                  <div className="billing-detail">					
                    <form className="checkout-form">
                      <h4>Shipping Detail</h4>
                      <div className="form-inline thename">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" id="fname" name="fname" />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" id="lname" name="lname" />
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
                            <option>---Select a Country---</option>
                            <option>Pakistan</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>City</label>
                          <select id="cityy" name="cityy">
                            <option>---Select a City---</option>
                            <option>Karachi</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea style={{resize: 'none'}} id="address" name="address" rows={3} defaultValue={""} />
                      </div>
                      <h4>Login Detail</h4>
                      <div className="form-inline">					
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" id="email" name="email" autoComplete="off" />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" id="password" name="password" autoComplete="off" />
                        </div>
                      </div>
                      <h4>Contact Detail</h4>
                      <div className="form-inline">					
                        <div className="form-group">
                          <label>Tel</label>
                          <input type="text" id="tel" name="tel" minLength={11} maxLength={11} />
                        </div>
                        <div className="form-group">
                          <label>Mobile</label>
                          <input type="text" id="mobile" name="mobile" minLength={11} maxLength={11} />
                        </div>
                      </div>
                      <h4>Additional Information (Optional)</h4>
                      <div className="form-group">
                        <label>Order Note</label>
                        <textarea style={{resize: 'none'}} id="address" name="address" rows={3} defaultValue={""} />
                      </div>	
                      <div className="from-group">
                        <label htmlFor />
                        <input type="submit" defaultValue="Update" name="update" id="update" />
                      </div>				
                    </form></div>
                  <div className="order-summary">
                    <div className="checkout-total">
                      <h3>Order Summary</h3>
                      <ul>
                        <li>Cart Amount: <span>1200</span></li>
                        <li>Delivery Charges: <span>100</span></li>
                        <li>Less: Discount @ 10%: <span>-13</span></li>
                        <hr />
                        <li>Total Amount: <span>1287</span></li>
                        <hr />
                        <li><input type="radio" name="payment" /> Cash on Delivery</li>
                        <li><input type="radio" id="easypaisa" name="payment" defaultValue="easypaisa" /> Easypaisa Account</li>
                        <li>
                          <textarea id="easypaisaText" rows={5} disabled="disable" defaultValue={"Please deposit the payment in our easypaisa account# 030X-XXXXXXX after confirm payment kindly send us payment slip and order transaction id on above number."} />
                        </li>
                        <li><input type="radio" name="payment" /> Bank Transferred</li>
                        <hr />
                        <li><input type="submit" name="order" defaultValue="Place Order" /></li>
                      </ul>
                    </div>
                    {/* End of Checkout Form */}
                  </div>
                </div>		
              </main> {/* Main Area */}
            </div>
            <Menubottom />
            <Footer />
          </div>
    
      </>
          );
}

export default Paycheckout;
