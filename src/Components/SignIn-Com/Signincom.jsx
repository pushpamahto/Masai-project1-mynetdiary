import React from 'react';
import './Signincom.css';
import { Outlet, Link } from "react-router-dom";
import signlogo from '../assets/logo/logo-main.svg';
import appstorelogo from '../assets/Banner/app-store-badge.svg';
import googleapplogo from '../assets/Banner/google-play-badge.svg';
const Signincom = () => {
  return (
    <>
 <section className='signin-header'>
     <div className="container-fluid bg-img">
    <div className="row">
      <div className="signheader-logo"><Link to='/'><img src={signlogo} alt="" srcset="" /></Link></div>
    </div>
    <div className="row">
      <div className="col-lg-6 m-auto">
        <div className="shadow-bt bg-white">
          <h3 className='signup-heading py-4'>Sign In</h3>
          <div className="sign-para">
             <div className="sign-icons"><i class="bi bi-phone fs-2"></i></div>
             <div className='para'>
             If you use one of MyNetDiary’s mobile apps, please sign in with the same account name or email as you do in your MyNetDiary mobile app. You can see account name on the Settings screen in the mobile app.
             </div>
          </div>
          <div className="form-d-parent">
            <div className="lefform">
              <form action="#">
                <div className="form-floating mb-3">
                  <input type='email' name='email' id="floatingInput" className='form-control' placeholder='enter your email'/>
                  <label for="floatingInput">Email address</label>
                  </div>
                <div className="mb-3 form-floating pass-sing-parent"><input type='password' name='password' id="floatingPassword" className='form-control' placeholder='Enter Your Password'/>
                <label for="floatingPassword">Password</label>
                <i class="bi bi-eye-slash fs-5"></i></div>
                <div className="mb-3 checkbox1"><input type="checkbox" className='' /> <label>Remember me on this computer</label></div>
                <div className="btn-signup d-flex justify-content-between gap-3">
                   <div className="btn2"><input type="button" className='button1' value="Sign in" /></div>
                   <div className="btn1"><a href="#" className='forget-pass'>Forgot password?</a></div>
                </div>
              </form>
            </div>
            <div className="rightform">
              <div className="facebook">
                <div className="fbleftincons"><svg viewBox="0 0 216 216" height="24" width="24" color="#FFFFFF"><path fill="#FFFFFF" d="M204.1 0H11.9C5.3 0 0 5.3 0 11.9v192.2c0 6.6 5.3 11.9 11.9 11.9h103.5v-83.6H87.2V99.8h28.1v-24c0-27.9 17-43.1 41.9-43.1 11.9 0 22.2.9 25.2 1.3v29.2h-17.3c-13.5 0-16.2 6.4-16.2 15.9v20.8h32.3l-4.2 32.6h-28V216h55c6.6 0 11.9-5.3 11.9-11.9V11.9C216 5.3 210.7 0 204.1 0z"></path></svg></div>
                <div className="labelfb">Sign in with Facebook</div>
              </div>
              <div className="google">
              <div className="googleleftincons"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div>
                <div className="labelfb">Sign in with Google</div>
              </div>
              <div className="andoridphone">
              <div className="iphoneleftincons"><i class="bi bi-apple fs-4 text-white"></i></div>
                <div className="labelfb">Sign in with Apple</div>
              </div>
            </div>
          </div>
          <div className="formbottomtxt text-center py-3"><span>No account? <a href="#">Sign Up </a>, it's easy.</span></div>
        </div>
      </div>
    </div>
   </div>

 </section>

 <section className='aap-logo-footer text-center'>
       <div className="container-fluid">
        <div className="row"> 
        <div className="parent-left-logo-app">
        <div className='app-heading'><h2>Download Free MyNetDiary App</h2></div>
                  <div className='logo-footer-fisrt'>
                        <div className="app-left-logo">
                        <img src={appstorelogo} alt="" className='img-fluid' srcset="" />
                        </div>
                        <div className="app-right-logo">
                        <img src={googleapplogo} alt="" className='img-fluid' srcset="" />
                        </div>
                    </div>                   
                    <div className="app-rating">
                        <div className='app-left-rating'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>  
                        </div>
                    </div>  
        </div>
        </div>
       </div>
      </section>
      <div className="copyright">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <p className="copyright-copy">Copyright © 2024 MyNetDiary Inc. All rights reserved.</p>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-6">
                <ul class="navbar-nav-copy-right px-4">
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
                </div>
            </div>
        </div>
      </div>
      
  
 </>
  )
}

export default Signincom
