import React from 'react';

const Footer = () => {
  return (
    <div>
      <>
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
            <p className="mini-text">Copyright 2023 .Store.All right reserved.</p>
          </div>
        </div>
      </div>
    </footer>
      </>
    </div>
  );
}

export default Footer;
