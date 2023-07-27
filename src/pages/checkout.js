import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'

const Checkout = () => {
  return (
    
          <div id="page" className="site page-category">
          <Header />

            <main>
              <div className="single-checkout">
                <div className="container">
                  <div className="wrapper">
                    <div className="checkout flexwrap">
                      <div className="item left styled page-title">
                        <h1>Shipping Address</h1>
                        <form action>
                          <p>
                            <label htmlFor="email">Email Address <span /></label>
                            <input type="email" name="email" id="email" required autoComplete="off" />
                          </p>
                          <p>
                            <label htmlFor="fname">First Name <span /></label>
                            <input type="text" id="fname" required />
                          </p>
                          <p>
                            <label htmlFor="lname">Last Name <span /></label>
                            <input type="text" id="lname" required />
                          </p>
                          <p>
                            <label htmlFor="cname">Company Name <span /></label>
                            <input type="text" id="cname" required />
                          </p>
                          <p>
                            <label htmlFor="city"> City <span /></label>
                            <input type="text" id="city" required />
                          </p>
                          <p>
                            <label htmlFor="state">State/Province<span /></label>
                            <input type="text" id="state" required />
                          </p>
                          <p>
                            <label htmlFor="postal">Zip / Postal Code <span /></label>
                            <input type="number" id="postal" required />
                          </p>
                          <p>
                            <label htmlFor="country">Country</label>
                            <select name="country" id="country">
                              <option value />
                              <option value={1}>Afganistan</option>
                              <option value={2}>Aland Island</option>
                              <option value={3}>Albania</option>
                              <option value={4} selected="selected">United States</option>
                              <option value={5}>Others</option>
                            </select>
                          </p>
                          <p>
                            <label htmlFor="phone">Phone Number<span /></label>
                            <input type="text" id="phone" required />
                          </p>
                          <p>
                            <label>Order Notes (optional)</label>
                            <textarea cols={30} rows={10} defaultValue={""} />  
                          </p>
                          <p className="checkset">
                            <input type="checkbox" id="anaccount" required />
                            <label htmlFor="anaccount">Create an account?<span /></label>
                          </p>
                        </form>
                        <div className="shipping-method">
                          <h2>Shipping Method</h2>
                          <p className="checkset">
                            <input type="radio" defaultChecked />
                            <label>$5.00 Flate Rate</label>
                          </p>
                        </div>
                        <div className="primary-ckeckout">
                          <button className="primary-button">Place Order</button>
                        </div>
                      </div>
                      <div className="item right">
                        <h2>Order Summary</h2>
                        <div className="summary-order is-sticky">
                          <div className="summary-totals">
                            <ul>
                              <li>
                                <span>Subtotal</span>
                                <span className="thetotal">$0.00</span>
                              </li>
                              <li>
                                <span>Discount</span>
                                <span>$100.00</span>
                              </li>
                              <li>
                                <span>Shipping: Flat</span>
                                <span>$10.00</span>
                              </li>
                              <li>
                                <span>Total</span>
                                <strong className="thetotal">$0.00</strong>
                              </li>
                            </ul>
                          </div>
                          <ul className="products mini keybuy">
                            <li className="item" style={{width: '400px'}}>
                              <div>
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="./images/baby.webp" alt="" />
                                  </a>
                                </div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="item-content">
                                <h3>Dimmable Ceiling Light Modern</h3>
                                <span className="price">
                                  <div>
                                    <span className="current">$29.00</span>
                                    <span className="fly-item">X2</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </span>
                              </div>
                            </li>
                            <li className="item" style={{width: '400px'}}>
                              <div>
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="./images/fruniture.jpeg" alt="" />
                                  </a>
                                </div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="item-content">
                                <h3>Dimmable Ceiling Light Modern</h3>
                                <span className="price">
                                  <div>
                                    <span className="current">$79.00</span>
                                    <span className="fly-item">X2</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </span>
                              </div>
                            </li>
                            <li className="item" style={{width: '400px'}}>
                              <div>
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="./images/dec3.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="item-content">
                                <h3>Dimmable Ceiling Light Modern</h3>
                                <span className="price">
                                  <div>
                                    <span className="current">$29.00</span>
                                    <span className="fly-item">X2</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </span>
                              </div>
                            </li>
                            <li className="item" style={{width: '400px'}}>
                              <div>
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="./images/zena3.jpg" alt="" />
                                  </a>
                                </div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="item-content">
                                <h3>Dimmable Ceiling Light Modern</h3>
                                <span className="price">
                                  <div>
                                    <span className="current">$9.00</span>
                                    <span className="fly-item">X2</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <Menubottom />
            <Footer />
            
            <div id="modal" className="modal">
              <div className="content flexcol">
                <div className="image object-cover">
                  {/* <img src="./images/h7.jpg" alt=""> */}
                  {/* <img src="./images/h11.png" alt=""> */}
                  <img src="./images/womencoat1.jpg" alt="" />
                </div>
                <h2>Get the latest deals and coupons</h2>
                <p className="mobile-hide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque ut repellat quis facere sit.</p>
                <form action className="search">
                  <span className="icon-large"><i className="ri-mail-line" /></span>
                  <input type="mail" placeholder="Enter Email Address" />
                  <button>Subscribe</button>
                </form>
                <a href="#" className="mini-text">Do not show me this again</a>
                <a href="#" className="t-close modalclose flexcenter">
                  <span style={{fontSize: '20px'}}>✖</span>
                </a>
              </div>
            </div>
            {/* ============================================== */}
            {/* method two !!!!!!!!! strange */}
            <div className="backtotop">
              <a href="#" className="flexcol" id="gototop">
                <i className="ri-arrow-up-line" />
                <span>Top</span>
              </a>
            </div>
          </div>
    
  );
}

export default Checkout;
