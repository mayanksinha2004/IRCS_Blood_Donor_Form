import React from 'react'
import "./Page_1.css";
import Page_2 from './Page_2';
import { Link } from 'react-router-dom';

import {Route, Switch } from "react-router-dom";




function Page_1 () {
  
  return (
    
    <div class="container1">

    <form>
        <div class="row">
            <h4> Welcome! 
              <br></br>
              Enter the following details to donate blood
            </h4>
            <div class="input-group input-group-icon"><input type="text" placeholder="Full Name" />
                <div class="input-icon"><i class="fa fa-user"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="text" placeholder="Father's Name/ Husband's Name" />
                <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="email" placeholder="Email Address" />
                <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
        </div>
        <div class="row">
            <div class="col-half">
                <h4>Date of Birth</h4>
                <div class="input-group">
                    <div class="col-third"><input type="text" placeholder="DD" /></div>
                    <div class="col-third"><input type="text" placeholder="MM" /></div>
                    <div class="col-third"><input type="text" placeholder="YYYY" /></div>
                </div>
            </div>
            <div class="col-half">
                <h4>Gender</h4>
                <div class="input-group"><input id="gender-male" type="radio" name="gender" value="male" /><label for="gender-male">Male</label><input id="gender-female" type="radio" name="gender" value="female" /><label for="gender-female">Female</label></div>
            </div>
        </div>
        <div class="input-group input-group-icon"><input type="text" placeholder="Nationality" />
                <div class="input-icon"><i class="fa fa-user"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="text" placeholder="Occupation" />
                <div class="input-icon"><i class="fa fa-envelope"></i></div>
            </div>
            <div class="input-group input-group-icon"><input type="email" placeholder="Address for Communication" />
                <div class="input-icon"><i class="fa fa-key"></i></div>
            </div>        
    </form>
    <Link to = "Page_2">
     <button className='button-1' href = "">Next</button>
    </Link>
</div>


  )
}



export default Page_1