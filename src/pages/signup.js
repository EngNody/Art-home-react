import React from 'react';
import './signup.css';
import { Link } from "react-router-dom";

const Signup = () => {
  return (

          <div id='samaka'>
            <header>
              {/* <h2 class="logo">EGY Store</h2> */}
              <Link to="/" className="logo">EGY Store</Link>
              <nav className="navegation">
                <Link to="/myaccount">My Account</Link>
                <Link to="/aboutpage">About</Link>
                <Link to="#">Services</Link>
                <Link to="/contactuspage">Contact</Link>
                <button to="#" className="btnlogin-popup" id="login">Login</button>
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
                    <Link to="#">Forget Password?</Link>
                  </div>
                  <button type="submit" className="btn">Login</button>
                  <div className="login-register">
                    <p>Don`t have an account?<Link to="#" className="register-link">Register</Link></p>
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
                    {/* <Link to="#">Forget Password?</Link> */}
                  </div>
                  <button type="submit" className="btn">Register</button>
                  <div className="login-register">
                    <p>Already have an account?
                      <Link to="#" className="login-link">Login</Link></p>
                  </div>
                </form>
              </div>
            </div>
</div>
  
  );
}

export default Signup;
