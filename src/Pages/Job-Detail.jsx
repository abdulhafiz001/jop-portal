import HeaderComp from "../Components/Header.Comp";
import FooterComp from "../Components/Footer.Comp.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../Components/GeneralFunction.jsx";
import Cookies from "js-cookie";

const JobDetail =()=> {
let param = useParams();

const is_token_set = Cookies.get("token");

const [content, setContent] = useState({})
   
const FetchData =()=>{
    let url = 'http://solidrockschool.com.ng/api/job/info/'+param.id;
    axios.get(url, config).then(response =>{
        setContent(response.data.data[0])
    })
}

useEffect(()=>{
  FetchData()
      }, [])

  return (
    <div>
      <HeaderComp page="Details" />
      
      <section className="job-bg page job-details-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="job-list.html">Engineer/Architects</a>
              </li>
              <li>UI & UX Designer</li>
            </ol>
            <h2 className="title">Creative & Design</h2>
          </div>
          <div className="banner-form banner-form-full job-list-form">
            <form action="#" className="clearfix">
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Category</span>{" "}
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change">
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Software Engineer</a>
                  </li>
                  <li>
                    <a href="#">Program Development</a>
                  </li>
                  <li>
                    <a href="#">Project Manager</a>
                  </li>
                  <li>
                    <a href="#">Graphics Designer</a>
                  </li>
                </ul>
              </div>

              <div className="dropdown category-dropdown language-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">Job Location</span>{" "}
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change language-change">
                  <li>
                    <a href="#">Location 1</a>
                  </li>
                  <li>
                    <a href="#">Location 2</a>
                  </li>
                  <li>
                    <a href="#">Location 3</a>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Type your key word"
              />
              <button type="submit" className="btn btn-primary" value="Search">
                Search
              </button>
            </form>
          </div>
          <div className="job-details">
            <div className="section job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <img
                      src={content.image ? content.image : "https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-meant-by-Pvt-Ltd-company_-.jpg"}
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <span>
                      <a href="#" className="title">
                       {content.title}
                      </a>
                    </span>{" "}
                    @ <a href="#"> {content.company_name}</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          {content.location}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                          {content.employment_type}
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-money" aria-hidden="true"></i>
                        ${content.min_salary} - ${content.max_salary}
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>
                          {content.category}
                        </a>
                      </li>
                      <li>
                        <i
                          className="fa fa-hourglass-start"
                          aria-hidden="true"
                        ></i>
                        Application Deadline : {content.closing_date}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="social-media">
                <div className="button">
                  <a href="#" className="btn btn-primary">
                    <i className="fa fa-briefcase" aria-hidden="true"></i>Apply
                    For This Job
                  </a>
                  <a href="#" className="btn btn-primary bookmark" style={{display: !is_token_set ? "none" : ""}}>
                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                    Bookmark
                  </a>
                </div>
                <ul className="share-social">
                  <li>Share this ad</li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-facebook-official"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-twitter-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-google-plus-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-pinterest-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tumblr-square" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="job-details-info">
              <div className="row">
                <div className="col-sm-8">
                  <div className="section job-description">
                    <div className="description-info">
                      <h1>Description</h1>
                      <p dangerouslySetInnerHTML={{ __html: content.description }}></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="section job-short-info">
                    <h1>Short Info</h1>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="fa fa-bolt" aria-hidden="true"></i>
                        </span>
                        Posted: {content.created_at}
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </span>{" "}
                        Job poster: <a href="#">{content.created_by}</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-industry" aria-hidden="true"></i>
                        </span>
                        Industry: <a href="#">{content.category}</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i
                            className="fa fa-line-chart"
                            aria-hidden="true"
                          ></i>
                        </span>
                        Experience: <a href="#">{content.level}</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa fa-key" aria-hidden="true"></i>
                        </span>
                        Job function: {content.category}
                      </li>
                    </ul>
                  </div>
                  <div className="section company-info">
                    <h1>Company Info</h1>
                    <ul>
                      <li>
                        Compnay Name: <a href="#">{content.company_name}</a>
                      </li>
                      <li>Address: {content.address}</li>
                      <li>Compnay SIze: {content.fees} Employee</li>
                      <li>
                        Industry: <a href="#">{content.category}</a>
                      </li>
                      <li>Phone: {content.telephone}</li>
                      <li>
                        Email: {content.email}
                        <a href="#">
                          <span
                            className="__cf_email__"
                            data-cfemail="0960676f66496d7b66796b6671276a6664"
                          >
                            [email&#160;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        Website: <a href={content.website}>{content.website}</a>
                      </li>
                    </ul>
                    <ul className="share-social">
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-facebook-official"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-twitter-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-google-plus-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="something-sell" className="clearfix parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="title">
                Add your resume and let your next job find you.
              </h2>
              <h4>
                Post your Resume for free on <a href="#">Jobs.com</a>
              </h4>
              <a href="post-resume.html" className="btn btn-primary">
                Add Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterComp />
    </div>
  )
}

export default JobDetail;
