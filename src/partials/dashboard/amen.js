import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import DashboardAvatars from '../../partials/dashboard/DashboardAvatars';
import FilterButton from '../../partials/actions/FilterButton';
import Datepicker from '../../partials/actions/Datepicker';





const Amen = props =>{

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
            <h6>Essential Ammenities</h6>
            <label>Towels</label>
            <input type="checkbox" />
            <label>Bedsheets</label>
            <input type="checkbox" />
            <label>Duvet</label>
            <input type="checkbox" />
            <label>Soap</label>
            <input type="checkbox" />
            <label>Toilet Papers</label>
            <input type="checkbox" />
            <label>Pillow</label>
            <input type="checkbox" />
          </div>
       
          <div>
            <h6>Cooking Ammenities</h6>
            <label>Pots</label>
            <input type="checkbox" />
            <label>Pans</label>
            <input type="checkbox" />
            <label>Oil</label>
            <input type="checkbox" />
            <label>Salt</label>
            <input type="checkbox" />
            <label>Pepper</label>
            <input type="checkbox" />
           
          </div>
       
          <label>Chairs</label>
            <input type="checkbox" />
            <label>Table</label>
            <input type="checkbox" />
            <label>Iron</label>
            <input type="checkbox" />
            <label>Wifi</label>
            <input type="checkbox" />
            <label>Television</label>
            <input type="checkbox" />
            <label>Air Conditioning</label>
            <input type="checkbox" />
            <label>Hair Dryer</label>
            <input type="checkbox" />
            <label>GYM</label>
            <input type="checkbox" />
  
        </div>

          </div>
        </main>

     
      </div>
    </div>
  );
}

Amen.propTypes = {}
export default Amen;