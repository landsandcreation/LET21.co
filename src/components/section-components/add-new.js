import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class AddNew extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.aboutus


    return <div className="add-new-property-area pd-top-90 mg-bottom-100">
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
                      <h4><img src={publicUrl+"assets/img/icons/28.png" }alt="img" />House Information</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="section-title">
                      <h4>ilesa, ibeju lekki Apartments</h4>
                      
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                         <span>Property address</span>
                         <input type=""></input>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Bedrooms</option>
                            <option value={2}>Bedrooms 1</option>
                            <option value={3}>Bedrooms 2</option>
                            <option value={3}>Bedrooms 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Bathroom</option>
                            <option value={2}>Bedrooms 1</option>
                            <option value={3}>Bedrooms 2</option>
                            <option value={3}>Bedrooms 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Country</option>
                            <option value={2}>Bedrooms 1</option>
                            <option value={3}>Bedrooms 2</option>
                            <option value={3}>Bedrooms 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>State</option>
                            <option value={2}>Bedrooms 1</option>
                            <option value={3}>Bedrooms 2</option>
                            <option value={3}>Bedrooms 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Zip code</option>
                            <option value={2}>Bedrooms 1</option>
                            <option value={3}>Bedrooms 2</option>
                            <option value={3}>Bedrooms 3</option>
                          </select>
                        </div>
                      </div>
                 
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Interior Size</option>
                            <option value={2}>Interior Size 1</option>
                            <option value={3}>Interior Size 2</option>
                            <option value={3}>Interior Size 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Parking</option>
                            <option value={2}>Parking 1</option>
                            <option value={3}>Parking 2</option>
                            <option value={3}>Parking 3</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="row pd-top-80">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4><img src={publicUrl+"assets/img/icons/29.png"} alt="img" />Offer</h4>
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
                            <option value={1}>Add special offer to my place</option>
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
                      <h4><img src={publicUrl+"assets/img/icons/29.png"} alt="img" />Rules and Regulations</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="section-title">
                      <h4>Offer 15% off your first guest</h4>
                      <p>21LET has requirement that all guests must meet before they book<br></br><br></br>All 21let guests must provide (Email Address,
           Confirmed phone number and payment information )<br></br>before booking your home, each guest must:</p>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Suitable for children(2-12 years)</option>
                            <option value={2}>Yes</option>
                            <option value={3}>No</option>
                     
                          </select>
                        </div>
                      </div>
                
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Suitable for infants under 2 years</option>
                            <option value={2}>Yes</option>
                            <option value={3}>No</option>
                     
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Suitable for pets</option>
                            <option value={2}>Yes</option>
                            <option value={3}>No</option>
                     
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <div className="rld-single-select">
                          <select className="select single-select">
                            <option value={1}>Events allowed</option>
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
                          <textarea rows={10} placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
           </div>
                      </div>
                  
                  </div>
                </div>
          
                <div className="row pd-top-80">
                  <div className="col-md-4">
                    <div className="section-title">
                      <h4><img src={publicUrl+"assets/img/icons/31.png"} alt="img" />Amenities</h4>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i className="fa fa-check" /> Duvet</li>
                          <li><i className="fa fa-check" /> Swimming Pool</li>
                          <li><i className="fa fa-check" /> Gym</li>
                          <li><i className="fa fa-check" /> Basketball</li>
                          <li><i className="fa fa-check" /> Microwave</li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i className="fa fa-check" /> Refrigerator</li>
                          <li><i className="fa fa-check" /> Front Yard</li>
                          <li><i className="fa fa-check" /> Oven</li>
                          <li><i className="fa fa-check" /> Basketball</li>
                          <li><i className="fa fa-check" /> Television set</li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                          <li><i className="fa fa-check" /> Balcony</li>
                          <li><i className="fa fa-check" /> Car park</li>
                          <li><i className="fa fa-check" /> Deck</li>
                          <li><i className="fa fa-check" /> Indoor Game</li>
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

        }
}

export default AddNew