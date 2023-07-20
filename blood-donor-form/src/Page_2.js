import React from 'react'
import "./Page_2.css";
import { Link, Routes, Route } from 'react-router-dom';
import Page_1 from './Page_1';

function Page_2 () {
  
  return (
    <>
    <div class="container2" id='page2'>

    <form>
        <div class="row">
            <h4>
              Please Provide your Address Details
            </h4>
            <div class="input-group input-group-icon"><input type="text" placeholder="Address" />
                <div class="input-icon"><i class="fa fa-user"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="text" placeholder="District" />
                <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="email" placeholder="State" />
                <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="email" placeholder="PIN CODE" />
                <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="email" placeholder="Mobile NO" />
                <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
            <h4>
              Please Provide your BMI Details
            </h4>
            <div class="input-group input-group-icon"><input type="text" placeholder="Height in meteres" />
                <div class="input-icon"><i class="fa fa-user"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="text" placeholder="Weight in kilo" />
                <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
        </div>    
        <Link to = "Page_3">
        <button className='button-2' href = "">Next</button>
        </Link> 
    </form>
</div>
</>

  )
}



export default Page_2