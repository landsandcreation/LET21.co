import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import DashboardAvatars from '../../partials/dashboard/DashboardAvatars';
import FilterButton from '../../partials/actions/FilterButton';
import Datepicker from '../../partials/actions/Datepicker';





const View = props =>{

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
                <h2>THRILL YOUR GUEST WITH THE AMAZING PHOTO OF YOUR SPACE</h2>
                <image>Upload
                    <select>
                        <option selected="true" disabled="true">Delete</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </image>
                <div>
                    <h2>Describe your space to our guests(Mention any amenities like fast wifi or parking space or what your
                        like about the community)
                    </h2>
                    <input type="text" placeholder="Enter here..." />
                </div>
                <div>
                    <h1>Create a title for your property</h1>
                    <h2>Catch guests attention with a listing title that highlights what makes your place special)
                    </h2>
                    <input type="text" placeholder="Enter here..." />
                </div>
                <div>
                   
                    <h2>Add your photograph(will only be seen after visitors has made payment)
                    </h2>
                    <input type="text" placeholder="Enter here..." />
                </div>
                <div>
                    <label>Dont add any special offer to my place
                    </label>
                    <input type="checkbox" />
                </div>
                <button>Publish</button>
            </div>
        </div>

          </div>
        </main>

     
      </div>
    </div>
  );
}

View.propTypes = {}
export default View;