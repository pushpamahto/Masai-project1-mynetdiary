import React from 'react';
import './Footer.css';
import footerlogo from '../assets/logo/footer-logo.svg';
import appstorelogo from '../assets/Banner/app-store-badge.svg';
import googleapplogo from '../assets/Banner/google-play-badge.svg';


const Footer = () => {
  return (
      <>
      
      <section className='footer'>
        <div className="container-fluid">
         <div className="row">
         <div className="col-lg-3">
               <img src={footerlogo} alt="" className='footer-logo' srcset="" />
                <div className='footer-fisrt'>
                        <div className="logo-app px-4 mt-4">
                        <div className="footer-left-logo-app">
                        <img src={appstorelogo} alt="" className='img-fluid' srcset="" />
                        </div>
                        <div className="footer-right-logo-app">
                        <img src={googleapplogo} alt="" className='img-fluid' srcset="" />
                        </div>
                    </div>

                    <div className="footer-parent-rating px-4">
                    <div className="left-bottom-rating">
                        <div className="footer-left-icons-rating">
                        <div className='left-rating'>
                        <i class="bi bi-apple"></i><span className='rating px-2'>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i> 
                        </span>
                        </div>
                        <div className="right-rating">
                        <h5 className='rating-footer'>4.8 • 184,041 Ratings</h5>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-2">
                <h3>APP FEATURES</h3>
                <ul class="navbar-nav">
                    <li><a href="#">iPhone &amp; iPad app</a></li>
                    <li><a href="#">Android app</a></li>
                    <li><a href="#">Keto Diet</a></li>
                    <li><a href="#">Low-Carb Diet</a></li>
                    <li><a href="#">Premium Calorie Counting</a></li>
                </ul>
            </div>
            <div className="col-lg-3">
                <h3>WEIGHT LOSS SCIENCE</h3>
                <ul class="navbar-nav">
                    <li><a href="#">Weight Loss Blog</a></li>
                    <li><a href="#">Diet Library</a></li>
                    <li><a href="#">Dietitian Team</a></li>
                </ul>
            </div>
            <div className="col-lg-2">
                <h3>BUSINESS</h3>
                <ul class="navbar-nav">
                    <li><a href="#">Professional Connect</a></li>
                    <li><a href="#">Gift cards & Group discounts</a></li>
                    <li><a href="#">For trainers</a></li>
                    <li><a href="#">For healthcare professionals</a></li>
                    <li><a href="#">For families</a></li>
                    <li><a href="#">Food database licensing</a></li>

                </ul>
            </div>
            <div className="col-lg-2">
              <h3> COMPANY</h3>
              <ul class="navbar-nav">
                    <li><a href="#">About MyNetDiary</a></li>
                    <li><a href="#">In the News</a></li>
                    <li><a href="#">Press Releases</a></li>
                    <li><a href="#">Press Kit</a></li>
                    
                </ul>
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

export default Footer
