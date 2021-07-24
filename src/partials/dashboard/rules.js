import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import DashboardAvatars from '../../partials/dashboard/DashboardAvatars';
import FilterButton from '../../partials/actions/FilterButton';
import Datepicker from '../../partials/actions/Datepicker';





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

              {/* Left: Avatars */}
              <DashboardAvatars />

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                
              </div>

            </div>

            {/* Cards */}
            
       <div>
           <h3> 21LET has requirement that all guests must meet before they book<br></br>All 21let guests must provide (Email Address,
           Confirmed phone number and payment information )<br></br>before booking your home, each guest must:
           <br></br>Agree with your house Rules<br></br>
           Message you about their coming<br></br>
           Confirm their check-in-time
           </h3>
           <div>
               <h2>suitable for children( 2 - 12 years )</h2>
               <label>Yes</label>
               <input type="checkbox" />
               <label>No</label>
               <input type="checkbox" />
           </div>
           <div>
               <h2>suitable for infants under 2 years</h2>
               <label>Yes</label>
               <input type="checkbox" />
               <label>No</label>
               <input type="checkbox" />
           </div>
           <div>
               <h2>suitable for Pets</h2>
               <label>Yes</label>
               <input type="checkbox" />
               <label>No</label>
               <input type="checkbox" />
           </div>
           <div>
               <h2>Events allowed</h2>
               <label>Yes</label>
               <input type="checkbox" />
               <label>No</label>
               <input type="checkbox" />
           </div>
           <div>
               <h2>Other details guest must know about your home.</h2>
               <textarea type="text"></textarea>
           </div>
</div>
       </div>

         
        </main>

     
      </div>
    </div>
  );
}

Rules.propTypes = {}
export default Rules;