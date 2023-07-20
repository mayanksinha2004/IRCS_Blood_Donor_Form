import React from 'react'
import "./Page_6.css";
import { Link } from 'react-router-dom';
import Page_7 from './Page_7';

function Page_6 () {
  
  return (
    <div class="container6">

    <form>
        <div class="row">
            <h4>For Women Donors</h4>
            <div class="col-half1">
                <h4>Are You Pregnant?</h4> 
            </div>
            <div class="col-half">
                <div class="input-group">
                    <input id="Y1" type="radio" name="1" value="yes" />
                    <label for="Y1">Yes</label>
                    <input id="n1" type="radio" name="1" value="no" />
                    <label for="n1">No</label>
                </div>
            </div>
            <br></br>
            <div class="col-half1">
                <h4>Have you had abortion in last 3 months?</h4> 
            </div>
            <div class="col-half">
                <div class="input-group2">
                    <input id="Y2" type="radio" name="2" value="yes" />
                    <label for="Y2">Yes</label>
                    <input id="n2" type="radio" name="2" value="no" />
                    <label for="n2">No</label>
                </div>
            </div>
        
            <div class="col-half3">
                <h4>Do you have a child less than 1 year old?</h4> 
            </div>
            <div class="col-half4">
                <div class="input-group2">
                    <input id="Y3" type="radio" name="3" value="yes" />
                    <label for="Y3">Yes</label>
                    <input id="n3" type="radio" name="3" value="no" />
                    <label for="n3">No</label>
                </div>
            </div>
            <div class="col-half5">
                <h4>Is the child still breast feeding?</h4> 
            </div>
            <div class="col-half6">
                <div class="input-group2">
                    <input id="Y4" type="radio" name="4" value="yes" />
                    <label for="Y4">Yes</label>
                    <input id="n4" type="radio" name="4" value="no" />
                    <label for="n4">No</label>
                </div>
            </div>
            <div class="col-half7">
                <h4>Are You having Periods Today?</h4> 
            </div>
            <div class="col-half8">
                <div class="input-group2">
                    <input id="Y5" type="radio" name="5" value="yes" />
                    <label for="Y5">Yes</label>
                    <input id="n5" type="radio" name="5" value="no" />
                    <label for="n5">No</label>
                </div>
            </div>
        </div>
        <br></br>
        <Link to ="Page_7">
        <button className='button-6'>Next</button>
        </Link>
    </form>
</div>

  )
}



export default Page_6