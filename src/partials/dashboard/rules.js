import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import Datepicker from '../../partials/actions/Datepicker';



import style from "./all.module.scss";

const Rules = props =>{

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">


              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
             
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" style={{ ...style, background: "#fa5b05"}}>
                    <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2" >Edit</span>
                </button>                
              </div>

            </div>

            {/* Cards */}
            
       <div>
           <h3> 21LET has requirement that all guests must meet before they book<br></br><br></br>All 21let guests must provide (Email Address,
           Confirmed phone number and payment information )<br></br>before booking your home, each guest must:
           <br></br><br></br>1. Agree with your house Rules<br></br><br></br>
           2. Message you about their coming<br></br><br></br>
          3.  Confirm their check-in-time<br></br><br></br>
           </h3>
           <div>
            
            <label  style={{ ...style, fontSize: "20px", marginRight: "30px" }}>Suitable for children(2-12 years)</label>
          <labe>Yes</labe>  <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />
          <label>No</label>  <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />     
          </div>
          <br></br>
           <div>
            
            <label  style={{ ...style, fontSize: "20px", marginRight: "30px" }}>Suitable for infants under 2 years</label>
          <labe>Yes</labe>  <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />
          <label>No</label>  <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />     
          </div>
          <br></br>
           <div>
            
            <label  style={{ ...style, fontSize: "20px", marginRight: "30px" }}>Suitable for Pets</label>
          <labe>Yes</labe>  <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />
          <label>No</label>  <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />     
          </div>
          <br></br>
           <div>
            
            <label  style={{ ...style, fontSize: "20px", marginRight: "30px" }}>Events allowed</label>
          <labe>Yes</labe>  <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />
          <label>No</label>  <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />     
          </div>
            <br></br>
  
    
      
           <div>
               <h2>Other details guest must know about your home.</h2>
               <textarea type="text"  style={{ ...style, width: "500px" }}></textarea>
           </div>
</div>
       </div>

         
        </main>
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white"  style={{ ...style, width: "140px", background: "#fa5b05", marginLeft: "150px", marginBottom: "50px" }}>
                 
                 <span className="hidden xs:block ml-2">Submit</span>
             </button> 
     
      </div>
    </div>
  );
}

Rules.propTypes = {}
export default Rules;