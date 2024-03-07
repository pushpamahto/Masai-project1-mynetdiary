import React from 'react';
import './Homebanner.css';
import bgstartlogo from '../assets/Banner/bg-start-left.png';
import appstorelogo from '../assets/Banner/app-store-badge.svg';
import googleapplogo from '../assets/Banner/google-play-badge.svg';
import iphoneimg from '../assets/Banner/iphonex-img.png';
import foodplate from '../assets/Banner/Food-plate.png';
import watchimg from  '../assets/Banner/iwatch-img.png';
const Homebanner = () => {
  return (
    <>
    <section className='homebage-banner-bg'>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 p-0 m-0">
              <div className="left-column-section">
              <img src={bgstartlogo} alt="" className='img-fluid' srcset="" />
               <div className="heading px-4 py-2">
                <h1>Be Healthy for Life!</h1>
               </div>
               <div className="para px-4">
                 <p>Your weight loss, diet, and nutrition assistant.</p>
               </div>
               <div className="logo-app px-4 mt-5">
                 <div className="left-logo-app">
                 <img src={appstorelogo} alt="" className='img-fluid' srcset="" />
                 </div>
                 <div className="right-logo-app">
                 <img src={googleapplogo} alt="" className='img-fluid' srcset="" />
                 </div>
               </div>

             <div className="parent-rating px-4">
             <div className="left-bottom-rating">
                 <h2>Top Rated: 184,041 reviews & counting</h2>
                 <div className="left-icons-rating">
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
                 <i class="bi bi-android2"></i><span className='rating px-2'>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i> 
                </span>
                 </div>
                 </div>
               </div>
             </div>
             

              </div>

            </div>
            <div className="col-lg-4 p-0 m-0">
            <img src={iphoneimg} alt="" className='img-fluid mt-5' srcset="" />
            </div>
            <div className="col-lg-4 p-0 m-0">
               <div className="right-img p-0 m-0">
               <div className="right-top-img"><img src={foodplate} alt="" className='img-fluid' srcset="" /></div>
                <div className="right-bottom-img"><img src={watchimg} alt="" className='img-fluid' srcset="" /></div>
               </div>
            </div>
        </div>
     </div>
     

    </section>
    
    </>
  )
}

export default Homebanner
