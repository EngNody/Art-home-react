import React from 'react';

const Menubottom = () => {
  return (
    <div>
      <>
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
          
                      </ul>
                    </div>
                    <a href="#" id="wishlista">
                      <span className="icon-heart wishlist" />
                      <div className="fly-item"><div className="item-number-heart-mob">0</div></div>
                      <span>Wishlist</span>
                    </a>
                  </li>
                  <li><a href="#0" className="t-search">
                      <span className="icon-search" />
                      <span>Search</span>
                    </a></li>
                  <li>
                    <a href="#0" className="cart-trigger">
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
      </>
    </div>
  );
}

export default Menubottom;
