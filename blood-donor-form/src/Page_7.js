import "./Page_7.css";
import React, {useState} from 'react';
import ReactSignatureCanvas from 'react-signature-canvas';

function App () {
  const [sign, setSign] = useState();
  const [url, seturl] = useState();

  const handleClear= () =>{
        sign.clear();
        seturl('');
  }

  const handleGenerate= () =>{
        seturl(sign.getTrimmedCanvas().toDataURL('image/png'));
  }

  console.log(sign);
  console.log(url);
  
  return (
    <div class="container_7" id='qwe'>

    <form>
        <div class="row">
            <div class="col-half1">
                <h4>Would you liked to be informed about any abnormal test result at the address furnished by you</h4> 
            </div>
            <div class="col-half">
                <div class="input-group">
                    <input id="Y1" type="radio" name="1" value="yes" />
                    <label for="Y1">Yes</label>
                    <input id="n1" type="radio" name="1" value="no" />
                    <label for="n1">No</label>
                </div>
            </div>
        </div>
        <h4>Information Related to Covid-19 Infection</h4>
        <div class="row">
            <div class="col-half_3">
                <h4>Travel history in last 3 months</h4> 
            </div>
            <div class="col-half">
                <div class="input-group">
                    <input id="Y2" type="radio" name="2" value="yes" />
                    <label for="Y2">Yes</label>
                    <input id="n2" type="radio" name="2" value="no" />
                    <label for="n2">No</label>
                </div>
            </div>
            <div class="col-half_5">
                <h4>Sign & Symptomps of Fever, Cold & Cough to last one month</h4> 
            </div>
            <div class="col-half">
                <div class="input-group">
                    <input id="Y3" type="radio" name="3" value="yes" />
                    <label for="Y3">Yes</label>
                    <input id="n3" type="radio" name="3" value="no" />
                    <label for="n3">No</label>
                </div>
            </div>
            <div class="col-half_7">
                <h4>History of infection or Quarntined in family members, friends, collegue, neighbour</h4> 
            </div>
            <div class="col-half">
                <div class="input-group">
                    <input id="Y4" type="radio" name="4" value="yes" />
                    <label for="Y4">Yes</label>
                    <input id="n4" type="radio" name="4" value="no" />
                    <label for="n4">No</label>
                </div>
            </div>
        </div>
        <h4>Prefered Donation Frequency</h4>
        <div className='spacer'>  
        <label for="myCheckbox01" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox01"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Every 3 Months</span>
  </label>
  <label for="myCheckbox02" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox02"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Every 6 Months</span>
  </label>
  <label for="myCheckbox03" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox03"></input>
    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      <path class="tick" stroke="#6EA340" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label">Once in a year</span>
  </label> 
  </div>
   <br></br>
        <div class="row">
         <a href=' '><h4>Terms and Conditions</h4></a>
         <div class="input-group">
          <input id="terms" type="checkbox"/>
           <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
         </div>
        </div>
        <br></br>
        <div style = {{border: "2px solid black", width: 380, height: 200}}>
        <ReactSignatureCanvas ref={data=>setSign(data)}>

        </ReactSignatureCanvas>
        </div>
        <br></br>
        <div className="Sign_button">
        <button className='clear' onClick={handleClear}>Clear</button>
        <br></br>
        <br></br>
        <button className='save' onClick= {handleGenerate}>Save</button>
        </div>
        <button className='button-7' >Submit</button>
        <img src={url}></img>
    </form>
</div>

  )
}



export default App