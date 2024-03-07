import React from "react";
import "./Aboutsec.css";
import aboutlogo from "../assets/aboutimg/wh-logo.svg";
import aboutleftimg from "../assets/aboutimg/about-left-img.png";
import aboutrightimg from "../assets/aboutimg/about-right-img.png";
import aboutleftimg2 from "../assets/aboutimg/about-left-img2.png";
import aboutrightimg2 from "../assets/aboutimg/about-right-img2.png";
import foopls31 from "../assets/aboutimg/fooplt3-1.jpg";
import foopls32 from "../assets/aboutimg/fooplt3-2.png";
import foopls33 from "../assets/aboutimg/fooplt3-3.png";
import slider1 from "../assets/slider/slider1.png";
import shadow1 from '../assets/slider/shadow1.jpeg';
import shadow2 from '../assets/slider/shadow2.jpeg';
import shadow3 from '../assets/slider/shadow3.jpeg';
import shadow4 from '../assets/slider/shadow4.jpeg';
import slider2 from '../assets/slider/slider2.png';
import slider3 from '../assets/slider/slider3.png';


const Aboutsec = () => {
  return (
    <>
      <section id="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="about-sec">
                <p>
                  {" "}
                  <p>
                    “You really can't go wrong with MyNetDiary as a
                    scientifically-proven way to help you lose weight”
                  </p>
                </p>
              </div>
              <div className="text-center py-5">
                {" "}
                <img src={aboutlogo} alt="" className="img-fluid" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="succeed">
        <div className="container">
          <h1 className="suceed-head text-center">What it takes to succeed</h1>
          <div className="row">
            <div className="col-lg-6">
              <div className="left-about">
                <div className="text-center">
                  <img
                    src={aboutleftimg}
                    alt=""
                    className="about-left-right-img"
                    srcset=""
                  />
                  <h2 className="left-right-heading1">Find your Diet</h2>
                </div>
                <div className="about-para mt-1">
                  <p>
                    Find a diet that fits your lifestyle: Calorie Counting,
                    Low-Carb, Keto, Vegan, Vegetarian and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-about mt-4">
                <div className="text-center mt-5">
                  <img
                    src={aboutrightimg}
                    alt=""
                    className="about-left-right-img"
                    srcset=""
                  />
                  <h2 className="left-right-heading2">Set Your Targets</h2>
                </div>
                <div className="about-para">
                  <p>
                    Find a diet that fits your lifestyle: Calorie Counting,
                    Low-Carb, Keto, Vegan, Vegetarian and more. pushpa pushpa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="left-about mt-5">
                <div className="text-center">
                  <img
                    src={aboutleftimg2}
                    alt=""
                    className="about-left-right-img"
                    srcset=""
                  />
                  <h2 className="left-right-heading1">
                    Log Your Meals & Exercise
                  </h2>
                </div>
                <div className="about-para mt-1">
                  <p>
                    Use the App to track your food, physical activities, and
                    nutrients. Use the barcode scanner. Log ahead of time for
                    better planning and scheduling.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-about mt-4">
                <div className="text-center mt-5">
                  <img
                    src={aboutrightimg2}
                    alt=""
                    className="about-left-right-img"
                    srcset=""
                  />
                  <h2 className="left-right-heading2">Reach Your Goals</h2>
                </div>
                <div className="about-para py-2">
                  <p>
                    Monitor your daily progress, check your weight loss
                    forecast, and receive ongoing advice and feedback. Learn
                    more about nutrients in your diet and make better choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="topreleated text-center">
            Top Rated Calorie Counter App
          </h1>
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="top-releted">
                <p>
                  “This is my favorite food diary app. I used six of the "top"
                  apps in this category for several days so that I could compare
                  them and select what worked best for me. MyNetDiary was the
                  winner. Intuitive, simple layout, decent database, appealing
                  graphic design, and no ads.”
                </p>
              </div>

              <div className="testimonial-btn text-center my-5">
                <a href="#" className="btn-tes">
                  See More Testimonials <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="foodplate-three">
                {" "}
                <img src={foopls31} alt="" className="img-fluid" srcset="" />
              </div>
              <div className="premium-about">
                <div className="text-center">
                  <h2 className="left-right-heading1 mt-5 my-4">
                    Premium Recipes
                  </h2>
                </div>
                <div className="premium-para">
                  <p>
                    Hundreds of easy recipes, with great variety, carefully
                    crafted for great taste by a team of Registered Dietitians.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="foodplate-three">
                {" "}
                <img src={foopls32} alt="" className="img-fluid" srcset="" />
              </div>
              <div className="premium-about">
                <div className="text-center">
                  <h2 className="left-right-heading1 mt-5 my-4">
                    Easy Tracking
                  </h2>
                </div>
                <div className="premium-para">
                  <p>
                    Massive food catalog, fastest barcode scanner, quickest food
                    lookup making food tracking a breeze
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="foodplate-three">
                {" "}
                <img src={foopls33} alt="" className="img-fluid" srcset="" />
              </div>
              <div className="premium-about">
                <div className="text-center">
                  <h2 className="left-right-heading1 mt-5 my-4">
                    Insights and Guidance
                  </h2>
                </div>
                <div className="premium-para">
                  <p>
                    Encouraging and supportive feedback, guiding you to your
                    goal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-btn text-center my-5">
            <a href="#" className="btn-tes">
              More Features <i class="bi bi-caret-right-fill"></i>
            </a>
          </div>
        </div>
      </section>

      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active p-0 m-0">
            <img src={slider1} class="d-block w-20" alt="..." width="648px" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Julie Martel</h5>
              <h2>
              LOST 71 LB (35%) AND MAINTAINED<br/> AFTER 492 DAYS.
              </h2>

              <br/>

              <span>  “My life changed. </span>
              <br/>
              <span> My life is beautiful!</span>
              <br/>
              <span> I am beautiful!!!”</span>

              <div className="testimonial-btn1 my-5">
                <a href="#" className="btn-tes">
                  Read Success Story <i class="bi bi-caret-right-fill"></i>
                </a>  
              </div>
            </div>
            <br/>  <br/>
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-20" alt="..." width="648px" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Carrie Hammond</h5>
              <h2>
              LOST AND MAINTAINED 103 LBS (40%) <br/>AFTER 616 DAYS.
              </h2>

              <br/>
              <span> “I love having a desire to go out and </span>
              <br/>
              <span>experience new things without worrying about</span>
              <br/>
              <span>if I'm too fat to do something.”</span>

              <div className="testimonial-btn1 my-5">
                <a href="#" className="btn-tes">
                  Read Success Story <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
            </div>
            <br/><br/>
          </div>
          <div class="carousel-item">
            <img src={slider3} class="d-block w-20" alt="..." width="648px" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Paul Reynolds</h5>
              <h2>
              LOST 50LB (22%) AND MAINTAINED <br/>AFTER 345 DAYS.
              </h2>

              <br/>
              <span> “The ability to track using MyNetDiary has </span>
              <br/>  
              <span> been so important.”</span>
              <br/>
             
              <div className="testimonial-btn1 my-5">
                <a href="#" className="btn-tes">
                  Read Success Story <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
            </div>
            <br/><br/>
          </div>

         
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



      <section>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="foodplate-three1">
                {" "}
                <img src={shadow2} alt="" className="img-fluid" srcset="" />
                <div className="premium-about1">
                <div className="text-center">
                  <h2 className="left-right-heading1 mt-5 my-4">
                    Premium Recipes
                  </h2>
                </div>
                <div className="premium-para">
                  <p>
                    Hundreds of easy recipes, with great variety, carefully
                    crafted for great taste by a team of Registered Dietitians.
                  </p>
                </div>
              </div>
              </div>
             
            </div>
            <div className="col-lg-6">
              <div className="foodplate-three1">
                {" "}
                <img src={shadow1} alt="" className="img-fluid" srcset="" />
                <div className="premium-about">
                <div className="text-center">
                  <h2 className="left-right-heading1 mt-5 my-4">
                    Easy Tracking
                  </h2>
                </div>
                <div className="premium-para">
                  <p>
                    Massive food catalog, fastest barcode scanner, quickest food
                    lookup making food tracking a breeze
                  </p>
                </div>
              </div>
              </div>
            
            </div>
          
          </div>


          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="foodplate-three1">
                {" "}
                <img src={shadow3} alt="" className="img-fluid" srcset="" />
                <div className="premium-about1">
                <div className="text-center">
                  <h2 className="left-right-heading1 mt-5 my-4">
                    Premium Recipes
                  </h2>
                </div>
                <div className="premium-para">
                  <p>
                    Hundreds of easy recipes, with great variety, carefully
                    crafted for great taste by a team of Registered Dietitians.
                  </p>
                </div>
              </div>
              </div>
             
            </div>
            <div className="col-lg-6">
              <div className="foodplate-three1">
                {" "}
                <img src={shadow4} alt="" className="img-fluid" srcset="" />
                <div className="premium-about">
                <div className="text-center">
                  <h2 className="left-right-heading1 mt-5 my-4">
                    Easy Tracking
                  </h2>
                </div>
                <div className="premium-para">
                  <p>
                    Massive food catalog, fastest barcode scanner, quickest food
                    lookup making food tracking a breeze
                  </p>
                </div>
              </div>
              </div>
            
            </div>
          
          </div>
          <div className="testimonial-btn text-center my-5">
            <a href="#" className="btn-tes">
              More Features <i class="bi bi-caret-right-fill"></i>
            </a>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Aboutsec;
