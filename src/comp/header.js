import React from 'react';
import { Link , NavLink } from "react-router-dom";
import {useContext } from "react";
import ThemeContext from "../context/themecontext";
import '../theme.css'
// add active class to active elementsrelated with other
// import { NavLink } from "react-router-dom";

const Header = () => {
  const {theme , toggletheme} = useContext(ThemeContext);

  return (
    <div>
      <>
        {/* header mobile */}
        <aside className="site-off desktop-hide">
          <div className="off-canvas">
            <div className="canvas-head flexitem">
              <div className="logo"><Link to="/"><span className="circle" />EGY Store</Link></div>
              <Link to='#' className="t-close flexcenter">            <span style={{fontSize: '20px'}}>✖</span></Link>
            </div>
            <div className="departments" />
            <nav />
            <div className="thetop-nav" />
          </div>
        </aside>
        <header>
          {/* header-top */}
          <div className="header-top mobile-hide">
            <div className="container">
              <div className="wrapper flexitem responsive1">
                <div className="left">
                  <ul className="flexitem main-links">
                    <li><Link to="/blog" className="li1">Blog</Link></li>
                    <li><Link to="#" className="li1">Featured products</Link></li>
                    <li><Link to="/wishlistpage" className="li1">Wishlist</Link></li>
                    <div className="wrapper" id='sunmoon' onChange={() => {toggletheme(theme === "Light" ? "Dark" : "Light")}}>
                    <input type="checkbox" id="hide-checkbox"/>
                    {/* <input type="checkbox" id="hide-checkbox"  onClick={() => { changetheme(theme === "light"?"dark":"light")}}/>*/}
                    <label for="hide-checkbox" className="toggle">
                        <span className="toggle-button">
                          <span className="crater crater-1"></span>
                          <span className="crater crater-2"></span>
                          <span className="crater crater-3"></span>   
                          <span className="crater crater-4"></span>
                          <span className="crater crater-5"></span>
                          <span className="crater crater-6"></span>
                          <span className="crater crater-7"></span>
                        </span>
                        <span className="star star-1"></span>
                        <span className="star star-2"></span>
                        <span className="star star-3"></span>
                        <span className="star star-4"></span>
                        <span className="star star-5"></span>
                        <span className="star star-6"></span>
                        <span className="star star-7"></span>
                        <span className="star star-8"></span>
                      </label>
                    </div>
                    <button className='darklight' onClick={() => {toggletheme(theme === "Light" ? "Dark" : "Light")}}>{theme}</button>
                  </ul>
                </div>
                <div className="right">
                  <ul className="flexitem main-links responsive1">
                    <li><Link to="/signup" className="li1 login">Login</Link></li>
                    <li><Link to="/myaccount" className="li1">My Account</Link></li>
                    <li><Link to="/ordertrack" className="li1">Order Tracking</Link></li>
                    <li><Link to="#" className="li1">USD<span className="icon-small">
                          {/* <i class="ri-arrow-down-s-line"></i> */}
                        </span></Link>
                      <ul className="ourshowul">
                        <li className="current"><Link to="#">USD</Link></li>
                        <li><Link to="#">EURO</Link></li>
                        <li><Link to="#">GBP</Link></li>
                        <li><Link to="#">IDR</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="li1">English <span className="icon-small">
                          <i className="ri-arrow-down-s-line" /></span>
                      </Link>
                      <ul className="ourshowul">
                        <li className="current"><Link to="#">English</Link></li>
                        <li><Link to="#">German</Link></li>
                        <li><Link to="#">Spanish</Link></li>
                        <li><Link to="#">Bahasa</Link></li>
                      </ul>
                    </li>
                    {/* <li><Link to="sign up.html" class="li1 login" id="signin">Login</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* header-nav */}
          <div className="header-nav">
            <div className="container">
              <div className="wrapper flexitem">
                <Link to="#" className="trigger desktop-hide">
                  {/* <span>&#9776;</span> */}
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </Link>
                <div className="left flexitem">
                  <div className="logo"><Link to="/"><span className="circle" />EGY Store</Link></div>
                  <nav className="mobile-hide">
                    <ul className="flexitem second-links">
                    {/* when fix paths that will fix class active */}
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/blog">Shop</NavLink></li>
                      <li className="has-child"><NavLink to="#">Women
                          <span className="icon-small"><i className="ri-arrow-down-s-line" /></span></NavLink>  
                        {/* .mega>.countainer>.wrapper>.flexcol*4>.row>h4*ul>li*5>Link */}
                        <div className="mega">
                          {/* <div class="countainer"> */}
                          <div className="wrapper">
                            <div className="flexcol">
                              <div className="row">
                                <h4>Women's clothing/</h4>
                                <ul>
                                  <li><Link to="#">Dresses</Link></li>
                                  <li><Link to="#">Tops &amp; Tees</Link></li>
                                  <li><Link to="#">Jackets &amp; Coats</Link></li>
                                  <li><Link to="#">Pants &amp; Capris</Link></li>
                                  <li><Link to="#">Sweaters</Link></li>
                                  <li><Link to="#">Costumes</Link></li>
                                  <li><Link to="#">Hoodies &amp; Sweatshirts</Link></li>
                                  <li><Link to="#">Pajamas &amp; Robes</Link></li>
                                  <li><Link to="#">Shorts</Link></li>
                                  <li><Link to="#">Swimwear</Link></li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Jewelry</h4>
                                <ul>
                                  <li><Link to="#">Accessories</Link></li>
                                  <li><Link to="#">Bags &amp; Purses</Link></li>
                                  <li><Link to="#">Necklaces</Link></li>
                                  <li><Link to="#">Rings</Link></li>
                                  <li><Link to="#">Earrings</Link></li>
                                  <li><Link to="#">Bracelets</Link></li>
                                  <li><Link to="#">Body Jewelry</Link></li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Beauty</h4>
                                <ul>
                                  <li><Link to="#">Bath accessories</Link></li>
                                  <li><Link to="/makeup">Makeup &amp; Cosmetics</Link></li>
                                  <li><Link to="/skincare">Skin Care</Link></li>
                                  <li><Link to="/haircare">Hair Care</Link></li>
                                  <li><Link to="#">Essential Oils</Link></li>
                                  <li><Link to="/fragrance">Fragrances</Link></li>
                                  <li><Link to="#">Soaps &amp; Bath Bombs</Link></li>
                                  <li><Link to="#">Face Masks &amp; Coverings</Link></li>
                                  <li><Link to="#">SpLink Kites &amp; Gifts</Link></li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Top Brands</h4>
                                <ul className="women-brands">
                                  <li><Link to="#">Nike</Link></li>
                                  <li><Link to="#">Louis Vuitton</Link></li>
                                  <li><Link to="#">Hermes</Link></li>
                                  <li><Link to="#">Gucci</Link></li>
                                  <li><Link to="#">Zalando</Link></li>
                                  <li><Link to="#">Tiffany &amp; Co.</Link></li>
                                  <li><Link to="#">Zara</Link></li>
                                  <li><Link to="#">H&amp;M</Link></li>
                                  <li><Link to="#">Cartier</Link></li>
                                  <li><Link to="#">Chanel</Link></li>
                                  <li><Link to="#">Hurley</Link></li>
                                </ul>
                                <Link to className="view-all">
                                  View all brands <i className="ri-arrow-right-line" />
                                </Link>
                              </div>
                            </div>
                            <div className="flexcol products">
                              <div className="row">
                                <div className="media"> 
                                  <div className="thumbnail object-cover">
                                    <Link to>
                                      <img src="images/new.png" alt="" /></Link></div><Link to>  
                                  </Link>
                                </div>
                                <div className="text-content">
                                  <h4>Most Wanted!</h4>
                                  <Link to className="primary-button">Order Now</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* </div> */}
                        </div>
                      </li>
                      <li><NavLink to="#">Men </NavLink></li>
                      <li><NavLink to="#" className="ourrelative">Sports<div className="fly-item"><span>New!</span></div></NavLink></li>
                    </ul>
                  </nav>
                </div>
                <div className="right">
                
                  <ul className="flexitem second-links">
                    <li className="mobile-hide hovericonheart"><Link to="#"> 
                        {/* <div class="icon-large"><i class="ri-heart-line checkheart"></i></div>  */}
                        <div className="icon-large"><span>🧡</span></div> 
                        <div className="fly-item"><span className="item-number-heart">0</span></div>
                      </Link>
                      <div className="minicartheart">
                        <div className="cart-head">
                          <div><span className="item-number-heart">0</span> items in cart</div>
                        </div>
                        <ul className="products mini contentheart">
                        
                        </ul>
                      </div>
                    </li>
                    <li className="iscart"><Link to="#">
                        <div className="icon-large"  id="carty">
                          {/* <i class="ri-shopping-cart-line"></i> */}
                          <span className="icon-cart" />
                          <div className="fly-item"><span className="item-number totaljs">0</span></div>
                        </div>
                        <div className="icon-text">
                          <div className="mini-text">Total</div>
                          <div className="cart-tatol thetotal">$0.00</div>
                        </div>
                      </Link>
                      <div className="mini-cart">
                        <div className="content">
                          <div className="cart-head">
                            <span className="totaljs">0</span> items in cart
                          </div>
                          <div className="cart-body">
                            <ul className="products mini">
                              {/* <li class="item">
              <div class="thumbnail object-cover">
                <Link to=""><img src="images/dec4.jpg" alt=""></Link>
              </div>
              <div class="item-content">
                <p><Link to="">Dimmable Ceiling Light Modern</Link></p>
                <span class="price">
                <div>
                    <span class="current">$279.99</span>
                    <span class="fly-item"><span>2X</span></span>
                </div>
                </span>
              </div>
              <span to="" class="item-remove closeminicart">
                            <span style='font-size:20px;'>&#10006;</span></span>
            </li> */}
                              {/* <li class="item">
              <div class="thumbnail object-cover">
                <Link to=""><img src="images/dec5.jpg" alt=""></Link>
              </div>
              <div class="item-content">
                <p><Link to="">Dimmable Ceiling Light Modern</Link></p>
                <span class="price">
              <div>
                    <span class="current">$279.99</span>
                    <span class="fly-item"><span>2X</span></span>
              </div>
              <button class="newbutton">Buy</button>
                </span>
              </div>
              <Link to="" class="item-remove"><i class="ri-close-line closeminicart"></i></Link>
            </li> */}
                              {/* 
            <li class="item">
              <div class="thumbnail object-cover">
                <Link to=""><img src="images/dec2.jpg" alt=""></Link>
              </div>
              <div class="item-content">
                <p><Link to="">Dimmable Ceiling Light Modern</Link></p>
                <span class="price">
              <div>
                    <span class="current">$279.99</span>
                    <span class="fly-item"><span>2X</span></span>
              </div>
              <button class="newbutton">Buy</button>
                </span>
              </div>
              <Link to="" class="item-remove"><i class="ri-close-line closeminicart"></i></Link>
            </li> */}
                              {/* <li class="item">
              <div class="thumbnail object-cover">
                <Link to=""><img src="images/dec3.jpg" alt=""></Link>
              </div>
              <div class="item-content">
                <p><Link to="">Dimmable Ceiling Light Modern</Link></p>
                <span class="price">
              <div>
                    <span class="current">$279.99</span>
                    <span class="fly-item"><span>2X</span></span>
              </div>
              <button class="newbutton">Buy</button>
                </span>
              </div>
              <Link to="" class="item-remove"><i class="ri-close-line closeminicart"></i></Link>
            </li> */}

            
                            </ul>
                            
                          </div>
                          <div className="cart-footer">
                            <div className="subtotal">
                              <p>Subtotal</p>
                              <p><strong className="thetotal">$0.00</strong></p>
                            </div>
                            <div className="actions">
                              <Link to="/paycheckout" className="primary-button">Checkout</Link>
                              <Link to="/cart" className="secondary-button">View Cart</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li><Link to="#" class="iscart">
        <div class="icon-large">
          <i class="ri-shopping-cart-line"></i>
           <div class="fly-item"><span class="item-number">0</span></div>
          </div>
        </Link></li> */}
                    {/* <div class="icon-text">
    <div class="mini-text">Total</div>
    <div class="cart-total">$0.00</div>
    
        </div> */}
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
          {/* header-main */}  
          <div className="header-main mobile-hide">
            <div className="container">
              <div className="wrapper">
                <div className="flexitem flexitem">
                  <div className="left">
                    <div className="dpt-cat">
                      <div className="dpt-head">
                        <div className="main-text">All Departments</div>
                        <div className="minitext mobile-hide">Total 1059 Products</div>
                        <Link to className="dpt-trigger mobile-hide">
                          <span style={{fontSize: '30px'}} className="ri-xl newmenu">☰</span>
                          <span style={{fontSize: '20px'}} className="ri-xl newclose">✖</span>
                        </Link>
                      </div>
                      <div className="dpt-menu">
                        <ul className="second-links">
                          <li className="has-child beauty">
                            <Link to="#">
                              <div className="icon-large"><i className="ri-bear-smile-line" /></div>
                              Beuty
                              <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                            </Link>
                            <ul>
                              <li><Link to="/makeup">Makeup</Link></li>
                              <li><Link to="/skincare">Skin Care</Link></li>
                              <li><Link to="/haircare">Hair Care</Link></li>
                              <li><Link to="/fragrance">Fragrance</Link></li>
                              <li><Link to="/foothandcare">Foot &amp; Hand Care</Link></li>
                              <li><Link to="/accessories">Tools &amp; Accessories</Link></li>
                              <li><Link to="/shaving">Shave &amp; Hair Removal</Link></li>
                              <li><Link to="/personalcare">Personal Care</Link></li>
                            </ul>
                          </li>
                          <li className="has-child Electronic">
                            <Link to="#">
                              <div className="icon-large"><i className="ri-bluetooth-connect-line" /></div>
                              Electronic
                              <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                            </Link>
                            <ul>
                              <li><Link to="#">Camera</Link></li>
                              <li><Link to="#">Cell Phones</Link></li>
                              <li><Link to="#">Computers</Link></li>
                              <li><Link to="#">Gps &amp; Navigation</Link></li>
                              <li><Link to="#">Home Audio</Link></li>
                              <li><Link to="#">Television</Link></li>
                              <li><Link to="#">Video Projects</Link></li>
                              <li><Link to="#">Wearable Technology</Link></li>
                            </ul>
                          </li>
                          <li className="has-child fashion">
                            <Link to="#">
                              <div className="icon-large"><i className="ri-t-shirt-air-line" /></div>
                              women's fashion
                              <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                            </Link>
                            <ul>
                              <li><Link to="#">Clothing</Link></li>
                              <li><Link to="#">Shoes</Link></li>
                              <li><Link to="#">Jewerly</Link></li>
                              <li><Link to="#">Watches</Link></li>
                              <li><Link to="#">Handbags</Link></li>
                              <li><Link to="#">Accessories</Link></li>
                              <li><Link to="#" /></li>
                              <li><Link to="#" /></li>
                            </ul></li>
                          <li><Link to="#">
                              <div className="icon-large"><i className="ri-shirt-line" /></div>
                              Men's fashion
                            </Link></li>
                          <li><Link to="#">
                              <div className="icon-large"><i className="ri-user-5-line" /></div>
                              Girls's fashion
                            </Link></li>
                          <li><Link to="#">
                              <div className="icon-large">
                                {/* <span class="icon-user"></span> */}
                              </div>
                              Boy's fashion
                            </Link></li>
                          <li><Link to="#">
                              <div className="icon-large"><i className="ri-heart-pulse-line" /></div>
                              Health &amp; Household
                            </Link></li>
                          {/* ============================================================= */}
                          {/*                the correct                                    */}
                          {/* ============================================================= */}
                          <li className="has-child homekit">
                            <Link to="#">
                              <div className="icon-large"><i className="ri-t-shirt-air-line" /></div>
                              Home &amp; Kitchen
                              <div className="icon-small"><i className="ri-arrow-right-s-line" /></div>
                            </Link>
                            <div className="mega">
                              <div className=" flexcol">
                                <div className="row">
                                  <h4><Link to="#">Kitchen &amp; Dining</Link></h4>
                                  <ul>
                                    <li><Link to="#">Kitchen</Link></li>
                                    <li><Link to="#">Dining Room</Link></li>
                                    <li><Link to="#">Pantry</Link></li>
                                    <li><Link to="#">Great Room</Link></li>
                                    <li><Link to="#">BreakFast Nook</Link></li>
                                  </ul>
                                </div>
                                <div className="row">
                                  <h4><Link to>Living</Link></h4>
                                  <ul>
                                    <li><Link to="#">Living Room</Link></li>
                                    <li><Link to="#">Family room</Link></li>
                                    <li><Link to="#">Sunroom</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="flexcol">
                                <div className="row">
                                  <h4><Link to="#">Bad &amp; Both</Link></h4>
                                  <ul>
                                    <li><Link to="#">Bathroom</Link></li>
                                    <li><Link to="#">Powder Room</Link></li>
                                    <li><Link to="#">Badroom</Link></li>
                                    <li><Link to="#">Storage &amp; Closet</Link></li>
                                    <li><Link to="#">Baby &amp; Kids</Link></li>
                                  </ul>
                                </div>
                                <div className="row">
                                  <h4><Link to="#">Utility</Link></h4>
                                  <ul>
                                    <li><Link to="#">Laundry</Link></li>
                                    <li><Link to="#">Garage</Link></li>
                                    <li><Link to="#">Mudroom</Link></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="flexcol">
                                <div className="row">
                                  <h4><Link to="#">Outdoor</Link></h4>
                                  <ul>
                                    <li><Link to="#">Landscape</Link></li>
                                    <li><Link to="#">Patio</Link></li>
                                    <li><Link to="#">Deck</Link></li>
                                    <li><Link to="#">Backyard</Link></li>
                                    <li><Link to="#">Porch</Link></li>
                                    <li><Link to="#">Exterior</Link></li>
                                    <li><Link to="#">Outdoor Kitchen</Link></li>
                                    <li><Link to="#">Front Yard</Link></li>
                                    <li><Link to="#">Poolhouse</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          {/* ================================================================ */}
                          {/* end the correct      */}
                          {/* ================================================================ */}
                          <li>
                            <Link to="#">
                              <div className="icon-large"><i className="ri-android-line" /></div>
                              Pet Supplies
                            </Link></li>
                          <li>
                            <Link to="#">
                              <div className="icon-large"><i className="ri-basketball-line" /></div>
                              Sports
                            </Link></li>
                          <li>
                            <Link to="#">
                              <div className="icon-large"><i className="ri-shield-star-line" /></div>
                              Best Seller
                            </Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="right">
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
          </div>
        </header>
      </>
    </div>
  );
}

export default Header;
