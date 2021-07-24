import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import DashboardAvatars from '../../partials/dashboard/DashboardAvatars';
import FilterButton from '../../partials/actions/FilterButton';
import Datepicker from '../../partials/actions/Datepicker';





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
          <div>
            <h6>Property Address</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
          <div>
            <h6>Property Type</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
          <div>
            <h6>Number of Bedrooms</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
          <div>
            <h6>Number of Bathroom</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
          <div>
            <h6>Where is your property located?</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
          <div>
            <h6>state</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
          <div>
            <h6>local govt</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
          <div>
            <h6>street</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
          <div>
            <h6>number</h6>
            <input type="name" placeholder="Enter your firrst name"/>
          </div>
        
        </div>

          </div>
        </main>

     
      </div>
    </div>
  );
}

House.propTypes = {}
export default House;