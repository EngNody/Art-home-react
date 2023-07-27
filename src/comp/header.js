import React from 'react';

const Header = () => {
  return (
    <div>
      <>
        {/* header mobile */}
        <aside className="site-off desktop-hide">
          <div className="off-canvas">
            <div className="canvas-head flexitem">
              <div className="logo"><a href="E-commerce2.html"><span className="circle" />EGY Store</a></div>
              <a href className="t-close flexcenter">            <span style={{fontSize: '20px'}}>✖</span></a>
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
                    <li><a href="#" className="li1">Blog</a></li>
                    <li><a href="#" className="li1">Featured products</a></li>
                    <li><a href="../ecommerce.html/wishlistpage.html" className="li1">Wishlist</a></li>
                  </ul>
                </div>
                <div className="right">
                  <ul className="flexitem main-links responsive1">
                    <li><a href="sign up.html" className="li1 login">Login</a></li>
                    <li><a href="myaccount.html" className="li1">My Account</a></li>
                    <li><a href="ordertrack.html" className="li1">Order Tracking</a></li>
                    <li><a href="#" className="li1">USD<span className="icon-small">
                          {/* <i class="ri-arrow-down-s-line"></i> */}
                        </span></a>
                      <ul className="ourshowul">
                        <li className="current"><a href="#">USD</a></li>
                        <li><a href="#">EURO</a></li>
                        <li><a href="#">GBP</a></li>
                        <li><a href="#">IDR</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="li1">English <span className="icon-small">
                          <i className="ri-arrow-down-s-line" /></span>
                      </a>
                      <ul className="ourshowul">
                        <li className="current"><a href="#">English</a></li>
                        <li><a href="#">German</a></li>
                        <li><a href="#">Spanish</a></li>
                        <li><a href="#">Bahasa</a></li>
                      </ul>
                    </li>
                    {/* <li><a href="sign up.html" class="li1 login" id="signin">Login</a></li> */}
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
                  <div className="logo"><a href="E-commerce2.html"><span className="circle" />EGY Store</a></div>
                  <nav className="mobile-hide">
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
                                      <img src="images/new.png" alt="" /></a></div><a href>  
                                  </a>
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
                        {/* <div class="icon-large"><i class="ri-heart-line checkheart"></i></div>  */}
                        <div className="icon-large"><span>🧡</span></div> 
                        <div className="fly-item"><span className="item-number-heart">0</span></div>
                      </a>
                      <div className="minicartheart">
                        <div className="cart-head">
                          <div><span className="item-number-heart">0</span> items in cart</div>
                        </div>
                        <ul className="products mini contentheart">
                        
                        </ul>
                      </div>
                    </li>
                    <li className="iscart"><a href="#">
                        <div className="icon-large"  id="carty">
                          {/* <i class="ri-shopping-cart-line"></i> */}
                          <span className="icon-cart" />
                          <div className="fly-item"><span className="item-number totaljs">0</span></div>
                        </div>
                        <div className="icon-text">
                          <div className="mini-text">Total</div>
                          <div className="cart-tatol thetotal">$0.00</div>
                        </div>
                      </a>
                      <div className="mini-cart">
                        <div className="content">
                          <div className="cart-head">
                            <span className="totaljs">0</span> items in cart
                          </div>
                          <div className="cart-body">
                            <ul className="products mini">
                              {/* <li class="item">
              <div class="thumbnail object-cover">
                <a href=""><img src="images/dec4.jpg" alt=""></a>
              </div>
              <div class="item-content">
                <p><a href="">Dimmable Ceiling Light Modern</a></p>
                <span class="price">
                <div>
                    <span class="current">$279.99</span>
                    <span class="fly-item"><span>2X</span></span>
                </div>
                </span>
              </div>
              <span href="" class="item-remove closeminicart">
                            <span style='font-size:20px;'>&#10006;</span></span>
            </li> */}
                              {/* <li class="item">
              <div class="thumbnail object-cover">
                <a href=""><img src="images/dec5.jpg" alt=""></a>
              </div>
              <div class="item-content">
                <p><a href="">Dimmable Ceiling Light Modern</a></p>
                <span class="price">
              <div>
                    <span class="current">$279.99</span>
                    <span class="fly-item"><span>2X</span></span>
              </div>
              <button class="newbutton">Buy</button>
                </span>
              </div>
              <a href="" class="item-remove"><i class="ri-close-line closeminicart"></i></a>
            </li> */}
                              {/* 
            <li class="item">
              <div class="thumbnail object-cover">
                <a href=""><img src="images/dec2.jpg" alt=""></a>
              </div>
              <div class="item-content">
                <p><a href="">Dimmable Ceiling Light Modern</a></p>
                <span class="price">
              <div>
                    <span class="current">$279.99</span>
                    <span class="fly-item"><span>2X</span></span>
              </div>
              <button class="newbutton">Buy</button>
                </span>
              </div>
              <a href="" class="item-remove"><i class="ri-close-line closeminicart"></i></a>
            </li> */}
                              {/* <li class="item">
              <div class="thumbnail object-cover">
                <a href=""><img src="images/dec3.jpg" alt=""></a>
              </div>
              <div class="item-content">
                <p><a href="">Dimmable Ceiling Light Modern</a></p>
                <span class="price">
              <div>
                    <span class="current">$279.99</span>
                    <span class="fly-item"><span>2X</span></span>
              </div>
              <button class="newbutton">Buy</button>
                </span>
              </div>
              <a href="" class="item-remove"><i class="ri-close-line closeminicart"></i></a>
            </li> */}
                            </ul>
                          </div>
                          <div className="cart-footer">
                            <div className="subtotal">
                              <p>Subtotal</p>
                              <p><strong className="thetotal">$0.00</strong></p>
                            </div>
                            <div className="actions">
                              <a href="/chechout.html" className="primary-button">Checkout</a>
                              <a href="/cart.html" className="secondary-button">View Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li><a href="#" class="iscart">
        <div class="icon-large">
          <i class="ri-shopping-cart-line"></i>
           <div class="fly-item"><span class="item-number">0</span></div>
          </div>
        </a></li> */}
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
                            </ul></li>
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
                            </a></li>
                          <li>
                            <a href="#">
                              <div className="icon-large"><i className="ri-basketball-line" /></div>
                              Sports
                            </a></li>
                          <li>
                            <a href="#">
                              <div className="icon-large"><i className="ri-shield-star-line" /></div>
                              Best Seller
                            </a></li>
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
