import React from 'react'
import "./Page_3.css";
import { Link } from 'react-router-dom';
import Page_4 from './Page_4';


function Page_3 () {
  
  return (
    <>
    <div class="container3">

    <form>
        <div class="row">
            <div class="col-half1">
                <h4>Have You Donated Blood Previously?</h4> 
            </div>
            <div class="col-half">
                <div class="input-group"><input id="Y1" type="radio" name="1" value="yes" /><label for="Y1">Yes</label><input id="n1" type="radio" name="1" value="no" /><label for="n1">No</label></div>
            </div>
            <br></br>
            <div class="col-half1">
                <h4>Did You have any discomfort during/after donation?</h4> 
            </div>
            <div class="col-half">
                <div class="input-group2"><input id="Y2" type="radio" name="2" value="yes" /><label for="Y2">Yes</label><input id="n2" type="radio" name="2" value="no" /><label for="n2">No</label></div>
            </div>
        
            <div class="col-half3">
                <h4>Do you feel well today?</h4> 
            </div>
            <div class="col-half4">
                <div class="input-group2"><input id="Y3" type="radio" name="3" value="yes" /><label for="Y3">Yes</label><input id="n3" type="radio" name="3" value="no" /><label for="n3">No</label></div>
            </div>
            <div class="col-half5">
                <h4>Did you have something to eat in last 4 hours?</h4> 
            </div>
            <div class="col-half6">
                <div class="input-group2"><input id="Y4" type="radio" name="4" value="yes" /><label for="Y4">Yes</label><input id="n4" type="radio" name="4" value="no" /><label for="n4">No</label></div>
            </div>
            <div class="col-half7">
                <h4>Did you sleep well last night?</h4> 
            </div>
            <div class="col-half8">
                <div class="input-group2"><input id="Y5" type="radio" name="5" value="yes" /><label for="Y5">Yes</label><input id="n5" type="radio" name="5" value="no" /><label for="n5">No</label></div>
            </div>
            <div class="col-half9">
                <h4>Are you air crew member / long distance vehicle personel</h4> 
            </div>
            <div class="col-half10">
                <div class="input-group2"><input id="Y6" type="radio" name="6" value="yes" /><label for="Y6">Yes</label><input id="n6" type="radio" name="6" value="no" /><label for="n6">No</label></div>
            </div>
            <div class="col-half11">
                <h4>Did you have any acute respiratory problem?</h4> 
            </div>
            <div class="col-half12">
                <div class="input-group2"><input id="Y7" type="radio" name="7" value="yes" /><label for="Y7">Yes</label><input id="n7" type="radio" name="7" value="no" /><label for="n7">No</label></div>
            </div>
            <div class="col-half13">
                <h4>Have You any reason to believe that you may be infected by either, Hepatitis, Malaria, HIV/AIDS or Veneral disease </h4> 
            </div>
            <div class="col-half14">
                <div class="input-group2"><input id="Y8" type="radio" name="8" value="yes" /><label for="Y8">Yes</label><input id="n8" type="radio" name="8" value="no" /><label for="n8">No</label></div>
            </div>
            <div class="col-half15">
                <h4>Venipuneture site - Normal </h4> 
            </div>
            <div class="col-half16">
                <div class="input-group2"><input id="Y9" type="radio" name="9" value="yes" /><label for="Y9">Yes</label><input id="n9" type="radio" name="9" value="no" /><label for="n9">No</label></div>
            </div>
        </div>
        <br></br>
        <Link to ="Page_4">
        <button className='button-3' href = "">Next</button>
        </Link>
    </form>
</div>
</>
  )
}



export default Page_3