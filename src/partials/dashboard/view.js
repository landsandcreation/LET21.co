import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';


import Datepicker from '../../partials/actions/Datepicker';

import style from "./all.module.scss";



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

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white"  style={{ ...style, background: "#fa5b05"}}>
                    <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Edit</span>
                </button>                
              </div>

            </div>

            {/* Cards */}
            
        <div>

            <div >
                
           
                <div style={{ ...style, marginBottom: "40px" }}>
                    <h2>THRILL YOUR GUEST WITH AMAZING PHOTO OF YOUR SPACE
                    </h2>
                    <input type="file"  style={{ ...style, width: "440px" }} placeholder="Upload Images"  />
                </div>
                <div style={{ ...style, marginBottom: "40px" }}>
                    <h2>Describe your space to our guests(Mention any amenities like <br></br>fast wifi or parking space or what your
                        like about the community)
                    </h2>
                    <input type="text"  style={{ ...style, width: "440px" }} placeholder="Enter here..."  />
                </div>
                
                <div style={{ ...style, marginBottom: "40px" }}>
                    <h1>Create a title for your property</h1>
                    <input type="text" style={{ ...style, width: "440px", marginBottom: "40px" }} placeholder="Enter here..."  />
                    <h2>Catch guests attention with a listing title that highlights what <br></br> makes your place special)
                    </h2>
                    <input type="text" style={{ ...style, width: "440px" }} placeholder="Enter here..." />
                </div>
                <div style={{ ...style, marginBottom: "40px" }}>
                   
                    <h2>Add your photograph(will only be seen after visitors has <br></br> made payment)
                    </h2>
                    <input type="file" placeholder="Upload Image" style={{ ...style, width: "440px" }} />
                </div>
                <div>
                    <label>Dont add any special offer to my place
                    </label>
                    <input type="checkbox" />
                </div>
              
            </div>
        </div>

          </div>
        </main>
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white"  style={{ ...style, width: "140px", background: "#fa5b05", marginLeft: "150px", marginBottom: "100px" }}>
                 
                 <span className="hidden xs:block ml-2">Submit</span>
             </button>
     
      </div>
    </div>
  );
}

View.propTypes = {}
export default View;