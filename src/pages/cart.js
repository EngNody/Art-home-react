import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'


const Cart = () => {
  return (
      
            <div id="page" className="site page-category">
            <Header />

              <main>
                {/* *************************************************************************************************************************** */}
                {/* treding */}
                <div className="trending keybuy">
                  <div className="container">
                    <div className="wrapper">
                      <div className="sectop flexitem">
                        <h2>
                          <span className="circle" />
                          <span>Trending products</span>
                        </h2>
                      </div>
                      <div className="column">
                        <div className="flexwrap">
                          {/*first item */}
                          {/* <div class="row products big">
            <div class="item">
              <div class="offer">
                <p> Offer ends at </p>
                  <ul class="flexcenter">
                    <li>1</li>
                    <li>15</li>
                    <li>27</li>
                    <li>60</li>
                  </ul>
            
              </div>
              <div class="media">
                <div class="image">
                  <a href="#">
                    <img src="/images/lady9.webp" alt="shoel">
                  </a></div>
      
            <div class="hoverable">
                    <ul>
                      <li class="active"><div class="hana"><span class="icon-heart ri-heart-line"></span></div></li>
                      <li><a href="#" class="hana"><span class="icon-eye"></span></a></li>
                      <li><a href="#" class="hana"><span class="icon-share2"></span></a></li>
                    </ul>
                  </div>
                  
      
      <div class="discount circle flexcenter"><span>31%</span></div>
      
              </div>
      
              <div class="content">
                <div class="rating">
                  <div class="stars"></div>
                  <span class="mini-text">(2,548)</span>
                </div>
      <h3 class="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
      
      <div class="price">
      <div>
          <span class="current">$199</span>
        <span class="normal mini-text">$189.98</span>
      </div>
      <button class="newbutton">Buy</button>
      </div>
      <div class="stock mini-text">
        <div class="qty">
          <span>Stock:<strong class="qty-available">107</strong></span>
          <span>Sold<strong class="qty-sold">3,459</strong></span>
        </div>
        <div class="bar">
          <div class="available"></div>
        </div>
      </div>
      
              </div>
            </div>
          </div> */}
                          {/*second item */}
                          <div className="row products mini">
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/fashion.jpeg" alt="apperal" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>31%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links"><a href="#">Black Women's Coat Dress</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$329.99</span>
                                    <span className="normal mini-text">$189.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                </div>
                              </div>
                            </div>
                            {/*11 item */}
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/womencoat.jpg" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>31%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$829.99</span>
                                    <span className="normal mini-text">$189.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                </div>
                              </div>
                            </div>
                            {/*12 item */}
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/lady6.jpeg" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>31%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$529.99</span>
                                    <span className="normal mini-text">$189.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                </div>
                              </div>
                            </div>
                            {/*forth item */}
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/lady13.jpeg" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>31%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$629.99</span>
                                    <span className="normal mini-text">$189.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*third item */}
                          <div className="row products mini">
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/womencoat1.jpg" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>31%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$29.99</span>
                                    <span className="normal mini-text">$189.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                  <p className="stock-danger">Stock: 7 left!</p>
                                </div>
                              </div>
                            </div>
                            {/*forth item */}
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
                                  <span>31%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$10</span>
                                    <span className="normal mini-text">$189.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                </div>
                              </div>
                            </div>
                            {/*fifth item */}
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/shose3.webp" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>31%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$500</span>
                                    <span className="normal mini-text">$189.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                </div>
                              </div>
                            </div>
                            {/*sixteen item */}
                            <div className="item">
                              <div className="media">
                                <div className="thumbnail object-cover">
                                  <a href="#">
                                    <img src="images/lady11.webp" alt="" />
                                  </a></div>
                                <div className="hoverable">
                                  <ul>
                                    <li className="active"><div className="hana"><span className="icon-heart ri-heart-line" /></div></li>
                                    <li><a href="#" className="hana"><span className="icon-eye" /></a></li>
                                    <li><a href="#" className="hana"><span className="icon-share2" /></a></li>
                                  </ul>
                                </div>
                                <div className="discount circle flexcenter">
                                  <span>31%</span></div>
                              </div>
                              <div className="content">
                                <h3 className="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
                                <div className="rating">
                                  <div className="stars" />
                                  <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                  <div>
                                    <span className="current">$1000</span>
                                    <span className="normal mini-text">$189.98</span>
                                  </div>
                                  <button className="newbutton">Buy</button>
                                </div>
                                <div className="mini-text">
                                  <p>2975 sold</p>
                                  <p>free shipping</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ****************************************************************************************************************************** */}
                <div className="single-cart">
                  <div className="container">
                    <div className="wrapper">
                      <div className="breadcrumb">
                        <ul className="flexitem">
                          <li><a href="#">Home</a></li>
                          <li>Cart</li>
                        </ul>
                      </div>
                      <div className="page-title">
                        <h1>Shopping Cart</h1>
                      </div>
                      <div className="products one cart">
                        <div className="flexwrap">
                          <form action className="form-cart">
                            <div className="item">
                              <table id="cart-table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                    <th>Delete</th>
                                    <th />
                                  </tr>
                                </thead>
                                <tbody className="thecartproducts"><tr><td><h3>Not Products found Yet !!! <br /> </h3></td></tr></tbody>
                              </table>
                            </div>
                          </form>
                          <div className="cart-summary styled">
                            <div className="item">
                              <div className="coupon">
                                <input type="text" placeholder="Enter coupon" />
                                <button>Apply</button>
                              </div>
                              <div className="shipping-rate collapse">
                                <div className="has-child expand">
                                  <a href="#" className="icon-small">Estemate Shipping and Tax</a>
                                  <div className="content">
                                    <div className="countries">
                                      <form action>
                                        <label htmlFor="country">Country</label>
                                        <select name="country" id="country">
                                          <option value />
                                          <option value={1}>Afganistan</option>
                                          <option value={2}>Aland Island</option>
                                          <option value={3}>Albania</option>
                                          <option value={4} selected="selected">United States</option>
                                          <option value={5}>Others</option>
                                        </select>
                                      </form>
                                    </div>
                                    <div className="states">
                                      <form action>
                                        <label htmlFor="state">state/Province</label>
                                        <select name="state" id="state">
                                          <option value>select a region state or province</option>
                                          <option value={1}>Alapama</option>
                                          <option value={2}>Alaska</option>
                                          <option value={3}>American Samoa</option>
                                          <option value={4}>Arizona</option>
                                          <option value={5}>Arkansas</option>
                                          <option value={6}>Others</option>
                                        </select>
                                      </form>
                                    </div>
                                    <div className="postal-code">
                                      <form action>
                                        <label htmlFor="Postal">Zip/Postal Code</label>
                                        <input type="number" name="Postal" id="Postal" />
                                      </form>
                                    </div>
                                    <div className="rate-options variant">
                                      <form action>
                                        <p>
                                          <span>Flat: $10.00</span>
                                          <input type="radio" name="rate" id="flat" defaultChecked />
                                          <label htmlFor="flat" className="circle" />
                                        </p>
                                        <p>
                                          <span>Best: $0.00</span>
                                          <input type="radio" name="rate" id="best" />
                                          <label htmlFor="best" className="circle" />
                                        </p>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cart-total">
                                <table>
                                  <tbody>
                                    <tr>
                                      <th>Subtotal</th>
                                      <td className="thetotal">$0.00</td>
                                    </tr>
                                    <tr>
                                      <th>Discount</th>
                                      <td>$100.00</td>
                                    </tr>
                                    <tr>
                                      <th>Shipping <span className="mini-text">(Flat)</span></th>
                                      <td>$10.00</td>
                                    </tr>
                                    <tr className="grand-total">
                                      <th>TOTAL</th>
                                      <td><strong className="thetotal">$0.00</strong></td>
                                    </tr>
                                  </tbody>
                                </table>
                                <a href="/checkout" className="secondary-button">Checkout</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="single-category">
        <div class="container">
          <div class="wrapper">
            <div class="column">
              <div class="holder">
                <div class="row sidebar">
                  <div class="filter">
      
                    <div class="filter-block">
                      <h4>Category</h4>
                      <ul>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="bags">
                          <label for="bags">
                            <span class="checked"></span>
                            <span>Bags</span>
                          </label>
                          <span class="count">15</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="beauty">
                          <label for="beauty">
                            <span class="checked"></span>
                            <span>Beauty</span>
                          </label>
                          <span class="count">5</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="clothing">
                          <label for="clothing">
                            <span class="checked"></span>
                            <span>Clothing</span>
                          </label>
                          <span class="count">7</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="jewelry">
                          <label for="jewelry">
                            <span class="checked"></span>
                            <span>Jewelry</span>
                          </label>
                          <span class="count">15</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="shoes">
                          <label for="shoes">
                            <span class="checked"></span>
                            <span>Shoes</span>
                          </label>
                          <span class="count">5</span>
                        </li>
                        
                      </ul>
                    </div>
      
                    <div class="filter-block">
                      <h4>Activity</h4>
                      <ul>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="atheletic">
                          <label for="atheletic">
                            <span class="checked"></span>
                            <span>Atheletic</span>
                          </label>
                          <span class="count">95</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="lounge">
                          <label for="lounge">
                            <span class="checked"></span>
                            <span>Lounge</span>
                          </label>
                          <span class="count">75</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="outdoor">
                          <label for="outdoor">
                            <span class="checked"></span>
                            <span>Outdoor</span>
                          </label>
                          <span class="count">97</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="travel">
                          <label for="travel">
                            <span class="checked"></span>
                            <span>Travel</span>
                          </label>
                          <span class="count">16</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="urban">
                          <label for="urban">
                            <span class="checked"></span>
                            <span>Urban</span>
                          </label>
                          <span class="count">51</span>
                        </li>
                        
                      </ul>
                    </div>
      
                    <div class="filter-block">
                      <h4>Brands</h4>
                      <ul>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="nike">
                          <label for="nike">
                            <span class="checked"></span>
                            <span>Nike</span>
                          </label>
                          <span class="count">15</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="louis">
                          <label for="louis">
                            <span class="checked"></span>
                            <span>Louis Vuitton</span>
                          </label>
                          <span class="count">5</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="hermes">
                          <label for="hermes">
                            <span class="checked"></span>
                            <span>Hermes</span>
                          </label>
                          <span class="count">7</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="gucci">
                          <label for="gucci">
                            <span class="checked"></span>
                            <span>Gucci</span>
                          </label>
                          <span class="count">15</span>
                        </li>
      
                        <li>
                          <input type="checkbox" name="checkbox" id="zara">
                          <label for="zara">
                            <span class="checked"></span>
                            <span>Zara</span>
                          </label>
                          <span class="count">5</span>
                        </li>
                        
                      </ul>
                    </div>
      
                    <div class="filter-block">
                      <h4>Color</h4>
                            <ul class="bycolor variant flexitem">
            
                            <li>
                            <input type="radio" name="color" id="cogrey" placeholder="uu">
                            <label for="cogrey" class="circle"></label>
                            </li>
                            <li>
                            <input type="radio" name="color" id="coblue" placeholder="000">
                            <label for="coblue" class="circle"></label>
                            </li>
                            <li>
                            <input type="radio" name="color" id="cogreen" placeholder="cogreen">
                            <label for="cogreen" class="circle"></label>
                            </li>
                            <li>
                            <input type="radio" name="color" id="cored" checked placeholder="uu">
                            <label for="cored" class="circle"></label>
                            </li>
                            <li>
                            <input type="radio" name="color" id="colight" placeholder="uu"> 
                            <label for="colight" class="circle"></label>
                            </li>
            
                            </ul>
                    </div>
      
                    <div class="filter-block pricing">
                      <h4>Price</h4>
                      <div class="byprice">
                        <div class="range-track">
                          <input type="range" value="25000" min="0" max="100000">
                        </div>
                    
                      <div class="price-range">
                        <span class="price-form">$50</span>
                        <span class="price-to">$500</span>
                        </div>
                      </div>
                    </div>
      
      
                  </div>
                </div>
                <div class="siction">
                  
      <div class="row">
        <div class="cat-head">
          <div class="breadcrumb">
            <ul class="flexitem">
              <li><a href="#">Home</a></li>
              <li>Women</li>
            </ul>
          </div>
          <div class="page-title">
            <h1>Women</h1>
          </div>
          <div class="cat-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum maxime quos consectetur nobis officia id perspiciatis incidunt ratione tenetur aliquid a rem, temporibus nemo alias culpa odit? Animi repudiandae ducimus exercitationem quisquam dicta dolorem architecto maxime quis omnis similique provident magni temporibus tempora libero fugit debitis, vel enim aliquam necessitatibus mollitia harum ipsum! Sequi nihil doloribus labore soluta amet vel tempore, eum id cupiditate! Dicta molestias earum a, ipsa corrupti quo sunt neque quis perferendis!</p>
          </div>
          <div class="cat-navigation flexitem">
      
      
            <div class="item-filter desktop-hide">
              <a href="#" class="filter-trigger label">
                <i class="ri-menu-2-line ri-2x"></i>
                <span>filter</span>
              </a>
            </div>
            
      
            <div class="item-sortir">
              <div class="label">
                <span class="mobile-hide">Sort by default</span>
                <div class="desktop-hide">Default</div>
                <i class="ri-arrow-down-s-line"></i>
              </div>
              <ul>
                <li>Default</li>
                <li>Product name</li>
                <li>Price</li>
                <li>Brand</li>
              </ul>
            </div>
            <div class="item-perpage mobile-hide">
              <div class="label">Item 10 per page</div>
            </div>
            <div class="item-sortir">
              <div class="label">
                <span class="mobile-hide">Show 10 per page</span>
                <div class="desktop-hide">10</div>
                <i class="ri-arrow-down-s-line"></i>
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
      <div class="products main flexwrap"></div>
      <div class="load-more flexcenter">
        <a href="#" class="secondary-button">Load More</a>
      </div>
      
      
      
      <div class="products main flexwrap">
            
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="#">
                <img src="images/deskroom4.jpeg" alt="">
              </a></div>
            <div class="hoverable">
                    <ul>
                      <li class="active"><div class="hana"><span class="icon-heart ri-heart-line"></span></div></li>
                      <li><a href="#" class="hana"><span class="icon-eye"></span></a></li>
                      <li><a href="#" class="hana"><span class="icon-share2"></span></a></li>
                    </ul>
                  </div>
                  
      <div class="discount circle flexcenter">
      <span>25%</span></div>
          </div>
          <div class="content">
            <h3 class="main-links">
              <a href="#">Furniture High Quilty Wooden</a></h3>
            <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(2,548)</span>
            </div>
      <div class="price">
      <span class="current">$56.99</span>
      <span class="normal mini-text">$75.98</span>
      </div>
      <div class="mini-text">
      <p>2975 sold</p>
      <p>free shipping</p>
      </div>
          </div>
      
        </div>
          
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="#">
                <img src="images/lady8.webp" alt="">
              </a></div>
            <div class="hoverable">
                    <ul>
                      <li class="active"><div class="hana"><span class="icon-heart ri-heart-line"></span></div></li>
                      <li><a href="#" class="hana"><span class="icon-eye"></span></a></li>
                      <li><a href="#" class="hana"><span class="icon-share2"></span></a></li>
                    </ul>
                  </div>
                  
      <div class="discount circle flexcenter">
      <span>25%</span></div>
          </div>
          <div class="content">
            <h3 class="main-links">
              <a href="#">Women's Lightweight Knit Hoodie Sweater Pullover</a></h3>
            <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(994)</span>
            </div>
      <div class="price">
      <span class="current">$36.99</span>
      <span class="normal mini-text">$45.98</span>
      </div>
      <div class="footer">
      <ul class="mini-text">
      <li>Polister , Cotton</li>
      <li>Pull On Closure</li>
      <li>Fashion Personality</li>
      </ul>
      </div>
      
          </div>
      
        </div>
      
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="#">
                <img src="images/man.jpg" alt="">
              </a></div>
            <div class="hoverable">
                    <ul>
                      <li class="active"><div class="hana"><span class="icon-heart ri-heart-line"></span></div></li>
                      <li><a href="#" class="hana"><span class="icon-eye"></span></a></li>
                      <li><a href="#" class="hana"><span class="icon-share2"></span></a></li>
                    </ul>
                  </div>
                  
      <div class="discount circle flexcenter">
      <span>25%</span></div>
          </div>
          <div class="content">
            <h3 class="main-links">
              <a href="#">Under Armour Men's Tech</a></h3>
            <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(2,548)</span>
            </div>
      <div class="price">
      <span class="current">$56.99</span>
      <span class="normal mini-text">$75.98</span>
      </div>
      <div class="footer">
      <ul class="mini-text">
      <li>Polister , Cotton</li>
      <li>Pull On Closure</li>
      <li>Fashion Personality</li>
      </ul>
      </div>
          </div>
      
        </div>
      
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="#">
                <img src="images/lady3.jpeg" alt="">
              </a></div>
            <div class="hoverable">
                    <ul>
                      <li class="active"><div class="hana"><span class="icon-heart ri-heart-line"></span></div></li>
                      <li><a href="#" class="hana"><span class="icon-eye"></span></a></li>
                      <li><a href="#" class="hana"><span class="icon-share2"></span></a></li>
                    </ul>
                  </div>
                  
      <div class="discount circle flexcenter">
      <span>25%</span></div>
          </div>
          <div class="content">
            <h3 class="main-links">
              <a href="#">Womens Summer Boho Floral</a></h3>
            <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(2,548)</span>
            </div>
      <div class="price">
      <span class="current">$56.99</span>
      <span class="normal mini-text">$75.98</span>
      </div>
      <div class="footer">
      <ul class="mini-text">
      <li>Polister , Cotton</li>
      <li>Pull On Closure</li>
      <li>Fashion Personality</li>
      </ul>
      </div>
          </div>
      
        </div>
      
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="#">
                <img src="images/shose4.webp" alt="">
              </a></div>
            <div class="hoverable">
                    <ul>
                      <li class="active"><div class="hana"><span class="icon-heart ri-heart-line"></span></div></li>
                      <li><a href="#" class="hana"><span class="icon-eye"></span></a></li>
                      <li><a href="#" class="hana"><span class="icon-share2"></span></a></li>
                    </ul>
                  </div>
                  
      <div class="discount circle flexcenter">
      <span>25%</span></div>
          </div>
          <div class="content">
            <h3 class="main-links">
              <a href="#">Happy Sailed Womens Summer Boho Floral</a></h3>
            <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(2,548)</span>
            </div>
      <div class="price">
      <span class="current">$56.99</span>
      <span class="normal mini-text">$75.98</span>
      </div>
      <div class="footer">
      <ul class="mini-text">
      <li>Polister , Cotton</li>
      <li>Pull On Closure</li>
      <li>Fashion Personality</li>
      </ul>
      </div>
          </div>
      
        </div>
      
        <div class="item">
          <div class="media">
            <div class="thumbnail object-cover">
              <a href="#">
                <img src="images/shose6.webp" alt="">
              </a></div>
            <div class="hoverable">
                    <ul>
                      <li class="active"><div class="hana"><span class="icon-heart ri-heart-line"></span></div></li>
                      <li><a href="#" class="hana"><span class="icon-eye"></span></a></li>
                      <li><a href="#" class="hana"><span class="icon-share2"></span></a></li>
                    </ul>
                  </div>
                  
      <div class="discount circle flexcenter">
      <span>25%</span></div>
          </div>
          <div class="content">
            <h3 class="main-links">
              <a href="#">Sandal Womens Go Joy Walking Shoo Sneaker</a></h3>
              <div class="rating">
              <div class="stars"></div>
              <span class="mini-text">(2,548)</span>
            </div>
      <div class="price">
      <span class="current">$56.99</span>
      <span class="normal mini-text">$75.98</span>
      </div>
      <div class="footer">
      <ul class="mini-text">
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
        </div>
      </div> */}
                {/*  features products  */}
                {/* <div class="banners">
              <div class="container">
                <div class="wrapper">
                  <div class="column">
                    <div class="banner flexwrap">
                      <div class="row">
                        <div class="item get-brown">
                          <div class="imgpanner">
                            <img src="images/deskroom3.jpeg" alt="">
                          </div>
                          <div class="text-content flexcol">
                            <h3>Brutal Sale!</h3>
                            <h4><span>Get the deal in here</span><br>Living Room Chair </h4>
                            <a href="" class="primary-button">Shop Now</a>
                          </div>
                          <a href="#" class="over-link"></a>
                        </div>
                      </div>
      
                      <div class="row">
                        <div class="item">
                          <div class="imgpanner">
                            <img src="images/deskroom1.webp" alt="">
                          </div>
                          <div class="text-content flexcol">
                            <h3>Brutal Sale!</h3>
                            <h4><span>Discount Everyday</span><br>Office Outfit Chair </h4>
                            <a href="" class="primary-button">Shop Now</a>
                          </div>
                          <a href="#" class="over-link"></a>
                        </div>
                      </div>
      
      
      
                    </div>
      
                    <div class="product-categories flexwrap">
      
                      <div class="row">
                        <div class="item">
                          <div class="image">
                            <img src="images/lady20.jpeg" alt="">
                          </div>
      
                        </div>
                        <div class="content mini-links">
                          <h4>Beaty</h4>
                          <ul class="flexcol">
                            <li><a href="#">Makeup</a></li>
                            <li><a href="#">Skin Care</a></li>
                            <li><a href="#">Hair Care</a></li>
                            <li><a href="#">Fragrance</a></li>
                            <li><a href="#">Foot & Hand Care</a></li>
                          </ul>
                          <div class="second-links">
                            <a href="#" class="view-all">View-all<i class="ri-arrow-right-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
      
      
                      <div class="row">
                        <div class="item">
                          <div class="image">
                            <img src="images/fruniture.jpeg" alt="">
                          </div>
                        </div>
                        <div class="content mini-links">
                          <h4>Gatdets</h4>
                          <ul class="flexcol">
                            <li><a href="#">Camera</a></li>
                            <li><a href="#">Call Phones</a></li>
                            <li><a href="#">Computer</a></li>
                            <li><a href="#">GPS & Navigation</a></li>
                            <li><a href="#">Headphones</a></li>
                          </ul>
                          <div class="second-links">
                            <a href="" class="view-all">View-all<i class="ri-arrow-right-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
      
      
                      <div class="row">
                        <div class="item">
                          <div class="image">
                            <img src="images/dec2.jpg" alt="">
                          </div>
                        </div>
                        <div class="content mini-links">
                          <h4>Home Decor</h4>
                          <ul class="flexcol">
                            <li><a href="#">Kitchen</a></li>
                            <li><a href="#">Dining Room</a></li>
                            <li><a href="#">Pantry</a></li>
                            <li><a href="#">Great Room</a></li>
                            <li><a href="#">Breakfast Nook</a></li>
                          </ul>
                          <div class="second-links">
                            <a href="" class="view-all">View-all<i class="ri-arrow-right-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
      
      
                      <div class="row">
                        <div class="item">
                          <div class="image">
                            <img src="images/healthy food.jpeg" alt="">
                          </div>
                        </div>
                        <div class="content mini-links">
                          <h4>Healthy Care</h4>
                          <ul class="flexcol">
                            <li><a href="#">Healthy Food</a></li>
                            <li><a href="#">Healthy Diet</a></li>
                            <li><a href="#">Healthy Clothes</a></li>
                            <li><a href="#">Healthy WorkSpace</a></li>
                          </ul>
                          <div class="second-links">
                            <a href="" class="view-all">View-all<i class="ri-arrow-right-line"></i>
                            </a>
                          </div>
                        </div>
                      </div>
      
      
      
                    </div>
      
      
                  </div>
                </div>
              </div>
            </div> */}
              </main>
              <Menubottom />
              <Footer />
              
            </div>
      
  
  );
}

export default Cart;
