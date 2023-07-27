import React from 'react';
import './myaccount.css';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'


const Myorders = () => {
  return (
    
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
                          <img src="images/zr3.3.jpg" alt="" />
                          <h2>Hend Mohamed</h2>
                          <p>totatota1990253@gmail.com</p>
                        </div>
                        <ul>
                          <li> <a href="myaccont.html">My Account<span>&gt;</span></a></li>
                          <li> <a href="change-password.html">Change Password<span>&gt;</span></a></li>
                          <li> <a href="paycheckout.html">Billing Details<span>&gt;</span></a></li>
                          <li> <a href="myorders.html" className="active">My Orders<span>&gt;</span></a></li>
                          <li> <a href="sign up.html">Delete Account<span>&gt;</span></a></li>
                          <li> <a href="sign up.html">Logout<span>&gt;</span></a></li>
                        </ul>
                      </div>
                      <div className="account-detail">					
                        <h2>My Orders</h2>
                        <div className="order-detail">
                          <table>
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Order Ref#</th>
                                <th>Amount</th>
                                <th>Payment Mode</th>
                                <th>Status</th>
                                <th>View</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>06-02-2020</td>
                                <td>61245231241</td>
                                <td>2,150</td>
                                <td>Cash</td>
                                <td>Pending</td>
                                <td><a href="#">View</a></td>
                              </tr>
                              <tr>
                                <td>08-02-2020</td>
                                <td>612467771245</td>
                                <td>5,000</td>
                                <td>Cash</td>
                                <td>Pending</td>
                                <td><a href="#">View</a></td>
                              </tr>
                              <tr>
                                <td>15-08-2020</td>
                                <td>612874511233</td>
                                <td>3000</td>
                                <td>Cash</td>
                                <td>Pending</td>
                                <td><a href="#">View</a></td>
                              </tr>	
                            </tbody>
                          </table>
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

export default Myorders;
