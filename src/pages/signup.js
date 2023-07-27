import React from 'react';
// import './signup.css';

const Signup = () => {
  return (
    <>

          <div>
            <header>
              {/* <h2 class="logo">EGY Store</h2> */}
              <a href="#" className="logo">EGY Store</a>
              <nav className="navegation">
                <a href="./myaccount.html">My Account</a>
                <a href="aboutpage.html">About</a>
                <a href="#">Services</a>
                <a href="contactuspage.html">Contact</a>
                <button href="#" className="btnlogin-popup" id="login">Login</button>
              </nav>
            </header>
            <div className="wrapper">
              <span className="icon-close">
                <ion-icon name="close-outline" />
              </span>
              <div className="form-box login">
                <h2>Login</h2>
                <form action>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="mail-outline" />
                    </span>
                    <input type="email" required />
                    <label>Email</label>
                  </div>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="lock-closed-outline" />
                    </span>
                    <input type="password" required />
                    <label>Password</label>
                  </div>
                  <div className="remember-forget">
                    <label htmlFor><input type="checkbox" />Remember Me</label>
                    <a href="#">Forget Password?</a>
                  </div>
                  <button type="submit" className="btn">Login</button>
                  <div className="login-register">
                    <p>Don`t have an account?<a href="#" className="register-link">Register</a></p>
                  </div>
                </form>
              </div>
              <div className="form-box register">
                <h2>Register</h2>
                <form action>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="person-outline" />
                    </span>
                    <input type="text" required />
                    <label>User</label>
                  </div>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="mail-outline" />
                    </span>
                    <input type="email" required />
                    <label>Email</label>
                  </div>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="lock-closed-outline" />
                    </span>
                    <input type="password" required />
                    <label>Password</label>
                  </div>
                  <div className="remember-forget">
                    <label htmlFor><input type="checkbox" />I agree to the terms $ conditions</label>
                    {/* <a href="#">Forget Password?</a> */}
                  </div>
                  <button type="submit" className="btn">Register</button>
                  <div className="login-register">
                    <p>Already have an account?
                      <a href="#" className="login-link">Login</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
  
    </>
  );
}

export default Signup;
