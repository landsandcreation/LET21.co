import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
class PropertyDetails extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'


    return <div className="property-details-area">
      <div className="bg-gray pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row ">
            <div className="col-xl-9 col-lg-8">
              <div className="property-details-slider">
                <div className="item">
                  <div className="thumb">
                    <img src={ publicUrl+"../assets/img/news/b3.jfif"} alt={ imagealt }/>
                  </div>
                </div>
             
              </div>
              <div className="property-details-slider-info">
                <h3><span>$350/mo</span> Ibeju Lekki Apartments</h3>
                <del>$500</del>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="widget widget-owner-info mt-lg-0 mt-5">
                <div className="owner-info text-center">
                  <div className="thumb">
                    <img src={ publicUrl+"../assets/img/feature/i8.jpg"} alt={ imagealt } />
                  </div>
                  <div className="details">
                    <h6>Ibeju Lekki Apartment</h6>
                    <span className="designation">Building name</span>
                    <p className="reviews"><i className="fa fa-star" /><span>4.8</span> 70 Review</p>
                  </div>
                </div>
                <div className="contact">
                  <h6>N5000 x 2 nights</h6>
              <p>N10,078.00</p>
                
                </div>
                <div className="contact-info">
                  <h6 className="mb-3">Service fee</h6>
                  <p>N1,078.00</p>
              
                </div>
                <div className="contact-info">
                  <h6 className="mb-3">Total</h6>
                  <p>N11,078.00</p>
                  <Link to="/booking-details">  <a className="btn btn-yellow">Start Booking</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pd-top-90">
          <div className="col-lg-9">
            <div className="property-info mb-5">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="single-property-info">
                    <h5>Bedrooms</h5>
                    <p><i className="fa fa-bed" />04</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-property-info">
                    <h5>Bathrooms</h5>
                    <p><i className="fa fa-bath" />02</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-property-info">
                    <h5>Area</h5>
                    <p><img src={ publicUrl+"/assets/img/icons/7.png"}alt={ imagealt } />1,038 sq. ft.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-property-info">
                    <h5>Parking</h5>
                    <p><i className="fa fa-car" />01 Indoor</p>
                  </div>
                </div>
              </div>
            </div>
        
           
            <div className="property-news-single-card border-bottom-yellow">
              <h4>Amenities</h4>
              <div className="row">
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Oven</li>
                    <li><i className="fa fa-check" /> Television</li>
                    <li><i className="fa fa-check" /> Microwave</li>
                  
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Recreation</li>
                    <li><i className="fa fa-check" /> Front Yard</li>
                    <li><i className="fa fa-check" /> Wine Cellar</li>
                    <li><i className="fa fa-check" /> Basketball Cout</li>
                    <li><i className="fa fa-check" /> Fireplace</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Balcony</li>
                    <li><i className="fa fa-check" /> Pound</li>
                    <li><i className="fa fa-check" /> Deck</li>
                    <li><i className="fa fa-check" /> 24x7 Security</li>
                    <li><i className="fa fa-check" /> Indoor Game</li>
                  </ul>
                </div>
              </div>
            </div>
        
            <div className="property-news-single-card border-bottom-yellow pb-3">
              <h4>Facts and Features</h4>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <i className="fa fa-bed" />
                    </div>
                    <div className="media-body">
                      <h6>Living Room</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <i className="fa fa-car" />
                    </div>
                    <div className="media-body">
                      <h6>Garage</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <img src={ publicUrl+"/assets/img/icons/7.png"} alt={imagealt} />
                    </div>
                    <div className="media-body">
                      <h6>Dining Area</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
       
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <i className="fa fa-bed" />
                    </div>
                    <div className="media-body">
                      <h6>Bedroom</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                      <i className="fa fa-bath" />
                    </div>
                    <div className="media-body">
                      <h6>Bathroom</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-floor-list media">
                    <div className="media-left">
                       <img src={ publicUrl+"/assets/img/icons/17.png"} alt={imagealt} />
                    </div>
                    <div className="media-body">
                      <h6>Gym Area</h6>
                      <p>20 x 16 sq feet</p>
                    </div>
                  </div>
                </div>
         
              </div>
            </div>
            <div className="property-news-single-card border-bottom-yellow mb-0">
              <h4>3D Gallery</h4>
              <div className="thumb">
                <img src={ publicUrl+"/assets/img/others/11.png"}  alt={imagealt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




        }
}

export default PropertyDetails