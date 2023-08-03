import React from 'react';
import './blog.css';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'
import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (
      <>
      <Helmet>
      <title>Blog</title>
      </Helmet>

            <div id="page" className="site single-page">
            <Header />

              <main>
                {/* <h1 class="title"></h1> */}
                {/* =================================== */}
                {/* swiper-slider-3d-overflow */}
                {/* =================================== */}
                <section id="trending" className="blog">
                  <div className="container">
                    {/* <h3 class="text-center section-subheading">Trending Products</h3> */}
                    <h1 className="text-center section-heading">Trending Products</h1>
                  </div>
                  <div className="container">
                    <div className="swiper trending-slider">
                      <div className="swiper-wrapper">
                        {/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="products/beauty/images/skin1.jpg" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Beauty</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}
                        {/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/background.14.webp" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Electronic</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}{/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/h9.jpg" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Women's Fashion</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}{/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/ccc3.png" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Men's Fashion</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}{/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/girls.jpg" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Girls Fashion</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}
                        {/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/boy.jpg" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Boys Fashion</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}
                        {/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/household1.jpg" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">health &amp; household</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}
                        {/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/home1.jpg" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Home &amp; Kitchen</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}
                        {/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/pet1.jpg" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Pet Supplies</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide end */}
                        {/* slide start */}
                        <div className="swiper-slide trending-slide">
                          <div className="trending-slide-img">
                            <img src="images/sports.jpg" alt="trending" />
                          </div>
                          <div className="trending-slide-content">
                            <h1 className="product-offer">20%</h1>
                            <div className="trending-slide-content-bottom">
                              <h2 className="section-name">Sports</h2>
                              <h3 className="product-rating">4.5</h3>
                              <div className="rating">
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                                <ion-icon name="star" />
                              </div>
                            </div>
                          </div>
                          {/* slide end */}
                        </div>
                      </div>
                      {/* add pagination */}
                      <div className="trending-slider-control">
                        <div className="swiper-button-prev slider-arrow">
                          <ion-icon name="arrow-back-outline" />
                        </div>
                        <div className="swiper-pagination" />
                        <div className="swiper-button-next slider-arrow">
                          <ion-icon name="arrow-forward-outline" />
                        </div>
                        {/* <div class="swiper-pagination"></div> */}
                      </div>
                    </div>
                  </div>
                </section>
                {/* ===================================================
      recent posts and topics
      =================================================== */}
                <h1 className="text-center section-heading">Post</h1>
                <section className="topic">
                  <div className="topiccontainer">
                    <div className="conh3">
                      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sed sequi, nostrum repellendus eligendi numquam modi voluptas itaque consequuntur, facilis, nam rerum fugiat ad ipsa alias vero fugit velit eveniet.</h3>
                    </div>
                    <div className="conimg">
                      <img src="./images/background.11.webp" alt="" />
                    </div>
                  </div>
                </section>
                {/* ================================ */}
                {/* auto slider */}
                {/* ================================ */}
                <div className="wrapper autoslider">
                  <i id="left" className="fa-solid fa-angle-left" />
                  <ul className="carousel">
                    <li className="card">
                      <div className="img"><img src="images/card slider images/images/img-1.jpg" alt="img" draggable="false" /></div>
                      <h2>Blanche Pearson</h2>
                      <span>Sales Manager</span>
                    </li>
                    <li className="card">
                      <div className="img"><img src="images/card slider images/images/img-2.jpg" alt="img" draggable="false" /></div>
                      <h2>Joenas Brauers</h2>
                      <span>Web Developer</span>
                    </li>
                    <li className="card">
                      <div className="img"><img src="images/card slider images/images/img-3.jpg" alt="img" draggable="false" /></div>
                      <h2>Lariach French</h2>
                      <span>Online Teacher</span>
                    </li>
                    <li className="card">
                      <div className="img"><img src="images/card slider images/images/img-4.jpg" alt="img" draggable="false" /></div>
                      <h2>James Khosravi</h2>
                      <span>Freelancer creator</span>
                    </li>
                    <li className="card">
                      <div className="img"><img src="images/card slider images/images/img-5.jpg" alt="img" draggable="false" /></div>
                      <h2>Kristina Zasiadko</h2>
                      <span>Bank Manager</span>
                    </li>
                    <li className="card">
                      <div className="img"><img src="images/card slider images/images/img-6.jpg" alt="img" draggable="false" /></div>
                      <h2>Donald Horton</h2>
                      <span>App Designer</span>
                    </li>
                  </ul>
                  <i id="right" className="fa-solid fa-angle-right" />
                </div>
              </main>
              <Menubottom />
              <Footer />
              
            </div>
    </>

  );
}

export default Blog;
