import React from 'react';

const Pagecategory = () => {
  return (
    <body id='body'>
    
          <div id="page" className="site page-category">
            {/* header mobile */}
            <aside className="site-off desktop-hide">
              <div className="off-canvas">
                <div className="canvas-head flexitem">
                  <div className="logo"><a href="E-commerce2.html"><span className="circle" />.Store</a></div>
                  <a href className="t-close flexcenter">        
                    <span style={{fontSize: '20px'}}>✖</span></a>
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
                          <li className="has-child">
                            <a href="#">Women<span className="icon-small"><i className="ri-arrow-down-s-line" /></span></a>
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
                          <div className="dpt-head">
                            {/* style="margin-bottom: -1.55em;"> */}
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
            <main>
              <div className="single-category">
                <div className="container">
                  <div className="wrapper">
                    <div className="column">
                      <div className="holder">
                        <div className="row sidebar">
                          <div className="filter">
                            <div className="filter-block">
                              <h4>Category</h4>
                              <ul>
                                <li>
                                  <input type="checkbox" name="checkbox" id="bags" />
                                  <label htmlFor="bags">
                                    <span className="checked" />
                                    <span>Bags</span>
                                  </label>
                                  <span className="count">15</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="beauty" />
                                  <label htmlFor="beauty">
                                    <span className="checked" />
                                    <span>Beauty</span>
                                  </label>
                                  <span className="count">2</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="clothing" />
                                  <label htmlFor="clothing">
                                    <span className="checked" />
                                    <span>Clothing</span>
                                  </label>
                                  <span className="count">3</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="jewlry" />
                                  <label htmlFor="jewlry">
                                    <span className="checked" />
                                    <span>Jewelry</span>
                                  </label>
                                  <span className="count">1</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="shoes" />
                                  <label htmlFor="shoes">
                                    <span className="checked" />
                                    <span>Shoes</span>
                                  </label>
                                  <span className="count">7</span>
                                </li>
                              </ul>
                            </div>
                            <div className="filter-block">
                              <h4>Activity</h4>
                              <ul>
                                <li>
                                  <input type="checkbox" name="checkbox" id="atheletic" />
                                  <label htmlFor="atheletic">
                                    <span className="checked" checked />
                                    <span>Atheletic</span>
                                  </label>
                                  <span className="count">11</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="lounge" />
                                  <label htmlFor="lounge">
                                    <span className="checked" />
                                    <span>Lounge</span>
                                  </label>
                                  <span className="count">13</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="outdoor" />
                                  <label htmlFor="outdoor">
                                    <span className="checked" />
                                    <span>Outdoor</span>
                                  </label>
                                  <span className="count">7</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="travel" />
                                  <label htmlFor="travel">
                                    <span className="checked" />
                                    <span>Travel</span>
                                  </label>
                                  <span className="count">3</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="urban" />
                                  <label htmlFor="urban">
                                    <span className="checked" />
                                    <span>Urban</span>
                                  </label>
                                  <span className="count">4</span>
                                </li>
                              </ul>
                            </div>
                            <div className="filter-block">
                              <h4>Brands</h4>
                              <ul>
                                <li>
                                  <input type="checkbox" name="checkbox" id="Nike" />
                                  <label htmlFor="Nike">
                                    <span className="checked" />
                                    <span>Nike</span>
                                  </label>
                                  <span className="count">9</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="Louis-Vuitton" />
                                  <label htmlFor="Louis-Vuitton">
                                    <span className="checked" />
                                    <span>Louis Vuitton</span>
                                  </label>
                                  <span className="count">17</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="Hermes" />
                                  <label htmlFor="Hermes">
                                    <span className="checked" />
                                    <span>Hermes</span>
                                  </label>
                                  <span className="count">3</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="Gucci" />
                                  <label htmlFor="Gucci">
                                    <span className="checked" />
                                    <span>Gucci</span>
                                  </label>
                                  <span className="count">1</span>
                                </li>
                                <li>
                                  <input type="checkbox" name="checkbox" id="Zara" />
                                  <label htmlFor="Zara">
                                    <span className="checked" />
                                    <span>Zara</span>
                                  </label>
                                  <span className="count">7</span>
                                </li>
                              </ul>
                            </div>
                            <div className="filter-block">
                              <h4>Color</h4>
                              <ul className="bycolor variant flexitem">
                                <li>
                                  <input type="radio" name="color" id="cogrey" placeholder="uu" />
                                  <label htmlFor="cogrey" className="circle" />
                                </li>
                                <li>
                                  <input type="radio" name="color" id="coblue" />
                                  <label htmlFor="coblue" className="circle" />
                                </li>
                                <li>
                                  <input type="radio" name="color" id="cogreen" placeholder="cogreen" />
                                  <label htmlFor="cogreen" className="circle" />
                                </li>
                                <li>
                                  <input type="radio" name="color" id="cored" defaultChecked placeholder="uu" />
                                  <label htmlFor="cored" className="circle" />
                                </li>
                                <li>
                                  <input type="radio" name="color" id="colight" placeholder="uu" /> 
                                  <label htmlFor="colight" className="circle" />
                                </li>
                              </ul>
                            </div>
                            <div className="filter-block pricing">
                              <h4>Price</h4>
                              <div className="byprice">
                                <div className="range-track">
                                  <input type="range" defaultValue={25000} min={0} max={100000} />
                                </div>
                                <div className="price-range">
                                  <span className="price-form">$50</span>
                                  <span className="price-to">$500</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="section">
                          <div className="row">
                            <div className="cat-head">
                              <div className="breadcrumb">
                                <ul className="flexitem">
                                  <li><a href="#">Home</a></li>
                                  <li>Women</li>
                                </ul>
                              </div>
                              <div className="page-title">
                                <h1>Women</h1>
                              </div>
                              <div className="cat-discription">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate libero, in, fugiat voluptas, nisi quae sapiente maxime ex nam eaque quam! Dolorem sint illo inventore dicta ipsum fugit exercitationem nostrum.
                                  Qui, quaerat iusto excepturi facilis aspernatur perferendis hic enim, voluptates aliquid iste eum fugit ducimus amet assumenda eveniet asperiores voluptatibus rem! Accusantium facere consectetur assumenda amet dolor, hic doloremque iste?
                                  Dignissimos, sit. Iusto at consequatur ipsam enim quisquam laudantium soluta quia? Dicta dignissimos, voluptatibus, quas nam est in laboriosam cum tempore, cumque repellat rem perferendis sunt velit. Ullam, voluptatum corporis!
                                  Rem tenetur amet, eum sed quae nostrum voluptate laudantium laboriosam? Eligendi quo perspiciatis inventore at reiciendis obcaecati veritatis reprehenderit asperiores corrupti, nemo mollitia laboriosam nam necessitatibus voluptatum? Blanditiis, laboriosam quos?
                                  Eum ducimus eius quasi! Nemo ipsam ab atque delectus numquam eum veritatis quis modi tenetur tempora, ullam, dolorum obcaecati dicta nihil quaerat quia ipsa eveniet commodi ipsum minima voluptates! Exercitationem?
                                  Illum quos laboriosam accusamus commodi possimus voluptatum, ut pariatur fuga id eveniet ipsa, perspiciatis optio sit reprehenderit dolorem soluta obcaecati nihil? Mollitia voluptates maiores ea neque nisi consequuntur velit magnam.
                                  Quo eligendi nemo, iure reiciendis libero fugiat vero! Quia, incidunt? Ducimus in praesentium sed laborum ipsam adipisci animi quibusdam sit. Quae magnam blanditiis, reiciendis repellendus tempora necessitatibus tenetur officiis expedita.
                                  Pariatur delectus porro deleniti perspiciatis fugiat. Iste doloremque nihil ad quo, labore distinctio? Voluptatibus dolore quo officiis, tenetur tempore magnam. Voluptas ipsa sunt assumenda natus odio praesentium accusantium, sequi labore!
                                  Adipisci, culpa in nesciunt enim dolorum consequatur asperiores dolore quas perspiciatis voluptates possimus fugiat voluptate eveniet fuga quo. Molestias dolore alias esse quae. Laudantium aperiam alias nihil! Fugiat, earum modi!
                                  Exercitationem aperiam praesentium necessitatibus odio suscipit minima culpa temporibus ab, incidunt ut, doloremque rem aliquid nihil! Aliquam quaerat autem necessitatibus cumque saepe, eius optio libero velit culpa delectus eos sunt.
                                  Debitis animi maiores, recusandae provident, voluptate adipisci odio culpa, possimus reiciendis in sapiente explicabo. Tempore blanditiis, praesentium natus ratione delectus in saepe recusandae quasi minima, rem voluptates sed reprehenderit omnis!
                                  Alias, omnis nulla. Ducimus minima sunt sint recusandae fugiat consectetur cumque quae voluptates suscipit. Corrupti explicabo dicta, unde laborum voluptates similique! Delectus aperiam qui tempore voluptates quis id, unde quas!
                                  Labore esse obcaecati exercitationem inventore, blanditiis eligendi voluptas officia, fuga quae aut qui dolorum temporibus modi recusandae quas doloremque odio? Repudiandae, earum reprehenderit velit incidunt quas aperiam doloribus amet ab.
                                  Minus quasi autem magni esse tempora fugit temporibus aliquam enim optio architecto fugiat laudantium natus tempore, ab omnis quaerat porro distinctio dolores vel ipsa quas neque cupiditate! Fugit, voluptate libero?
                                  Aperiam eos magnam aspernatur vero ex ea natus. Facilis labore, id architecto dolore asperiores debitis. Dignissimos nesciunt et eum corrupti beatae molestias consequatur labore, perspiciatis laboriosam molestiae cumque perferendis soluta?
                                  Perferendis, excepturi nostrum voluptatum odio ullam debitis ea! Perspiciatis molestiae minus ex assumenda veniam recusandae repudiandae nam aut cum consectetur quae, debitis est ut quia. A eaque aliquam beatae dignissimos?
                                  Alias mollitia magni vitae repudiandae eveniet saepe dolorem dolores aspernatur! Sapiente voluptas quaerat, ipsa consectetur modi consequatur voluptate illum laborum incidunt fugiat doloribus, omnis reiciendis. Vitae, aut qui. Eius, impedit!
                                  Repudiandae ratione delectus accusantium, illum consectetur ea quod, sit error nobis fuga molestias voluptas eius necessitatibus aspernatur alias eum in quaerat, id inventore molestiae culpa. Error sint debitis repellat labore!
                                  Possimus obcaecati distinctio ea nisi, qui suscipit esse aliquid sapiente vero atque provident quisquam eos labore earum cupiditate, nostrum necessitatibus recusandae quaerat. Eligendi quisquam neque hic vero atque delectus autem?
                                  Omnis laudantium assumenda perspiciatis voluptates pariatur dolorem molestiae dolores eum provident iure recusandae, suscipit, alias at tempore earum ipsa velit distinctio placeat quaerat ad. Vero consectetur velit iusto vel corrupti.
                                  Sequi earum fugiat laborum iure amet voluptas minima, odit corporis! Odit labore amet repellat itaque. Excepturi aliquam, sapiente similique sunt eum consequatur quis iste error quos, est ratione, repudiandae id.
                                  Iure blanditiis, iste consequuntur dolorum cumque voluptatem eligendi labore earum dolores deleniti laudantium corrupti illo nihil dignissimos nobis ipsum iusto ea tenetur rerum a magnam voluptatibus! Repellendus cum facilis amet?</p>
                              </div>
                              <div className="cat-navigation flexitem">
                                <div className="item-filter desktop-hide">
                                  <a href="#" className="filter-trigger label">
                                    <i className="ri-menu-2-line ri-2x" />
                                    <span>filter</span>
                                  </a>
                                </div>
                                <div className="item-sortir">
                                  <div className="label">
                                    <span className="mobile-hide">Sort by default</span>
                                    <div className="desktop-hide">Default</div>
                                    <i className="ri-arrow-down-s-line" />
                                  </div>
                                  <ul>
                                    <li>Default</li>
                                    <li>Product</li>
                                    <li>Price</li>
                                    <li>Brand</li>
                                  </ul>
                                </div>
                                <div className="item-perpage mobile-hide">
                                  <div className="label">item 10 per page</div>
                                  {/* <div class="desktop-hide">10</div> */}
                                  {/* <i class="ri-arrow-down-s-line"></i> */}
                                </div>
                                <div className="item-options">
                                  <div className="label">
                                    <span className="mobile-hide">Show 10 per page</span>
                                    <div className="desktop-hide">10</div>
                                    <i className="ri-arrow-down-s-line" />
                                  </div>
                                  <ul>
                                    <li>10</li>
                                    <li>20</li>
                                    <li>30</li>
                                    <li>All</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="products main flexwrap keybuy">
                            {/* products category sturcture,
                           you can copy from featured products
                            start with .item  */}
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/deskroom4.jpeg" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>25%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links">
                                  <a href="#">Furniture High Quilty Wooden</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$56.99</span>
                                    <span className="normal mini-text">$75.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/lady8.webp" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>25%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links">
                                  <a href="#">Women's Lightweight Knit Hoodie Sweater Pullover</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(994)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$36.99</span>
                                    <span className="normal mini-text">$45.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="footer">
                                  <ul className="mini-text">
                                    <li>Polister , Cotton</li>
                                    <li>Pull On Closure</li>
                                    <li>Fashion Personality</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/man.jpg" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>25%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links">
                                  <a href="#">Under Armour Men's Tech</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$56.99</span>
                                    <span className="normal mini-text">$75.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="footer">
                                  <ul className="mini-text">
                                    <li>Polister , Cotton</li>
                                    <li>Pull On Closure</li>
                                    <li>Fashion Personality</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/lady3.jpeg" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>25%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links">
                                  <a href="#">Womens Summer Boho Floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$56.99</span>
                                    <span className="normal mini-text">$75.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="footer">
                                  <ul className="mini-text">
                                    <li>Polister , Cotton</li>
                                    <li>Pull On Closure</li>
                                    <li>Fashion Personality</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/shose4.webp" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>25%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links">
                                  <a href="#">Happy Sailed Womens Summer Boho Floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$56.99</span>
                                    <span className="normal mini-text">$75.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="footer">
                                  <ul className="mini-text">
                                    <li>Polister , Cotton</li>
                                    <li>Pull On Closure</li>
                                    <li>Fashion Personality</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/shose6.webp" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>25%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links">
                                  <a href="#">Sandal Womens Go Joy Walking Shoo Sneaker</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$56.99</span>
                                    <span className="normal mini-text">$75.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="footer">
                                  <ul className="mini-text">
                                    <li>Polister , Cotton</li>
                                    <li>Pull On Closure</li>
                                    <li>Fashion Personality</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="load-more flexcenter">
                            <a href className="secondary-button">Load More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  features products  */}
              <div className="banners">
                <div className="container">
                  <div className="wrapper">
                    <div className="column">
                      <div className="banner flexwrap">
                        <div className="row">
                          <div className="item get-brown">
                            <div className="imgpanner">
                              <img src="images/deskroom3.jpeg" alt="" />
                            </div>
                            <div className="text-content flexcol">
                              <h3>Brutal Sale!</h3>
                              <h4><span>Get the deal in here</span><br />Living Room Chair </h4>
                              <a href className="primary-button">Shop Now</a>
                            </div>
                            <a href="#" className="over-link" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="item">
                            <div className="imgpanner">
                              <img src="images/deskroom1.webp" alt="" />
                            </div>
                            <div className="text-content flexcol">
                              <h3>Brutal Sale!</h3>
                              <h4><span>Discount Everyday</span><br />Office Outfit Chair </h4>
                              <a href className="primary-button">Shop Now</a>
                            </div>
                            <a href="#" className="over-link" />
                          </div>
                        </div>
                      </div>
                      <div className="product-categories flexwrap">
                        <div className="row">
                          <div className="item">
                            <div className="image">
                              <img src="images/lady20.jpeg" alt="" />
                            </div>
                          </div>
                          <div className="content mini-links">
                            <h4>Beaty</h4>
                            <ul className="flexcol">
                              <li><a href="#">Makeup</a></li>
                              <li><a href="#">Skin Care</a></li>
                              <li><a href="#">Hair Care</a></li>
                              <li><a href="#">Fragrance</a></li>
                              <li><a href="#">Foot &amp; Hand Care</a></li>
                            </ul>
                            <div className="second-links">
                              <a href="#" className="view-all">View-all<i className="ri-arrow-right-line" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="item">
                            <div className="image">
                              <img src="images/fruniture.jpeg" alt="" />
                            </div>
                          </div>
                          <div className="content mini-links">
                            <h4>Gatdets</h4>
                            <ul className="flexcol">
                              <li><a href="#">Camera</a></li>
                              <li><a href="#">Call Phones</a></li>
                              <li><a href="#">Computer</a></li>
                              <li><a href="#">GPS &amp; Navigation</a></li>
                              <li><a href="#">Headphones</a></li>
                            </ul>
                            <div className="second-links">
                              <a href className="view-all">View-all<i className="ri-arrow-right-line" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="item">
                            <div className="image">
                              <img src="images/dec2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="content mini-links">
                            <h4>Home Decor</h4>
                            <ul className="flexcol">
                              <li><a href="#">Kitchen</a></li>
                              <li><a href="#">Dining Room</a></li>
                              <li><a href="#">Pantry</a></li>
                              <li><a href="#">Great Room</a></li>
                              <li><a href="#">Breakfast Nook</a></li>
                            </ul>
                            <div className="second-links">
                              <a href className="view-all">View-all<i className="ri-arrow-right-line" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="item">
                            <div className="image">
                              <img src="images/healthy food.jpeg" alt="" />
                            </div>
                          </div>
                          <div className="content mini-links">
                            <h4>Healthy Care</h4>
                            <ul className="flexcol">
                              <li><a href="#">Healthy Food</a></li>
                              <li><a href="#">Healthy Diet</a></li>
                              <li><a href="#">Healthy Clothes</a></li>
                              <li><a href="#">Healthy WorkSpace</a></li>
                            </ul>
                            <div className="second-links">
                              <a href className="view-all">View-all<i className="ri-arrow-right-line" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
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
            {/* overlay */}
            {/* <div class="overlay"></div> */}
          </div>
    
    </body>
  );
}

export default Pagecategory;
