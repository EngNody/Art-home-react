import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'
import Featuredproducts from '../comp/featuredproducts';
import { Helmet } from 'react-helmet-async';

const Pagecategory = () => {
  return (
    <>
    <Helmet>
    <title>Category</title>
    </Helmet>

    <body id='body'>
    
          <div id="page" className="site page-category">
            {/* header mobile */}
            <Header />

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
           <Featuredproducts />
            </main>
            <Menubottom />
            <Footer />
          </div>
    
    </body>
    </>
  );
}

export default Pagecategory;
