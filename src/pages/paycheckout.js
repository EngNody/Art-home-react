import React from 'react';

const Paycheckout = () => {
  return (
    <body id='body'>
    
          <div id="page" className="site single-page paycheck">
            {/* Meta Tags */}
            <meta charSet="UTF-8" />
            <meta name="author" content="Kamran Mubarik" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="icomoon/style.css" />
            {/* Title */}
            <title>My Check Out</title>
            {/* Style Sheet */}
            <link rel="stylesheet" href="../ecommerce.css/E-commerce2.css" />
            <link rel="stylesheet" href="../ecommerce.css/myaccount.css" />
            {/* Javascript */}	
            {/* header mobile */}
            <aside className="site-off desktop-hide">
              <div className="off-canvas">
                <div className="canvas-head flexitem">
                  <div className="logo"><a href="E-commerce2.html"><span className="circle" />.Store</a></div>
                  <a href className="t-close flexcenter">            <span style={{fontSize: '20px'}}>✖</span></a>
                </div>
                <div className="departments" />
                <nav />
                <div className="thetop-nav" />
              </div>
            </aside>
            <header>
              {/* header-top */}
              <div className="header-top mobil-hide">
                <div className="container">
                  <div className="wrapper flexitem responsive1">
                    <div className="left">
                      <ul className="flexitem main-links">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Featured products</a></li>
                        <li><a href="#">Wishlist</a></li>
                      </ul>
                    </div>
                    <div className="right">
                      <ul className="flexitem main-links responsive1">
                        <li><a href="sign up.html" className="li1 login">Login</a></li>
                        <li><a href="myaccount.html">My Account</a></li>
                        <li><a href="ordertrack.html">Order Tracking</a></li>
                        <li><a href="#">USD<span className="icon-small"><i className="ri-arrow-down-s-line" /></span></a>
                          <ul>
                            <li className="current"><a href="#">USD</a></li>
                            <li><a href="#">EURO</a></li>
                            <li><a href="#">GBP</a></li>
                            <li><a href="#">IDR</a></li>
                          </ul>
                        </li>
                        <li><a href="#">English <span className="icon-small"><i className="ri-arrow-down-s-line" /></span></a>
                          <ul>
                            <li className="current"><a href="#">English</a></li>
                            <li><a href="#">German</a></li>
                            <li><a href="#">Spanish</a></li>
                            <li><a href="#">Bahasa</a></li>
                          </ul>
                        </li>
                        <li><a href="#" className="li1" id="signin">Sign in</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* header-nav */}
              <div className="header-nav">
                <div className="container">
                  <div className="wrapper flexitem">
                    <a href="#" className="trigger desktop-hide">
                      {/* <span>&#9776;</span> */}
                      <span className="line" />
                      <span className="line" />
                      <span className="line" />
                    </a>
                    <div className="left flexitem">
                      <div className="logo"><a href="E-commerce2.html"><span className="circle" />.Store</a></div>
                      <nav className="mobil-hide">
                        <ul className="flexitem second-links">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Shop</a></li>
                          <li className="has-child"><a href="#">Women
                              <span className="icon-small"><i className="ri-arrow-down-s-line" /></span></a>
                            {/* .mega>.countainer>.wrapper>.flexcol*4>.row>h4*ul>li*5>a */}
                            <div className="mega">
                              {/* <div class="countainer"> */}
                              <div className="wrapper">
                                <div className="flexcol">
                                  <div className="row">
                                    <h4>Women's clothing</h4>
                                    <ul>
                                      <li><a href="#">Dresses</a></li>
                                      <li><a href="#" />Tops &amp; Tees</li>
                                      <li><a href="#" />Jackets &amp; Coats</li>
                                      <li><a href="#">Pants &amp; Capris</a></li>
                                      <li><a href="#">Sweaters</a></li>
                                      <li><a href="#">Costumes</a></li>
                                      <li><a href="#">Hoodies &amp; Sweatshirts</a></li>
                                      <li><a href="#">Pajamas &amp; Robes</a></li>
                                      <li><a href="#">Shorts</a></li>
                                      <li><a href="#">Swimwear</a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flexcol">
                                  <div className="row">
                                    <h4>Jewelry</h4>
                                    <ul>
                                      <li><a href="#">Accessories</a></li>
                                      <li><a href="#">Bags &amp; Purses</a></li>
                                      <li><a href="#">Necklaces</a></li>
                                      <li><a href="#">Rings</a></li>
                                      <li><a href="#">Earrings</a></li>
                                      <li><a href="#">Bracelets</a></li>
                                      <li><a href="#">Body Jewelry</a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flexcol">
                                  <div className="row">
                                    <h4>Beauty</h4>
                                    <ul>
                                      <li><a href="#">Bath accessories</a></li>
                                      <li><a href="#">Makeup &amp; Cosmetics</a></li>
                                      <li><a href="#">Skin Care</a></li>
                                      <li><a href="#">Hair Care</a></li>
                                      <li><a href="#">Essential Oils</a></li>
                                      <li><a href="#">Fragrances</a></li>
                                      <li><a href="#">Soaps &amp; Bath Bombs</a></li>
                                      <li><a href="#">Face Masks &amp; Coverings</a></li>
                                      <li><a href="#">Spa Kites &amp; Gifts</a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="flexcol">
                                  <div className="row">
                                    <h4>Top Brands</h4>
                                    <ul className="women-brands">
                                      <li><a href="#">Nike</a></li>
                                      <li><a href="#">Louis Vuitton</a></li>
                                      <li><a href="#">Hermes</a></li>
                                      <li><a href="#">Gucci</a></li>
                                      <li><a href="#">Zalando</a></li>
                                      <li><a href="#">Tiffany &amp; Co.</a></li>
                                      <li><a href="#">Zara</a></li>
                                      <li><a href="#">H&amp;M</a></li>
                                      <li><a href="#">Cartier</a></li>
                                      <li><a href="#">Chanel</a></li>
                                      <li><a href="#">Hurley</a></li>
                                    </ul>
                                    <a href className="view-all">
                                      View all brands <i className="ri-arrow-right-line" />
                                    </a>
                                  </div>
                                </div>
                                <div className="flexcol products">
                                  <div className="row">
                                    <div className="media">
                                      <div className="thumbnail object-cover">
                                        <a href>
                                          <img src="images/pexels-tuấn-kiệt-jr-1382734.jpg" alt="" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-content">
                                      <h4>Most Wanted!</h4>
                                      <a href className="primary-button">Order Now</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* </div> */}
                            </div>
                          </li>
                          <li><a href="#">Men </a></li>
                          <li><a href="#" className="ourrelative">Sports<div className="fly-item"><span>New!</span></div></a></li>
                        </ul>
                      </nav>
                    </div>
                    <div className="right">
                      <ul className="flexitem second-links">
                        <li className="mobile-hide hovericonheart"><a href="#"> 
                            <div className="icon-large"><span>🧡</span></div> 
                            <div className="fly-item"><span className="item-number-heart">0</span></div>
                          </a>
                          <div className="minicartheart">
                            <div className="cart-head">
                              <div><span className="item-number-heart">0</span> items in cart</div>
                            </div>
                            <ul className="products mini contentheart">
                              {/* <li class="item">
                          <div class="thumbnail object-cover">
                          <a href="#"><img src="http://127.0.0.1:5500/images/fashion.jpeg" alt=""></a>
                          </div>
                          <div class="item-content">
                          <p><a href="#">Black Women's Coat Dress</a></p>
                          <span class="price">
                          <div>
                            <span class="current">$329.99</span>
                            <span class="fly-item"><span>2X</span></span>
                          </div>
                          </span>
                          </div>
                          <a href="#" class="item-remove closeminicart">
                                      <span style='font-size:20px;'>&#10006;</span></a>
                          </li> */}
                            </ul>
                          </div>
                        </li>
                        <li className="iscart"><a href="#">
                            <div className="icon-large">
                              <span className="icon-cart" />
                              <div className="fly-item"><span className="item-number totaljs">0</span></div>
                            </div>
                            <div className="icon-text">
                              <div className="mini-text">Total</div>
                              <div className="cart-total thetotal">$0.00</div>
                            </div>
                          </a>
                          <div className="mini-cart">
                            <div className="content">
                              <div className="cart-head">
                                <span className="totaljs">0</span> items in cart
                              </div>
                              <div className="cart-body">
                                <ul className="products mini">
                                </ul>
                              </div>
                              <div className="cart-footer">
                                <div className="subtotal">
                                  <p>Subtotal</p>
                                  <p><strong className="thetotal thetotal">$0.00</strong></p>
                                </div>
                                <div className="actions">
                                  <a href="/chechout.html" className="primary-button">Checkout</a>
                                  <a href="/cart.html" className="secondary-button">View Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* header-main */}
              <div className="header-main mobile-hide">
                <div className="container">
                  <div className="wrapper">
                    <div className="flexitem">
                      <div className="left">
                        <div className="dpt-cat">
                          <div className="dpt-head" style={{marginBottom: '-1.55em'}}>
                            <div className="main-text">All Departments</div>
                            <div className="minitext mobile-hide">Total 1059 Products</div>
                            <a href className="dpt-trigger mobile-hide">
                              <span style={{fontSize: '30px'}} className="ri-xl newmenu">☰</span>
                              <span style={{fontSize: '20px'}} className="ri-xl newclose">✖</span>
                            </a>
                          </div>
                          <div className="dpt-menu">
                            <ul className="second-links">
                              <li className="has-child beauty">
                                <a href="#">
                                  <div className="icon-large"><i className="ri-bear-smile-line" /></div>
                                  Beuty
                                  <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                                </a>
                                <ul>
                                  <li><a href="#">Makeup</a></li>
                                  <li><a href="#">Skin Care</a></li>
                                  <li><a href="#">Hair Care</a></li>
                                  <li><a href="#">Fragrance</a></li>
                                  <li><a href="#">Foot &amp; Hand Care</a></li>
                                  <li><a href="#">Tools &amp; Accessories</a></li>
                                  <li><a href="#">Shave &amp; Hair Removal</a></li>
                                  <li><a href="#">Personal Care</a></li>
                                </ul>
                              </li>
                              <li className="has-child Electronic">
                                <a href="#">
                                  <div className="icon-large"><i className="ri-bluetooth-connect-line" /></div>
                                  Electronic
                                  <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                                </a>
                                <ul>
                                  <li><a href="#">Camera</a></li>
                                  <li><a href="#">Cell Phones</a></li>
                                  <li><a href="#">Computers</a></li>
                                  <li><a href="#">Gps &amp; Navigation</a></li>
                                  <li><a href="#">Home Audio</a></li>
                                  <li><a href="#">Television</a></li>
                                  <li><a href="#">Video Projects</a></li>
                                  <li><a href="#">Wearable Technology</a></li>
                                </ul>
                              </li>
                              <li className="has-child fashion">
                                <a href="#">
                                  <div className="icon-large"><i className="ri-t-shirt-air-line" /></div>
                                  women's fashion
                                  <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                                </a>
                                <ul>
                                  <li><a href="#">Clothing</a></li>
                                  <li><a href="#">Shoes</a></li>
                                  <li><a href="#">Jewerly</a></li>
                                  <li><a href="#">Watches</a></li>
                                  <li><a href="#">Handbags</a></li>
                                  <li><a href="#">Accessories</a></li>
                                  <li><a href="#" /></li>
                                  <li><a href="#" /></li>
                                </ul>
                              </li>
                              <li><a href="#">
                                  <div className="icon-large"><i className="ri-shirt-line" /></div>
                                  Men's fashion
                                </a></li>
                              <li><a href="#">
                                  <div className="icon-large"><i className="ri-user-5-line" /></div>
                                  Girls's fashion
                                </a></li>
                              <li><a href="#">
                                  <div className="icon-large">
                                    {/* <span class="icon-user"></span> */}
                                  </div>
                                  Boy's fashion
                                </a></li>
                              <li><a href="#">
                                  <div className="icon-large"><i className="ri-heart-pulse-line" /></div>
                                  Health &amp; Household
                                </a></li>
                              {/* ============================================================= */}
                              {/*                the correct                                    */}
                              {/* ============================================================= */}
                              <li className="has-child homekit">
                                <a href="#">
                                  <div className="icon-large"><i className="ri-t-shirt-air-line" /></div>
                                  Home &amp; Kitchen
                                  <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                                </a>
                                <div className="mega">
                                  <div className=" flexcol">
                                    <div className="row">
                                      <h4><a href="#">Kitchen &amp; Dining</a></h4>
                                      <ul>
                                        <li><a href="#">Kitchen</a></li>
                                        <li><a href="#">Dining Room</a></li>
                                        <li><a href="#">Pantry</a></li>
                                        <li><a href="#">Great Room</a></li>
                                        <li><a href="#">BreakFast Nook</a></li>
                                      </ul>
                                    </div>
                                    <div className="row">
                                      <h4><a href>Living</a></h4>
                                      <ul>
                                        <li><a href="#">Living Room</a></li>
                                        <li><a href="#">Family room</a></li>
                                        <li><a href="#">Sunroom</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="flexcol">
                                    <div className="row">
                                      <h4><a href="#">Bad &amp; Both</a></h4>
                                      <ul>
                                        <li><a href="#">Bathroom</a></li>
                                        <li><a href="#">Powder Room</a></li>
                                        <li><a href="#">Badroom</a></li>
                                        <li><a href="#">Storage &amp; Closet</a></li>
                                        <li><a href="#">Baby &amp; Kids</a></li>
                                      </ul>
                                    </div>
                                    <div className="row">
                                      <h4><a href="#">Utility</a></h4>
                                      <ul>
                                        <li><a href="#">Laundry</a></li>
                                        <li><a href="#">Garage</a></li>
                                        <li><a href="#">Mudroom</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="flexcol">
                                    <div className="row">
                                      <h4><a href="#">Outdoor</a></h4>
                                      <ul>
                                        <li><a href="#">Landscape</a></li>
                                        <li><a href="#">Patio</a></li>
                                        <li><a href="#">Deck</a></li>
                                        <li><a href="#">Backyard</a></li>
                                        <li><a href="#">Porch</a></li>
                                        <li><a href="#">Exterior</a></li>
                                        <li><a href="#">Outdoor Kitchen</a></li>
                                        <li><a href="#">Front Yard</a></li>
                                        <li><a href="#">Poolhouse</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* ================================================================ */}
                              {/* end the correct      */}
                              {/* ================================================================ */}
                              <li>
                                <a href="#">
                                  <div className="icon-large"><i className="ri-android-line" /></div>
                                  Pet Supplies
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div className="icon-large"><i className="ri-basketball-line" /></div>
                                  Sports
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <div className="icon-large"><i className="ri-shield-star-line" /></div>
                                  Best Seller
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="right" />
                      <div className="search-box">
                        <form action className="search">
                          <span className="icon-large"><span className="icon-search" /></span>
                          <input type="search" name id="search" placeholder="search for products" />
                          <button type="submit">Search</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
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
            <footer>
              {/* news letter */}
              <div className="newletter">
                <div className="container">
                  <div className="wrapper">
                    <div className="box">
                      <div className="content">
                        <h3>Join Our Newsletter</h3>
                        <p>Get E-mail updates about our latest shop and <strong>Special Offars</strong></p>
                      </div>
                      <form action className="search">
                        <span className="icon-large"><i className="ri-mail-line" /></span>
                        <input type="email" placeholder="Enter your email address" required />
                        <button type="submit">Sign Up</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* wedgets */}
              <div className="wedgets">
                <div className="container">
                  <div className="wrapper">
                    <div className="flexwrap">
                      <div className="row">
                        <div className="item mini-links">
                          <h4>Help &amp; Contact</h4>
                          <ul className="flexcol">
                            <li><a href="#">Your Accontant</a></li>
                            <li><a href="#">Your Orders</a></li>
                            <li><a href="#">Shipping Rates</a></li>
                            <li><a href="#">Assistant</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="item mini-links">
                          <h4>Product Categories</h4>
                          <ul className="flexcol">
                            <li><a href="#">Beauty</a></li>
                            <li><a href="#">Electronic</a></li>
                            <li><a href="#">Women's Fashion</a></li>
                            <li><a href="#">Men's Fashion</a></li>
                            <li><a href="#">Girl's Fashion</a></li>
                            <li><a href="#">Boy's Fashion</a></li>
                            <li><a href="#">Health &amp; Household</a></li>
                            <li><a href="#">Home &amp; Kitchen</a></li>
                            <li><a href="#">Pet Supplies</a></li>
                            <li><a href="#">Sports</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="item mini-links">
                          <h4>Payment Info</h4>
                          <ul className="flexcol">
                            <li><a href="#">Busseniss Card</a></li>
                            <li><a href="#">Shop With points</a></li>
                            <li><a href="#">Reload Your Balance</a></li>
                            <li><a href="#">Paypal</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="item mini-links">
                          <h4>About Us</h4>
                          <ul className="flexcol">
                            <li><a href="#">Company Info</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Customer reviews</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-info">
                <div className="container">
                  <div className="wrapper">
                    <div className="flexcol">
                      <div className="logo">
                        <a href><span className="circle">.Store </span></a>
                      </div>
                      <div className="socials">
                        <ul className="flexitem">
                          <li><a href="#"><span className="icon-twitter" /></a></li>
                          <li><a href="#"><span className="icon-facebook2" /></a></li>
                          <li><a href="#"><span className="icon-instagram" /></a></li>
                          <li><a href="#"><span className="icon-linkedin" /></a></li>
                          <li><a href="#"><span className="icon-youtube2" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <p className="mini-text">Copyright 2022 .Store.All right reserved.</p>
                  </div>
                </div>
              </div>
            </footer>
            {/* menu buttom */}
            <div className="menu-buttom desktop-hide">
              <div className="container">
                <div className="wrapper">
                  <nav>
                    <ul className="flexitem">
                      <li><a href="#">
                          <span className="animi">🔥</span>
                          <span>Trending</span>
                        </a></li>
                      <li><a href="myaccount.html">
                          <span className="icon-user" />
                          <span>Account</span>
                        </a></li>
                      <li className="showlist">
                        <div className="favmob">
                          <div className="cart-head">
                            <div><br /><span className="item-number-heart-mob">0</span> items in cart</div>
                          </div>
                          <ul className="products mini contentheart">
                            {/* <li class="item">
                       <div class="thumbnail object-cover">
                       <a href="#"><img src="http://127.0.0.1:5500/images/fashion.jpeg" alt=""></a>
                       </div>
                       <div class="item-content">
                       <p><a href="#">Black Women's Coat Dress</a></p>
                       <span class="price">
                       <div>
                         <span class="current">$329.99</span>
                         <span class="fly-item"><span>2X</span></span>
                       </div>
                       </span>
                       </div>
                       <a href="#" class="item-remove closeminicart">
                                   <span style='font-size:20px;'>&#10006;</span></a>
                       </li> */}
                          </ul>
                        </div>
                        <a href="#" id="wishlista">
                          {/* <i class="ri-heart-line wishlist"></i> */}
                          <span className="icon-heart wishlist" />
                          <div className="fly-item"><div className="item-number-heart-mob">0</div></div>
                          <span>Wishlist</span>
                        </a>
                      </li>
                      <li><a href="#0" className="t-search">
                          <span className="icon-search" />
                          <span>Search</span>
                        </a></li>
                      <li><a href="#0" className="cart-trigger">
                          <span className="icon-cart" />
                          <span>Cart</span>
                          <div className="fly-item">
                            <div className="item-number totaljs">0</div>
                          </div>
                        </a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* search buttom */}
            <div className="search-buttom desktop-hide">
              <div className="container">
                <div className="wrapper">
                  <form action className="search">
                    <div className="t-close search-close flexcenter"><span style={{fontSize: '20px'}}>✖</span></div>
                    <span className="icon-large"><span className="icon-search" /></span>
                    <input type="search" placeholder="Enter your email address" required />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
    
    </body>
  );
}

export default Paycheckout;
