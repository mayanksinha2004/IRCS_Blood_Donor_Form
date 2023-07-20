import React from 'react'
import "./Page_4.css";
import { Link } from 'react-router-dom';
import Page_5 from './Page_5';


function Page_4 () {
  
  return (

        <div class="check-group1">
         <h4>Do you suffer from or sufferred from any of the following disease</h4>
   <div className='left'>  
  <label for="myCheckbox01" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox01"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Heart Disease</span>
  </label>
  <label for="myCheckbox02" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox02"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Lung Disease</span>
  </label>
  <label for="myCheckbox03" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox03"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Kidney Disease</span>
  </label>
  <label for="myCheckbox04" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox04"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Epilepsy</span>
  </label>
  <label for="myCheckbox05" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox05"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Polycythemia Vera</span>
  </label>
  <label for="myCheckbox06" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox06"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Leprosy</span>
  </label>
  <label for="myCheckbox07" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox07"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Hepatits B/C</span>
  </label>
  <label for="myCheckbox08" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox08"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Jaundice</span>
  </label>
  <label for="myCheckbox09" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox09"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Severe Allergeic Disorder</span>
  </label>
  <label for="myCheckbox10" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox10"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Diabetes on Insulin Dependent</span>
  </label>
  </div>
  <div className='right'>
  <label for="myCheckbox11" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox11"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Schizophrenia</span>
  </label>
  <label for="myCheckbox12" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox12"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Autoimmune disease</span>
  </label>
  <label for="myCheckbox13" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox13"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Cancer/Malignant Disease</span>
  </label>
  <label for="myCheckbox14" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox14"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Abnormal Bleeding Tendency</span>
  </label>
  <label for="myCheckbox15" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox15"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Sexually Transmitted Disease</span>
  </label>
  <label for="myCheckbox16" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox16"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Fainting Spells</span>
  </label>
  <label for="myCheckbox17" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox17"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Any Hormonal Disbalance</span>
  </label>
  </div>
  <br></br>
  <Link to = "Page_5">
  <button className='button-4' href = "">Next</button>
  </Link>
</div>






  )
}



export default Page_4