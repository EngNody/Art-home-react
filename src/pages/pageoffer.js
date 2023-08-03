import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'
import Featuredproducts from '../comp/featuredproducts';
import { Helmet } from 'react-helmet-async';


const Pageoffer = () => {
  return (
<>
<Helmet>
<title>Offers</title>
</Helmet>


    <body id='body'>
    
          <div id="page" className="site single-page">
            <Header />

            <main>
              <div className="single-product">
                <div className="container">
                  <div className="wrapper">
                    <div className="breadcrumb">
                      <ul className="flexitem">
                        <li><a href="#&quot;">Home</a></li>
                        <li><a href="#&quot;">Shoes</a></li>
                        <li>Men Slip On Shoes Casual with Arch Support Insoles</li>
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
                                    <a data-fslightbox href="images/shose2.webp"><img src="images/shose2.webp" alt="" /></a>
                                  </div>
                                  <div className="image-show swiper-slide">
                                    <a data-fslightbox href="images/shose3.webp"><img src="images/shose3.webp" alt="" /></a>
                                  </div>
                                  <div className="image-show swiper-slide">
                                    <a data-fslightbox href="images/shose5.jpeg"><img src="images/shose5.jpeg" alt="" /></a>
                                  </div>
                                  <div className="image-show swiper-slide">
                                    <a data-fslightbox href="images/shose6.webp"><img src="images/shose6.webp" alt="" /></a>
                                  </div>
                                </div>
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                              </div>
                              <div thumbslider className="small-image">
                                <ul className="small-image-wrapper flexitem swiper-wrapper">
                                  <li className="thumbnail-show swiper-slide">
                                    <img src="images/shose2.webp" alt="" />
                                  </li><li>
                                  </li><li className="thumbnail-show swiper-slide">
                                    <img src="images/shose3.webp" alt="" />
                                  </li><li>
                                  </li><li className="thumbnail-show swiper-slide">
                                    <img src="images/shose5.jpeg" alt="" />
                                  </li><li>
                                    {/* <li class="thumbnail-show swiper-slide">
          <img src="images/shose6.webp" alt="">
          <img src="images/shose12.jpg" alt="">
          <li/> */}
                                  </li><li className="thumbnail-show swiper-slide">
                                    <img src="images/shose6.webp" alt="" />
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
                                    <img src="images/baby.webp" alt="" width={0} height={0} />
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
                    </div>
                  </div>
                </div>
              </div>
              <Featuredproducts />

            </main>
            <Menubottom />
            <Footer />
          </div>
      
    </body>
    </>
  );
}

export default Pageoffer;
