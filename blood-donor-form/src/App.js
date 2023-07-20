import React from 'react'

import Page_2 from './Page_2';
import Page_1 from './Page_1';
import Page_3 from './Page_3';
import Page_4 from './Page_4';
import Page_5 from './Page_5';
import Page_6 from './Page_6';
import Page_7 from './Page_7';

import {BrowserRouter, Route, Routes } from "react-router-dom";




function App () {
  
  return (
    
    
       <Routes>
        <Route path="/" element ={<Page_1 />} />
        <Route path="Page_2" element ={<Page_2 />} />
        <Route path="Page_2/Page_3" element ={<Page_3 />} />
        <Route path="Page_2/Page_3/Page_4" element ={<Page_4 />} />
        <Route path="Page_2/Page_3/Page_4/Page_5" element ={<Page_5 />} />
        <Route path="Page_2/Page_3/Page_4/Page_5/Page_6" element ={<Page_6 />} />
        <Route path="Page_2/Page_3/Page_4/Page_5/Page_6/Page_7" element ={<Page_7 />} />

       </Routes>



  )
}



export default App