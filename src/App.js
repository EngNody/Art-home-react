import './App.css';
import Header from './comp/header'
import Footer from './comp/footer'
import Menubottom from './comp/menubottom'
import Featuredproducts from './comp/featuredproducts';
// import Maincontent from './comp/maincontent';
function App() {
  return (
<>

<Header />

      <div id="page" className="site page-home">
      
        <main>
            {/* slider */}
        <div className="slider">
          <div className="container">
            <div className="wrapper">
              <div className="swiper myslider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="image">
                        <img src="images/shose1.webp" alt="" />
                        <div className="text-content flexcol">
                          <h4>Shoes Fashion</h4>
                          <h2><span>Come and Get it!</span>
                            <br /> 
                            <span className="spanh2">Brand New Shoes</span> <br />
                            <a href="#" className="primary-button">Shop Now</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="image">
                        <img src="images/shose5.jpg" alt="" />
                        <div className="text-content flexcol">
                          <h4>Shoes Fashion</h4>
                          <h2><span>Come and Get it!</span>
                            <br /> 
                            <span className="spanh2">Brand New Shoes</span> <br />
                            <a href="#" className="primary-button">Shop Now</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      {/* <div class="image object-cover"> */}
                      <div className="image">
                        <img src="images/shose11.jpg" alt="" />
                        {/* </div> */}
                        <div className="text-content flexcol">
                          <h4>Shoes Fashion</h4>
                          <h2><span>Come and Get it!</span>
                            <br /> 
                            <span className="spanh2">Brand New Shoes</span> <br />
                            <a href="#" className="primary-button">Shop Now</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="image">
                        <img src="images/shose12.jpg" alt="" />
                        <div className="text-content flexcol">
                          <h4>Shoes Fashion</h4>
                          <h2><span>Come and Get it!</span>
                            <br /> 
                            <span className="spanh2">Brand New Shoes</span> <br />
                            <a href="#" className="primary-button">Shop Now</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="item">
                      <div className="image">
                        <img src="images/deskroom4.jpeg" alt="" />
                        <div className="text-content flexcol">
                          <h4>Quick offer</h4>
                          <h2><span>Wooden Minimal Sofa</span>
                            <br /> 
                            <span className="spanh2">extra 50%off</span> <br />
                            <a href="#" className="primary-button">Shop Now</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="swiper-pagination"></div> */}
                {/* add pagination */}
                <div className="trending-slider-control">
                  <div className="swiper-button-prev slider-arrow prevhome">
                    <ion-icon name="arrow-back-outline" />
                  </div>
                  <div className="swiper-pagination" />
                  <div className="swiper-button-next slider-arrow nexthome">
                    <ion-icon name="arrow-forward-outline" />
                  </div>
                  {/* <div class="swiper-pagination"></div> */}
                </div>
                {/* =--------------------------------------------------- */}
              </div>
            </div>
          </div>
        </div>
        {/* brands */}
        <div className="brands">
          <div className="container">
            <div className="wrapper flexitem">
              <div className="item"><a href="#"><img src="images/zaralogo.jpg" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/sumsunglogo.jpg" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/oppologo.jpg" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/asus.jpg" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/hurlylogo.jpg" alt="" /></a></div>
              <div className="item"><a href="#"><img src="images/d&glogo.jpg" alt="" /></a></div>
            </div>
          </div>
        </div>
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
                  <div className="row products big">
                    <div className="item">
                      <div className="offer">
                        <p> Offer ends at </p>
                        <ul className="flexcenter">
                          <li>1</li>
                          <li>15</li>
                          <li>27</li>
                          <li>60</li>
                        </ul>
                      </div>
                      <div className="media">
                        <div className="image">
                          <a href="#">
                            <img src="images/lady9.webp" alt="shoel" />
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
                        <div className="rating">
                          <div className="stars" />
                          <span className="mini-text">(2,548)</span>
                        </div>
                        <h3 className="main-links"><a href="#">Happy sailed Womens Summer poho floral</a></h3>
                        <div className="price">
                          <div>
                            <span className="current">$199</span>
                            <span className="normal mini-text">$189.98</span>
                          </div>
                          <button className="newbutton">Buy</button>
                        </div>
                        <div className="stock mini-text">
                          <div className="qty">
                            <span>Stock:<strong className="qty-available">107</strong></span>
                            <span>Sold<strong className="qty-sold">3,459</strong></span>
                          </div>
                          <div className="bar">
                            <div className="available" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <h3 className="main-links"><a href="#">Black Women`s Coat Dress</a></h3>
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
                            <span className="current">$12.99</span>
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
                            <span className="current">$19.99</span>
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
                            <span className="current">$1290.99</span>
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
        {/* features */}
        <div className="features keybuy">
          <div className="container">
            <div className="wrapper">
              <div className="column">
                <div className="sectop flexitem">
                  <h2>
                    <span className="circle" />
                    <span>Featured Products</span>
                  </h2>
                  <div className="second-links">
                    <a href="#" className="view-all">view all <i className="ri-arrow-right-line" /></a>
                  </div>
                </div>
                <div className="products main flexwrap">
                  {/*features item */}
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
                  {/*features item */}
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
                        <a href="#">Women`s Lightweight Knit Hoodie Sweater Pullover</a></h3>
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
                      {/* additional structure */}
                      <div className="footer">
                        <ul className="mini-text">
                          <li>Polister , Cotton</li>
                          <li>Pull On Closure</li>
                          <li>Fashion Personality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*features item */}
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
                        <a href="#">Under Armour Men`s Tech</a></h3>
                      <div className="rating">
                        <div className="stars" />
                        <span className="mini-text">(2,548)</span>
                      </div>
                      <div className="price">
                        <div>
                          <span className="current">$50.99</span>
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
                  {/*features item */}
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
                          <span className="current">$60.99</span>
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
                  {/*features item */}
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
                          <span className="current">$59.99</span>
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
                  {/*features item */}
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
                      {/* <a href="#">Skechers Womens Go Joy Walking Shoo Sneaker</a></h3> */}
                      <div className="rating">
                        <div className="stars" />
                        <span className="mini-text">(2,548)</span>
                      </div>
                      <div className="price">
                        <div>
                          <span className="current">$54.99</span>
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
                  {/* =============== */}
                </div>  
              </div>
            </div>
          </div>
        </div>
        
        </main>

        <Featuredproducts />
      <Menubottom />
      <Footer />
      
      </div>


    <script  src="E-commerce2.js"></script>
    <script  src="headerfooter.js"></script>



</>
  );
}

export default App;
