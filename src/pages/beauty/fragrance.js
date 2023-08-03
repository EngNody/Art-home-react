import React from 'react';
import { Helmet } from 'react-helmet-async';

const Fragrance = () => {
  return (
    <>
    <Helmet>
    <title>Fragrance</title>
    </Helmet>


          <div id="page" className="site single-page">
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
                                          <img src="../../images/pexels-tuấn-kiệt-jr-1382734.jpg" alt="" />
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
            <main>
              <div className="single-product">
                <div className="container">
                  <div className="wrapper">
                    <div className="breadcrumb">
                      <ul className="flexitem">
                        <li><a href="#&quot;">Home</a></li>
                        <li><a href="#&quot;">Fragrance</a></li>
                        <li>fragrance Slip On fragrance Casual with Arch Support Insoles</li>
                      </ul>
                    </div>
                    <div className="column">
                      <div className="products one">
                        <div className="flexwrap">
                          <div className="row">
                            <div className="item is-sticky">
                              <div className="price">
                                <span className="discount">32% <br />OFF</span>
                              </div>
                              <div className="big-image">
                                <div className="big-image-wrapper swiper-wrapper">
                                  <div className="image-show swiper-slide">
                                    <a data-fslightbox href="images/fragrance10.jpg"><img src="images/fragrance10.jpg" alt="" /></a>
                                  </div>
                                  <div className="image-show swiper-slide">
                                    <a data-fslightbox href="images/fragrance1.jpg"><img src="images/fragrance1.jpg" alt="" /></a>
                                  </div>
                                  <div className="image-show swiper-slide">
                                    <a data-fslightbox href="images/fragrance2.jpg"><img src="images/fragrance2.jpg" alt="" /></a>
                                  </div>
                                  <div className="image-show swiper-slide">
                                    <a data-fslightbox href="images/fragrance3.jpg"><img src="images/fragrance3.jpg" alt="" /></a>
                                  </div>
                                </div>
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                              </div>
                              <div thumbslider className="small-image">
                                <ul className="small-image-wrapper flexitem swiper-wrapper">
                                  <li className="thumbnail-show swiper-slide">
                                    <img src="images/fragrance10.jpg" alt="" />
                                  </li><li>
                                  </li><li className="thumbnail-show swiper-slide">
                                    <img src="images/fragrance1.jpg" alt="" />
                                  </li><li>
                                  </li><li className="thumbnail-show swiper-slide">
                                    <img src="images/fragrance2.jpg" alt="" />
                                  </li><li>
                                    {/* <li class="thumbnail-show swiper-slide">
          <img src="images/shose6.webp" alt="">
          <img src="images/shose12.jpg" alt="">
          <li/> */}
                                  </li><li className="thumbnail-show swiper-slide">
                                    <img src="images/fragrance3.jpg" alt="" />
                                  </li><li>
                                    <ul>
                                    </ul></li></ul></div>
                            </div>
                          </div>
                          <div className="row keybuy">
                            <div className="item">
                              <div style={{height: 0}}>
                                <div style={{height: 0}}>
                                  <a href="#" style={{height: 0}}>
                                    <img src="images/fragrance4.jpg" alt="" width={0} height={0} />
                                  </a>
                                </div>
                              </div>
                              <h3 className="ourname" style={{fontSize: '30px'}}>Men Slip On Shoes Casual with Arch Support Insoles</h3><br />
                              <div className="content">
                                <div className="rating">
                                  <div className="stars" />
                                  <a href className="mini-text">2,251 reviews</a>
                                  <a href className="add-review mini-text">Add Your Review</a>
                                </div>
                                <div className="stock-sku">
                                  <span className="available">In Stock</span>
                                  <span className="sku mini-text">sku-881</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$80.90</span>
                                    <span className="normal">$119.90</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="colors">
                                  <p>Color</p>
                                  <div className="variant">
                                    <form action>
                                      <p>
                                        <input type="radio" name="color" id="cogrey" />
                                        <label htmlFor="cogrey" className="circle" />
                                      </p>
                                      <p>
                                        <input type="radio" name="color" id="coblue" />
                                        <label htmlFor="coblue" className="circle" />
                                      </p>
                                      <p>
                                        <input type="radio" name="color" id="cogreen" />
                                        <label htmlFor="cogreen" className="circle" />
                                      </p>
                                    </form>
                                  </div>
                                </div>
                                <div className="stock mini-text" data-stock={4000}>
                                  <div className="qty">
                                    <span>Sold: <strong className="qty-sold">3459</strong></span>
                                    <span>Stock: <strong className="qty-available">107</strong></span>
                                  </div>
                                  <div className="bar">
                                    <div className="available" />
                                  </div>
                                </div>
                                <div className="offer">
                                  <p>Offer ends at</p>
                                  <ul className="flexcenter">
                                    <li>1</li>
                                    <li>15</li>
                                    <li>27</li>
                                    <li>07</li>
                                  </ul>
                                </div>
                                <div className="sizes">
                                  <p>Size</p>
                                  <div className="variant">
                                    <form action>
                                      <p>
                                        <input type="radio" name="size" id="size.40" />
                                        <label htmlFor="size.40" className="circle"><span>40</span></label>
                                      </p>
                                      <p>
                                        <input type="radio" name="size" id="size.41" />
                                        <label htmlFor="size.41" className="circle"><span>41</span></label>
                                      </p>
                                      <p>
                                        <input type="radio" name="size" id="size.42" />
                                        <label htmlFor="size.42" className="circle"><span>42</span></label>
                                      </p>
                                      <p>
                                        <input type="radio" name="size" id="size.43" />
                                        <label htmlFor="size.43" className="circle"><span>43</span></label>
                                      </p>
                                    </form>
                                  </div>
                                </div>
                                <div className="actions">
                                  <div className="qty-control flexitem">
                                    <button className="minus circle">-</button>
                                    <input type="text" defaultValue={1} />
                                    <button className="plus circle">+</button>
                                  </div>
                                  <div className="button-card"><button className="primary-button">Add to cart</button></div>
                                  <div className="wish-share">
                                    <ul className="flexitem secondary-links">
                                      <li><a href>
                                          <span className="icon-large"><i className="ri-heart-line myheart" /></span>
                                          <span>Wishlist</span>
                                        </a></li>
                                      <li><a href>
                                          <span className="icon-large"><i className="ri-share-line" /></span>
                                          <span>share</span>
                                        </a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="description collapse">
                                  <ul>
                                    <li className="has-child expand">
                                      <a href="#0" className="icon-small">Information</a>
                                      <ul className="content">
                                        <li><span>Brands</span><span>Nike</span></li>
                                        <li><span>Activity</span>Running</li>
                                        <li><span>Material</span><span>fleece</span></li>
                                        <li><span>Gender</span><span>Men</span></li>
                                      </ul>
                                    </li>
                                    <li className="has-child">
                                      <a href="#0" className="icon-small">Details</a>
                                      <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam pariatur labore
                                          facere magni id est obcaecati praesentium aliquid repudiandae, perspiciatis earum
                                          quaerat deleniti impedit cumque assumenda corrupti nulla eos!</p>
                                        <br />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident assumenda
                                          laboriosam iste deserunt aperiam consequatur illo tempore ad sint. Sunt dolorum
                                          asperiores sequi provident modi voluptatum repellat, temporibus quis!
                                          Est unde nostrum, quaerat eum vitae rem nulla? Recusandae esse saepe ex temporibus
                                          eveniet id, laborum tenetur ad provident amet, earum distinctio corrupti, porro eos
                                          dolores similique debitis rem libero.
                                          Nostrum tempore officiis, aperiam in adipisci ab blanditiis! Omnis in expedita dicta
                                          nostrum atque beatae sunt ut velit ipsa sed eius nisi, quidem doloremque est impedit!
                                          Soluta quae nulla dignissimos?</p>
                                      </div>
                                    </li>
                                    <li className="has-child">
                                      <a href="#0" className="icon-small">Custom</a>
                                      <div className="content">
                                        <table>
                                          <thead>
                                            <tr>
                                              <th>Size</th>
                                              <th>Bust <span className="mini-text">(cm)</span></th>
                                              <th>Waist <span className="mini-text">(cm)</span></th>
                                              <th>Hip <span className="mini-text">(cm)</span></th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>XS</td>
                                              <td>82,5</td>
                                              <td>62</td>
                                              <td>87,5</td>
                                            </tr>
                                            <tr>
                                              <td>S</td>
                                              <td>85</td>
                                              <td>63,5</td>
                                              <td>89</td>
                                            </tr>
                                            <tr>
                                              <td>M</td>
                                              <td>87,5</td>
                                              <td>67,5</td>
                                              <td>93</td>
                                            </tr>
                                            <tr>
                                              <td>L</td>
                                              <td>90</td>
                                              <td>72,5</td>
                                              <td>93</td>
                                            </tr>
                                            <tr>
                                              <td>XL</td>
                                              <td>93</td>
                                              <td>77,5</td>
                                              <td>103</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </li>
                                    <li className="has-child expand">
                                      <a href="#" className="icon-small">Reviews<span className="mini-text">2.2k</span></a>
                                      <div className="content">
                                        <div className="reviews">
                                          <h4>Customers Reviews</h4>
                                          <div className="review-block">
                                            <div className="review-block-head">
                                              <div className="flexitem">
                                                <span className="rate-sum">4.9</span>
                                                <span>2,251 Reviews</span>
                                              </div>
                                              <a href="#review-form" className="secondary-button">Write Reviews</a>
                                            </div>
                                            <div className="review-block-body">
                                              <ul>
                                                <li className="item">
                                                  <div className="review-form">
                                                    <p className="person">Review by Sarah</p>
                                                    <p className="mini-text">On 7/7/22</p>
                                                  </div>
                                                  <div className="review-rating rating">
                                                    <div className="stars" />
                                                  </div>
                                                  <div className="review-title">
                                                    <p>Awesome product!</p>
                                                  </div>
                                                  <div className="review-taxt">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis harum nesciunt rerum illum id ipsam obcaecati dicta ut laudantium eius.</p>
                                                  </div>
                                                </li>
                                                <li className="item">
                                                  <div className="review-form">
                                                    <p className="person">Review by Sarah</p>
                                                    <p className="mini-text">On 7/7/22</p>
                                                  </div>
                                                  <div className="review-rating rating">
                                                    <div className="stars" />
                                                  </div>
                                                  <div className="review-title">
                                                    <p>Awesome product!</p>
                                                  </div>
                                                  <div className="review-taxt">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis harum nesciunt rerum illum id ipsam obcaecati dicta ut laudantium eius.</p>
                                                  </div>
                                                </li>
                                                <li className="item">
                                                  <div className="review-form">
                                                    <p className="person">Review by Sarah</p>
                                                    <p className="mini-text">On 7/7/22</p>
                                                  </div>
                                                  <div className="review-rating rating">
                                                    <div className="stars" />
                                                  </div>
                                                  <div className="review-title">
                                                    <p>Awesome product!</p>
                                                  </div>
                                                  <div className="review-taxt">
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis harum nesciunt rerum illum id ipsam obcaecati dicta ut laudantium eius.</p>
                                                  </div>
                                                </li>
                                              </ul>
                                              <div className="second-links">
                                                <a href="#" className="view-all">View all reviews <i className="ri-arrow-right-line" /></a>
                                              </div>
                                            </div>       
                                            <div id="review-form" className="review-form">
                                              <h4>Write a review</h4>
                                              <div className="rating">
                                                <p>Are you satisfied? </p>
                                                <div className="rate-this wantdelete">
                                                  <input type="radio" name="rating" id="star5" className="star5" />
                                                  <label htmlFor="star5"><i className="ri-star-fill l5" /></label>
                                                  <input type="radio" name="rating" id="star4" className="star4" />
                                                  <label htmlFor="star4"><i className="ri-star-fill l4" /></label>
                                                  <input type="radio" name="rating" id="star3" className="star3" />
                                                  <label htmlFor="star3"><i className="ri-star-fill l3" /></label>
                                                  <input type="radio" name="rating" id="star2" className="star2" />
                                                  <label htmlFor="star2"><i className="ri-star-fill l2" /></label>
                                                  <input type="radio" name="rating" id="star1" className="star1" />
                                                  <label htmlFor="star1"><i className="ri-star-fill l1" /></label>
                                                </div>
                                              </div>
                                              <form action>
                                                <p>
                                                  <label htmlFor>Name</label>
                                                  <input type="text" className="namereview" />
                                                </p>
                                                <p>
                                                  <label htmlFor>Summary</label>
                                                  <input type="text" className="summaryreview" />
                                                </p>
                                                <p>
                                                  <label htmlFor>Review</label>
                                                  <textarea cols={30} rows={10} className="textareareview" defaultValue={""} />    
                                                </p>
                                                <p>
                                                  <a href className="primary-button" id="newreview">Submit Review</a>
                                                </p>                          
                                              </form>
                                            </div>      
                                          </div>
                                        </div>
                                      </div></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* related product you can copy the structure 
      from featured product at page home */}
              {/* features */}
              <div className="features related-products">
                <div className="container">
                  <div className="wrapper">
                    <div className="column">
                      <div className="sectop flexitem">
                        <h2>
                          <span className="circle" />
                          <span>Related Products</span>
                        </h2>
                        <div className="second-links">
                          <a href="#" className="view-all">view all <i className="ri-arrow-right-line" /></a>
                        </div>
                      </div>
                      <div className="products main flexwrap keybuy">
                        <div className="item">
                          <div className="media">
                            <div className="thumbnail object-cover">
                              <a href="#">
                                <img src="images/fragrance5.jpg" alt="" />
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
                            {/* <div class="offer">
              <p>Offer ends at</p>
              <ul class="flexcenter">
                <li>1</li>
                <li>15</li>
                <li>27</li>
                <li>07</li>
              </ul>
            </div> */}
                            <div className="offer flexitem">
                              <p className="mini-text">Offer ends at</p>
                              <ul className="flexcenter">
                                <li>1</li>
                                <li>15</li>
                                <li>27</li>
                                <li>07</li>
                              </ul>
                            </div>
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
                            </div>        <div className="stock mini-text" data-stock={4000}>
                              <div className="qty">
                                <span>Sold: <strong className="qty-sold">3459</strong></span>
                                <span>Stock: <strong className="qty-available">107</strong></span>
                              </div>
                              <div className="bar">
                                <div className="available" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="media">
                            <div className="thumbnail object-cover">
                              <a href="#">
                                <img src="images/fragrance6.jpg" alt="" />
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
                            <div className="offer">
                              <p>Offer ends at</p>
                              <ul className="flexcenter">
                                <li>1</li>
                                <li>15</li>
                                <li>27</li>
                                <li>07</li>
                              </ul>
                            </div>
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
                            <div className="stock mini-text" data-stock={4000}>
                              <div className="qty">
                                <span>Sold: <strong className="qty-sold">1025</strong></span>
                                <span>Stock: <strong className="qty-available">2975</strong></span>
                              </div>
                              <div className="bar">
                                <div className="available" />
                              </div>
                            </div>
                            {/* <div class="footer">
      <ul class="mini-text">
      <li>Polister , Cotton</li>
      <li>Pull On Closure</li>
      <li>Fashion Personality</li>
      </ul>
    </div> */}
                          </div>
                        </div>
                        <div className="item">
                          <div className="media">
                            <div className="thumbnail object-cover">
                              <a href="#">
                                <img src="images/fragrance7.jpg" alt="" />
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
                            <div className="offer">
                              <p>Offer ends at</p>
                              <ul className="flexcenter">
                                <li>1</li>
                                <li>15</li>
                                <li>27</li>
                                <li>07</li>
                              </ul>
                            </div>
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
                            {/* <div class="footer">
      <ul class="mini-text">
      <li>Polister , Cotton</li>
      <li>Pull On Closure</li>
      <li>Fashion Personality</li>
      </ul>
    </div> */}
                            <div className="stock mini-text" data-stock={4000}>
                              <div className="qty">
                                <span>Sold: <strong className="qty-sold">3459</strong></span>
                                <span>Stock: <strong className="qty-available">107</strong></span>
                              </div>
                              <div className="bar">
                                <div className="available" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="media">
                            <div className="thumbnail object-cover">
                              <a href="#">
                                <img src="images/fragrance8.jpg" alt="" />
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
                            <div className="offer">
                              <p>Offer ends at</p>
                              <ul className="flexcenter">
                                <li>1</li>
                                <li>15</li>
                                <li>27</li>
                                <li>07</li>
                              </ul>
                            </div>
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
                            {/* <div class="footer">
      <ul class="mini-text">
      <li>Polister , Cotton</li>
      <li>Pull On Closure</li>
      <li>Fashion Personality</li>
      </ul>
    </div> */}
                            <div className="stock mini-text" data-stock={4000}>
                              <div className="qty">
                                <span>Sold: <strong className="qty-sold">3459</strong></span>
                                <span>Stock: <strong className="qty-available">107</strong></span>
                              </div>
                              <div className="bar">
                                <div className="available" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="media">
                            <div className="thumbnail object-cover">
                              <a href="#">
                                <img src="images/fragrance9.jpg" alt="" />
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
                                <img src="images/fragrance.jpg" alt="" />
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
                              <img src="../../images/deskroom3.jpeg" alt="" />
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
                              <img src="../../images/deskroom1.webp" alt="" />
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
                              <img src="../../images/lady20.jpeg" alt="" />
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
                              <img src="../../images/fruniture.jpeg" alt="" />
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
                              <img src="../../images/dec2.jpg" alt="" />
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
                              <img src="../../images/healthy food.jpeg" alt="" />
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
    
    </>
  );
}

export default Fragrance;
