import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import Header from '../Header';

import Datepicker from '../actions/Datepicker';

import style from "./all.module.scss"



const Profileset = props =>{

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
          <div style={{ ...style, display: "flex" }}>
          <div style={{ ...style, marginRight: "40px" }}>
            <h6>First Name</h6>
            <input type="name" style={{ ...style, width: "340px", padding: "13px" }} placeholder="Enter your first name"/>
          </div>
          <div>
            <h6>Last Name</h6>
            <input type="name" style={{ ...style, width: "340px", padding: "13px" }} placeholder="Enter your last name"/>
          </div>
          </div>
          <div style={{ ...style, display: "flex" }}>
          <div style={{ ...style, marginRight: "40px" }}>
            <h6>Country Code</h6>
            <input type="number" style={{ ...style, width: "340px", padding: "13px" }} placeholder="Enter your Country Code"/>
          </div>
          <div>
            <h6>Phone Number</h6>
            <input type="number" style={{ ...style, width: "340px", padding: "13px" }} placeholder="Enter your Phone Number"/>
          </div>
          </div>
    <div>
    <h6>Email Address</h6>
            <input type="text" style={{ ...style, width: "700px", padding: "13px" }} placeholder="Enter your Phone Number"></input>
    </div>
    <br></br>
    <br></br>
          
          <div>
                    <h2>Upload a picture of yourself
                    </h2><br></br>
                    <input type="file"  style={{ ...style, width: "440px" }} placeholder="Upload Images"  />
                </div>
         
        </div>

          </div>
        </main>
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white"  style={{ ...style, width: "140px", background: "#fa5b05", marginLeft: "150px", marginBottom: "40px" }}>
                 
                 <span className="hidden xs:block ml-2">Submit</span>
             </button>
     
      </div>
    </div>
  );
}

Profileset.propTypes = {}
export default Profileset;