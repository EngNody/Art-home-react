import React from 'react';
import './aboutpage.css'
import Header from '../comp/header'
import Footer from '../comp/footer'
import Menubottom from '../comp/menubottom'
import { Helmet } from 'react-helmet-async';



const Aboutpage = () => {
  return (
      <>
      <Helmet>
    <title>About Page</title>
    </Helmet>
      
            <div id="page" className="site single-page paycheck">
              <Header />


              <main>
                <div className="maincontainer">
                  <div className="sectionone">
                    <div className="bigcon">
                      <div className="imgframe">
                        <img src="images/lady17.jpeg" alt="" />
                      </div>
                      <div className="textcontent">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illum iusto expedita nam possimus fugiat sint laudantium tempore, dolorem facere laborum nemo? Rerum aliquam quisquam quam ut ad ratione illum.
                      </div>
                    </div>
                  </div>
                  <div className="sectiontwo">
                    <div className="bigcon">
                      <div className="textcontent">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio illum iusto expedita nam possimus fugiat sint laudantium tempore, dolorem facere laborum nemo? Rerum aliquam quisquam quam ut ad ratione illum.
                      </div>
                      <div className="imgframe">
                        <img src="images/ccc1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              
              <Menubottom />
              <Footer />
              
            </div>
</>
  );
}

export default Aboutpage;
