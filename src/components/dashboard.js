import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import FaqSection from './section-components/faq';
import Footer from './global-components/footer';

const Dashboard = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Dashboard" />
        <div className="add-new-property-area pd-top-90 mg-bottom-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-10">
                <div className="section-title text-center">
                  <h3>Add New Property</h3>
                </div>
                <div className="border-bottom mb-4">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-intro style-two text-center">
                        <div className="thumb">
                          1
                        </div>
                        <div className="details">
                          <h4 className="title">Choose Listing</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-intro style-two text-center">
                        <div className="thumb">
                          2
                        </div>
                        <div className="details">
                          <h4 className="title">Add Information</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-intro style-two text-center">
                        <div className="thumb">
                          3
                        </div>
                        <div className="details">
                          <h4 className="title">Publish</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
                <div className="row pd-top-100">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4>House Information</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="section-title">
                      <h4>ilesa, ibeju lekki Apartments</h4>
                      
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Property address(Street and number)<br></br></span>
                         <textarea type="" placeholder="Enter your address"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Property type<br></br></span>
                         <textarea type="" placeholder="type"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1} disabled="true" selected="true">No of Bedrooms</option>
                            <option value={2}>1</option>
                            <option value={3}>2</option>
                            <option value={3}>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1} disabled="true" selected="true">No of Bathroom</option>
                            <option value={2}>1</option>
                            <option value={3}>2</option>
                            <option value={3}>3</option>
                          </select>
                        </div>
                      </div>
                   
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1} disabled="true" selected="true">LGA</option>
                            <option value={2}>Ikeja</option>
                            <option value={3}>Ibeju Lekki</option>
                            <option value={3}>Ajah</option>
                          </select>
                        </div>
                      </div>
                
                    </div>
                  </div>
                </div>
                <div className="row pd-top-100">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4>Owner Information</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                 
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>First Name<br></br></span>
                         <input type="" placeholder="Enter your first name"></input>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Last Name<br></br></span>
                         <input type="" placeholder="Enter your last name"></input>
                        </div>
                      </div>
                 
                 
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Email<br></br></span>
                         <input type="text" placeholder="Enter your email address"></input>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Price<br></br></span>
                         <input type="number" placeholder="amount"></input>
                        </div>
                      </div>
                
                    </div>
                  </div>
                </div>
             
              
                <div className="row pd-top-80">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4>Offer</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="section-title">
                      <h4>Offer 15% off your first guest</h4>
                      <p>The first three who books your place gets 20% off the nightly price. This special offer<br></br> can help you
                        attract new guests and help you get 3 reviews you will need for your star rating</p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1} disabled="true" selected="true">Add special offer </option>
                            <option value={2}>Yes</option>
                            <option value={3}>No</option>
                     
                          </select>
                        </div>
                      </div>
                   
                      </div>
                  
                  </div>
                </div>
                <div className="row pd-top-80">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4>Rules and Regulations</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="section-title">
                      
                      <p>21LET has rules that all guests must meet before they book<br></br></p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1} disabled="true" selected="true">Suitable for Kids</option>
                            <option value={2}>Yes</option>
                            <option value={3}>No</option>
                     
                          </select>
                        </div>
                      </div>
                
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1} disabled="true" selected="true">Suitable for pets</option>
                            <option value={2}>Yes</option>
                            <option value={3}>No</option>
                     
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1} disabled="true" selected="true">Events allowed</option>
                            <option value={2}>Yes</option>
                            <option value={3}>No</option>
                     
                          </select>
                        </div>
                      </div>
                      <div>
                      <div className="section-title">
                      <p>Other details guest must know about you</p>
                    </div>
               <div className="col-12 mb-2">
                        <div className="rld-single-input">
                          <textarea rows={10} placeholder="Enter other details" defaultValue={""} />
                        </div>
                      </div>
           </div>
                      </div>
                  
                  </div>
                </div>
                <div className="row pd-top-100">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4>Bank Details</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                  
                    <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>First Name(must be the name of the bank account)</span>
                         <input type="" placeholder="Enter your first name"></input>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Last Name(must be the name of the bank account)</span>
                         <input type="" placeholder="Enter your last name"></input>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Account Number</span>
                         <input type="" placeholder="Enter your account no"></input>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Account Name</span>
                         <input type="" placeholder="Enter your account name"></input>
                        </div>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                      <span>Bank Name</span>
                      <input type="text" placeholder="Enter your bank name"></input>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                </div>
                <div className="row pd-top-80">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4>Amenities</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i type="checkbox" /> Duvet</li>
                          <li><i type="checkbox" /> Swimming Pool</li>
                          <li><i type="checkbox" /> Gym</li>
                          <li><i type="checkbox" /> Basketball</li>
                          <li><i type="checkbox" /> Microwave</li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i type="checkbox" /> Refrigerator</li>
                          <li><i type="checkbox" /> Front Yard</li>
                          <li><i type="checkbox" /> Oven</li>
                          <li><i type="checkbox" /> Basketball</li>
                          <li><i type="checkbox" /> Television set</li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i type="checkbox" /> Balcony</li>
                          <li><i type="checkbox" /> Car park</li>
                          <li><i type="checkbox" /> Deck</li>
                          <li><i type="checkbox" /> Indoor Game</li>
                        </ul>
                      </div>
                      <div className="col-12 mt-5">
                        <a className="btn btn-yellow" href="#">Publish property</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
}

export default Dashboard

