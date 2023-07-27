import React from 'react';
import './contactuspage.css';
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'

const Contactuspage = () => {
  return (
    
          <div id="page" className="site single-page paycheck">
          <Header />

            <main>
              <div className="contact" id="contact">
                <div className="left">
                  <img src="images/OIP (16).jpg" alt="" />
                </div>
                <div className="right">
                  <h2>Contact Us</h2>
                  <form onsubmit="{handleSubmit}">
                    <input type="text" placeholder="Email" id="mail" />
                    <textarea placeholder="Message" id="area" cols={30} rows={10} defaultValue={""} />
                    <button type="submit" id="send">Send</button><br />
                    <span id="message">Thanks, I'll reply ASAP :)</span>
                  </form>
                </div>
              </div>
            </main>
            <Menubottom />
            <Footer />
            
          </div>
  
  );
}

export default Contactuspage;
