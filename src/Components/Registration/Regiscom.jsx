import React from 'react';
import './Regiscom.css';
import { Outlet, Link } from "react-router-dom";
import signlogo from '../assets/logo/logo-main.svg';
const Regiscom = () => {
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
          <h3 className='signup-heading py-4'>Sign Up: Your Weight plan</h3>
          <div className="lefform m-auto">
              <form action="#">
                <div className="form-floating mb-3">
                  <input type='text' name='' id="floatingInput" className='form-control' placeholder='enter your email' required='/'/>
                  <label for="floatingInput">How much do you weigh?</label>
                  </div>
                  <div className="form-floating mb-3">
                  <input type='text' name='' id="floatingInput" className='form-control' placeholder='enter your email'/>
                  <label for="floatingInput">What is your target weight?</label>
                  </div>
                  <div className="mb-3 mt-2"><label htmlFor="">Your desired progress</label></div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    <label class="form-check-label" for="flexRadioDefault1">
                    Lose 1 lb/week
                    </label>
                    </div>
                    <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                    Lose 1½ lb/week
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault3">
                    Lose 2 lbs/week
                    </label>
                    </div>



                    <div className="mb-3 mt-3"><label htmlFor="">Your Are</label></div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" checked/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Female
                    </label>
                    </div>
                    <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2"/>
                    <label class="form-check-label" for="flexRadioDefault2">
                    Male
                    </label>
                    </div>

                    <div className="form-floating mb-3">
                     <input type='date' name='' id="floatingInput" className='form-control' />
                      <label for="floatingInput">Date of Birth</label>
                  </div>
                  
                  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>How tall are you?</option>
                    <option value="36">3 ft 0 inch</option>
                    <option value="37">3 ft 1 inch</option>
                    <option value="38">3 ft 2 inch</option>
                    <option value="39">3 ft 3 inch</option>
                    <option value="40">3 ft 4 inch</option>
                    <option value="41">3 ft 5 inch</option>
                    <option value="42">3 ft 6 inch</option>
                    <option value="43">3 ft 7 inch</option>
                    <option value="44">3 ft 8 inch</option>
                    <option value="45">3 ft 9 inch</option>
                    <option value="46">3 ft 10 inch</option>
                    <option value="47">3 ft 11 inch</option>
                    <option value="48">4 ft 0 inch</option>
                    <option value="49">4 ft 1 inch</option>
                    <option value="50">4 ft 2 inch</option>
                    <option value="51">4 ft 3 inch</option>
                    <option value="52">4 ft 4 inch</option>
                    <option value="53">4 ft 5 inch</option>
                    <option value="54">4 ft 6 inch</option>
                    <option value="55">4 ft 7 inch</option>
                    <option value="56">4 ft 8 inch</option>
                    <option value="57">4 ft 9 inch</option>
                    <option value="58">4 ft 10 inch</option>
                    <option value="59">4 ft 11 inch</option>
                    <option value="60">5 ft 0 inch</option>
                    <option value="61">5 ft 1 inch</option>
                    <option value="62">5 ft 2 inch</option>
                    <option value="63">5 ft 3 inch</option>
                    <option value="64">5 ft 4 inch</option>
                    <option value="65">5 ft 5 inch</option>
                    <option value="66">5 ft 6 inch</option>
                    <option value="67">5 ft 7 inch</option>
                    <option value="68">5 ft 8 inch</option>
                    <option value="69">5 ft 9 inch</option>
                    <option value="70">5 ft 10 inch</option>
                    <option value="71">5 ft 11 inch</option>
                    <option value="72">6 ft 0 inch</option>
                    <option value="73">6 ft 1 inch</option>
                    <option value="74">6 ft 2 inch</option>
                    <option value="75">6 ft 3 inch</option>
                    <option value="76">6 ft 4 inch</option>
                    <option value="77">6 ft 5 inch</option>
                    <option value="78">6 ft 6 inch</option>
                    <option value="79">6 ft 7 inch</option>
                    <option value="80">6 ft 8 inch</option>
                    <option value="81">6 ft 9 inch</option>
                    <option value="82">6 ft 10 inch</option>
                    <option value="83">6 ft 11 inch</option>
                    <option value="84">7 ft 0 inch</option>
                    <option value="85">7 ft 1 inch</option>
                    <option value="86">7 ft 2 inch</option>
                    <option value="87">7 ft 3 inch</option>
                    <option value="88">7 ft 4 inch</option>
                    <option value="89">7 ft 5 inch</option>
                    <option value="90">7 ft 6 inch</option>
                    <option value="91">7 ft 7 inch</option>
                    <option value="92">7 ft 8 inch</option>
                    <option value="93">7 ft 9 inch</option>
                    <option value="94">7 ft 10 inch</option>
                    <option value="95">7 ft 11 inch</option>
                    <option value="96">8 ft 0 inch</option>
                    <option value="97">8 ft 1 inch</option>
                    <option value="98">8 ft 2 inch</option>
                    <option value="99">8 ft 3 inch</option>
                    <option value="100">8 ft 4 inch</option>
                    <option value="101">8 ft 5 inch</option>
                    <option value="102">8 ft 6 inch</option>
                    <option value="103">8 ft 7 inch</option>
                    <option value="104">8 ft 8 inch</option>
                    <option value="105">8 ft 9 inch</option>
                    <option value="106">8 ft 10 inch</option>
                    <option value="107">8 ft 11 inch</option>
                    </select>
                   
                 <div className="btn-signup">
                   <div className="btn2"><input type="button" className='button1' value="Submit" /></div>

                </div>

 

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
              </form>
            </div>
        </div>
      </div>
    </div>
   </div>

 </section>


      <div className="copyright-regis py-3 text-center">
        <div className="container-fluid">
            <div className="row">
               <div className="copyright-footer">By signing up, you are agree to the <a href="#">Terms of Service</a></div>
                </div>
            </div>
      </div>
      
  
 </>
  )
}

export default Regiscom;
