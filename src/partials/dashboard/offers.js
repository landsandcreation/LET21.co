import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import Datepicker from '../../partials/actions/Datepicker';



import style from "./all.module.scss"

const Offers = props =>{

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
            
        <div>

            <div>
                <h2  style={{ ...style, fontSize: "25px", marginBottom: "40px"}} >Offer 15% off to your first guest</h2>
                <div>
                    <label>The first three who books your place gets 20% off the nightly price. This special offer<br></br> can help you
                        attract new guests and help you get 3 reviews you will need for your star rating
                    </label>
                </div>
         
                <div><br></br><br></br>
            <h6>Add Special Offer to my place</h6><br></br>
            
            <label  style={{ ...style, fontSize: "15px", marginRight: "30px" }}>Yes</label>
            <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />
            
            <label  style={{ ...style, fontSize: "15px", marginRight: "30px" }}>No</label>
            <input type="checkbox" style={{ ...style, width: "100", padding: "15px", marginRight: "30px" }} />
         
          </div>
            
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

Offers.propTypes = {}
export default Offers;