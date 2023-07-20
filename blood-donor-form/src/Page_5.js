import React from 'react'
import "./Page_5.css";
import { Link } from 'react-router-dom';
import Page_6 from './Page_6';


function Page_5 () {
  
  return (
    <>
        <div class="check-group2">
         <h4>If you had any history</h4>
   <div className='left'>  
  <label for="myCheckbox01" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox01"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Typhoid (1 year)</span>
  </label>
  <label for="myCheckbox02" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox02"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Tubercolosis (2 years)</span>
  </label>
  <label for="myCheckbox03" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox03"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Malaria (3 months)</span>
  </label>
  <label for="myCheckbox04" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox04"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Zika infection (4 months after recovery) </span>
  </label>
  <label for="myCheckbox05" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox05"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Ear Piercing </span>
  </label>
  <label for="myCheckbox06" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox06"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Swollen Gland</span>
  </label>
  <label for="myCheckbox07" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox07"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Measels/Mumps/Chicken Pox (2 weeks) </span>
  </label>
  <label for="myCheckbox08" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox08"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Dengue (6 months)</span>
  </label>
  <label for="myCheckbox09" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox09"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Minor Surgery (6 months)</span>
  </label>
  <label for="myCheckbox10" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox10"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Asthematic Attack/on Medication</span>
  </label>
  </div>
  <div className='right'>
  <label for="myCheckbox11" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox11"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Unexplained weight loss</span>
  </label>
  <label for="myCheckbox12" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox12"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Major Surgery (1 years)</span>
  </label>
  <label for="myCheckbox13" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox13"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Unexplained weight loss</span>
  </label>
  <label for="myCheckbox14" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox14"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Repeated diarrhoea</span>
  </label>
  <label for="myCheckbox15" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox15"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Dental Extraction/Dental Surgery(after 6 months)</span>
  </label>
  <label for="myCheckbox16" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox16"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Continuous Low grade Fever</span>
  </label>
  <label for="myCheckbox17" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox17"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Travelled abroad in last 6 months </span>
  </label>
  <label for="myCheckbox18" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox18"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Blood Transfusion (1 year) </span>
  </label>
  <label for="myCheckbox19" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox19"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Tattooing (1 year) </span>
  </label>
  </div>
  <h4>Are you taking or have taken any of these in the past 24-72 hours</h4>
  <div className='left'>  
  <label for="myCheckbox20" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox20"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Antibitics/Steroids/any other medicine</span>
  </label>
  <label for="myCheckbox21" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox21"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Dog Bite/Rabies Vaccine (1 Year)</span>
  </label>
  <label for="myCheckbox22" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox22"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Vaccination - 14 days Covid Vaccination</span>
  </label>
  <label for="myCheckbox23" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox23"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Aspirin</span>
  </label>
  <label for="myCheckbox24" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox24"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">If BP normal with medication, is the BP medicine changed i last 28 days </span>
  </label>
  <label for="myCheckbox25" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox25"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Hepatitis B</span>
  </label>
  </div>
  <br></br>
  <Link to ="Page_6">
  <button className='button-5' href = "">Next</button>
  </Link>
</div>


</>



  )
}



export default Page_5