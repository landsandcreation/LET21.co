import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class SearchList extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let data = sectiondata.searchlist


    return <div className="search-page-wrap pd-top-100 pd-bottom-70">
        <div className="search-container">
          <div className="container">
            <div className="row justify-content-center">
            
              <div className="col-xl-8 col-lg-8">
                <div className="row mb-3">
                  <div className="col-md-9 col-sm-8">
                    <h6 className="filter-title mt-3 mb-lg-0">20 Properties</h6>
                  </div>
                
                </div>

                  { data.items.map( ( item, i )=>
                      <div key={ i } className="single-feature style-two">
                        <div className="thumb">
                           <img src={ publicUrl+item.image } alt="img" />
                        </div>
                        <div className="details">
                          <div className="details-wrap">
                            <a href="#" className="feature-logo">
                             <img src={ publicUrl+item.icon } alt={ imagealt } />
                            </a>
                           <p className="author"><i className="fa fa-user" /> { item.authorname }</p>
                               <h6 className="title readeal-top"><Link to={ item.url }>{ item.title }</Link></h6>
                            <h6 className="price">N35000/mo</h6><del>N79000/mo</del>
                            <ul className="info-list">
                              { item.features.map( ( features, i )=>
                                <li key={ i } ><i className={ features.icon } /> { features.title }</li>
                               ) }
                               <li><img src={publicUrl+"../assets/img/icons/7.png" } alt={ imagealt } /> { item.area }  </li>
                            </ul>
                            <ul className="contact-list">
                              <li><a className="phone" href="#"><i className="fa fa-phone" /></a></li>
                              <li><a className="message" href="#"><img src={ publicUrl+"/assets/img/icons/8.png" } alt="img" /></a></li>
                              <li className="readeal-top"><Link className="btn btn-yellow" to={ item.url } >View Details</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

              </div>
            </div>
          </div>
        </div>
      </div>
        }
}

export default SearchList