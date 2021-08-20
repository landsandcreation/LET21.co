import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';


import Datepicker from '../../partials/actions/Datepicker';
import style from "./all.module.scss";




const House = props =>{

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
                {/* Filter button */}
             
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
            
            <div className={style.House}>
              <div className={style.House__bet}>
          <div className={style.House__group}>
            <h6>Property Address</h6>
            <input type="name" placeholder="Enter your property address" style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }} />
          </div>
          <div className={style.House__group}>
            <h6>Property Type</h6>
            <input type="name" placeholder="Enter your property type" style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }}/>
          </div>
          <div className={style.House__group}>
            <h6>Number of Bedrooms</h6>
            <input type="number" placeholder="No of bedrooms" style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }}/>
          </div>
          <div className={style.House__group}>
            <h6>Number of Bathroom</h6>
            <input type="number" placeholder="No of bathrooms" style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }}/>
          </div>
          </div>
          <div className={style.House__bet}>
          <div className={style.House__group}>
            <h6>Where is your property located?</h6>
            <input type="name" placeholder="property location" style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }}/>
          </div>
          <div className={style.House__group}>
            <h6>state</h6>
            <input type="name" placeholder="Enter your state" style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }}/>
          <div className={style.House__group} >
            <h6>local govt</h6>
            <input type="name" placeholder="Enter your local govt" style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }}/>
          </div>
          </div>
       <div className={style.House__group}>
            <h6>street</h6>
            <input type="name" placeholder="Enter your street address" style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }}/>
          </div>
          <div className={style.House__group}>
            <h6>number</h6>
            <input type="number" placeholder="Enter your phone number"  style={{ ...style, padding: "10px", width: "100%", marginRight: "130px" }}/>
          </div>
          </div>

        </div>

          </div>
        </main>
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white"  style={{ ...style, width: "140px", marginLeft: "150px", background: "#fa5b05" }}>
                 
                    <span className="hidden xs:block ml-2">Submit</span>
                </button> 
     
      </div>
    </div>
  );
}

House.propTypes = {}
export default House;