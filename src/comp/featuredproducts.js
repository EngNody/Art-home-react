import React from 'react';

const Featuredproducts = () => {
  return (
    <>
                {/*  features products  */}
                <div className="banners">
                <div className="container">
                  <div className="wrapper">
                    <div className="column">
                      <div className="banner flexwrap">
                        {/* row */}
                        <div className="row">
                          <div className="item get-brown">
                            <div className="imgpanner">
                              <img src="images/deskroom3.jpeg" alt="" />
                              {/* <img src="/images/lady11.webp" alt=""> */}
                            </div>
                            <div className="text-content flexcol">
                              <h3>Brutal Sale!</h3>
                              <h4><span>Get the deal in here</span><br />Living Room Chair </h4>
                              <a href className="primary-button">Shop Now</a>
                            </div>
                            <a href="#" className="over-link" />
                          </div>
                        </div>
                        {/* row */}
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
                              <img src="images/lady20.jpeg" alt="" /></div>
                            {/* <img src="images/lady6.jpeg" alt=""></div> */}
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
                              </a></div>
                          </div>
                        </div>
                        {/* ================ */}
                        <div className="row">
                          <div className="item">
                            <div className="image">
                              <img src="images/fruniture.jpeg" alt="" /></div>
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
                              </a></div>
                          </div>
                        </div>
                        {/* ================ */}
                        <div className="row">
                          <div className="item">
                            <div className="image">
                              <img src="images/dec2.jpg" alt="" /></div>
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
                              </a></div>
                          </div>
                        </div>
                        {/* ================ */}
                        <div className="row">
                          <div className="item">
                            <div className="image">
                              <img src="images/healthy food.jpeg" alt="" /></div>
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
                              </a></div>
                          </div>
                        </div>
                        {/* ================ */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
  );
}

export default Featuredproducts;
