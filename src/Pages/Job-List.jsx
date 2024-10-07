import { useState, useEffect } from "react";
import axios from "axios";
import Fuse from "fuse.js";

import HeaderComp from "../Components/Header.Comp";
import FooterComp from "../Components/Footer.Comp.jsx";
import Banner from "../Components/Banner.jsx";
import JobListCard from "../Components/JobListCard.jsx";
import { config, jobdata } from "../Components/GeneralFunction";

function JobLists() {
  const [content, setContent] = useState([]);
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const searchJob = (text) => {
    if(!text){
      setSearch("");
      setContent(jobs);
      return;
    }
    const fuse = new Fuse(jobs, { 
      keys: ["title"],
      location: 0,
      threshold: 0.1,
      distance: 10,
      // includeScore: true,
      // includeMatches: true,
    });
    console.log(fuse.search(text), "search");
    setContent(fuse.search(text));
  };

  const formatContent = (contentList)=>{
    let formattedContent = []
    for(let i in contentList){
      formattedContent.push({item: {...contentList[i]}})
    }
    return formattedContent;
  }

  const FetchData = async () => {
    let url = "http://solidrockschool.com.ng/api/job/index";
    await axios.get(url, config).then((response) => {
      setContent(response.data.data);
      setContent(formatContent(response.data.data));
      setJobs(response.data.data);
      // let formattedContent = []
      // for(let i in response.data.data){
      //   formattedContent.push({item: {...response.data.data[i]}})
      // }
    }).then(()=>{
      //console.log(jobs, "jobs");
    })
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      <HeaderComp page="JobList" />

      <section className="job-bg page job-list-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Engineer/Architects</li>
            </ol>
            <h2 className="title">Software Engineer</h2>
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
                value={search}
                onChange={handleChange}
              />
              <button
              disabled={content.length == 0}
                type="submit"
                className="btn btn-primary"
                value="Search"
                onClick={() => searchJob(search)}
              >
                Search
              </button>
            </form>
          </div>
          <div className="category-info">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="accordion">
                  <div className="panel-group" id="tr-accordion">
                    <div className="card panel-faq">
                      <div className="card-header">
                        <button
                          data-toggle="collapse"
                          data-target="#accordion-one"
                          aria-expanded="true"
                          aria-controls="accordion-one"
                        >
                          Categories
                        </button>
                      </div>
                      <div
                        id="accordion-one"
                        className="collapse show"
                        data-parent="#tr-accordion"
                      >
                        <div className="panel-body">
                          <h5>
                            <a href="#">
                              <i className="fa fa-caret-down"></i> All
                              Categories
                            </a>
                          </h5>
                          <a href="#">
                            <i className="icofont icofont-man-in-glasses"></i>
                            Engineer/Architects
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Software <span>(129)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Architecture <span>(8342)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                UI & UX Designer <span>(782)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Telecommunication <span>(5247)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Civil Engineer <span>(634)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Chemical Engineer <span>(453)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Program Development <span>(7986)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Mechanical Engineer <span>(742)</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Industrial Engineer <span>(149)</span>
                              </a>
                            </li>
                          </ul>
                          <div className="see-more">
                            <button type="button" className="show-more one">
                              <i
                                className="fa fa-plus-square-o"
                                aria-hidden="true"
                              ></i>
                              See More
                            </button>
                            <ul className="more-category one">
                              <li>
                                <a href="#">
                                  Fron end developer<span>(289)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Back end developer<span>(5402)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  IT Department Manager<span>(3829)</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  QA Department Manager<span>(352)</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card panel-faq">
                      <div className="card-header">
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-two"
                          aria-expanded="true"
                          aria-controls="accordion-two"
                        >
                          Date Posted
                        </button>
                      </div>
                      <div
                        id="accordion-two"
                        className="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div className="panel-body">
                          <label for="today">Today</label>
                          <input type="checkbox" name="today" id="today" />{" "}
                          <label for="7-days">7 days</label>
                          <input
                            type="checkbox"
                            name="7-days"
                            id="7-days"
                          />{" "}
                          <label for="30-days">30 days</label>
                          <input
                            type="checkbox"
                            name="30-days"
                            id="30-days"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="card  panel-faq">
                      <div className="card-header">
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-three"
                          aria-expanded="true"
                          aria-controls="accordion-three"
                        >
                          Salary Range
                        </button>
                      </div>
                      <div
                        id="accordion-three"
                        className="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div className="panel-body">
                          <div className="price-range">
                            <div className="price">
                              <span>
                                $100 - <strong>$700</strong>
                              </span>
                              <div className="dropdown category-dropdown pull-right">
                                <a data-toggle="dropdown" href="#">
                                  <span className="change-text">USD</span>
                                  <i className="fa fa-caret-square-o-down"></i>
                                </a>
                                <ul className="dropdown-menu category-change">
                                  <li>
                                    <a href="#">USD</a>
                                  </li>
                                  <li>
                                    <a href="#">AUD</a>
                                  </li>
                                  <li>
                                    <a href="#">EUR</a>
                                  </li>
                                  <li>
                                    <a href="#">GBP</a>
                                  </li>
                                  <li>
                                    <a href="#">JPY</a>
                                  </li>
                                </ul>
                              </div>
                              <input
                                type="text"
                                value
                                data-slider-min="0"
                                data-slider-max="700"
                                data-slider-step="5"
                                data-slider-value="[250,450]"
                                id="price"
                              />
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card panel-faq">
                      <div className="card-header">
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-four"
                          aria-expanded="true"
                          aria-controls="accordion-four"
                        >
                          Employment Type
                        </button>
                      </div>
                      <div
                        id="accordion-four"
                        className="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div className="panel-body">
                          <label for="full-time">Full Time</label>
                          <input
                            type="checkbox"
                            name="full-time"
                            id="full-time"
                          />{" "}
                          <label for="part-time">Part Time</label>
                          <input
                            type="checkbox"
                            name="part-time"
                            id="part-time"
                          />{" "}
                          <label for="contractor">Contractor</label>
                          <input
                            type="checkbox"
                            name="contractor"
                            id="contractor"
                          />{" "}
                          <label for="intern">Intern</label>
                          <input
                            type="checkbox"
                            name="intern"
                            id="intern"
                          />{" "}
                          <label for="seasonal">Seasonal / Temp</label>
                          <input
                            type="checkbox"
                            name="seasonal"
                            id="seasonal"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="card panel-faq">
                      <div className="card-header">
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-five"
                          aria-expanded="true"
                          aria-controls="accordion-five"
                        >
                          Experience Level
                        </button>
                      </div>
                      <div
                        id="accordion-five"
                        className="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div className="panel-body">
                          <label for="training">Training</label>
                          <input
                            type="checkbox"
                            name="training"
                            id="training"
                          />{" "}
                          <label for="entry-level">Entry Level</label>
                          <input
                            type="checkbox"
                            name="entry-level"
                            id="entry-level"
                          />{" "}
                          <label for="mid-senior">Mid-Senior Level</label>
                          <input
                            type="checkbox"
                            name="mid-senior"
                            id="mid-senior"
                          />{" "}
                          <label for="top-level">Top Level</label>
                          <input
                            type="checkbox"
                            name="top-level"
                            id="top-level"
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="card panel-faq">
                      <div className="card-header">
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-six"
                          aria-expanded="true"
                          aria-controls="accordion-six"
                        >
                          Company
                        </button>
                      </div>
                      <div
                        id="accordion-six"
                        className="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div className="panel-body">
                          <input
                            type="text"
                            placeholder="Search Company"
                            className="form-control"
                          />
                          <label for="apple">Apple</label>
                          <input type="checkbox" name="apple" id="apple" />{" "}
                          <label for="dropbox">Dropbox</label>
                          <input
                            type="checkbox"
                            name="dropbox"
                            id="dropbox"
                          />{" "}
                          <label for="micromax">Micromax</label>
                          <input
                            type="checkbox"
                            name="micromax"
                            id="micromax"
                          />{" "}
                          <label for="nokia">Nokia</label>
                          <input type="checkbox" name="nokia" id="nokia" />{" "}
                          <label for="microsoft">Microsoft</label>
                          <input
                            type="checkbox"
                            name="microsoft"
                            id="microsoft"
                          />{" "}
                          <label for="samsung">Samsung</label>
                          <input
                            type="checkbox"
                            name="samsung"
                            id="samsung"
                          />{" "}
                          <div className="see-more">
                            <button type="button" className="show-more two">
                              <i
                                className="fa fa-plus-square-o"
                                aria-hidden="true"
                              ></i>
                              See More
                            </button>
                            <div className="more-category two">
                              <label for="blackBerry">BlackBerry</label>
                              <input
                                type="checkbox"
                                name="blackBerry"
                                id="blackBerry"
                              />
                              <label for="motorola">Motorola</label>
                              <input
                                type="checkbox"
                                name="motorola"
                                id="motorola"
                              />
                              <label for="lenovo">Lenovo</label>
                              <input
                                type="checkbox"
                                name="lenovo"
                                id="lenovo"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card panel-faq">
                      <div className="card-header">
                        <button
                          className="collapsed"
                          data-toggle="collapse"
                          data-target="#accordion-seven"
                          aria-expanded="true"
                          aria-controls="accordion-seven"
                        >
                          Location
                        </button>
                      </div>
                      <div
                        id="accordion-seven"
                        className="collapse"
                        data-parent="#tr-accordion"
                      >
                        <div className="panel-body">
                          <input
                            type="text"
                            placeholder="Search Location"
                            className="form-control"
                          />
                          <label for="angeles">Los Angeles, CA</label>
                          <input
                            type="checkbox"
                            name="angeles"
                            id="angeles"
                          />{" "}
                          <label for="kingdom">United Kingdom</label>
                          <input
                            type="checkbox"
                            name="kingdom"
                            id="kingdom"
                          />{" "}
                          <label for="states">United States</label>
                          <input
                            type="checkbox"
                            name="states"
                            id="states"
                          />{" "}
                          <label for="columbia">British Columbia</label>
                          <input
                            type="checkbox"
                            name="columbia"
                            id="columbia"
                          />{" "}
                          <label for="australia">Australia</label>
                          <input
                            type="checkbox"
                            name="australia"
                            id="australia"
                          />{" "}
                          <label for="germany">Germany</label>
                          <input
                            type="checkbox"
                            name="germany"
                            id="germany"
                          />{" "}
                          <div className="see-more">
                            <button type="button" className="show-more three">
                              <i
                                className="fa fa-plus-square-o"
                                aria-hidden="true"
                              ></i>
                              See More
                            </button>
                            <div className="more-category three">
                              <label for="belgium">Belgium</label>
                              <input
                                type="checkbox"
                                name="belgium"
                                id="belgium"
                              />
                              <label for="brazil">Brazil</label>
                              <input
                                type="checkbox"
                                name="brazil"
                                id="brazil"
                              />
                              <label for="denmark">Denmark</label>
                              <input
                                type="checkbox"
                                name="denmark"
                                id="denmark"
                              />
                              <label for="indonesia">Indonesia</label>
                              <input
                                type="checkbox"
                                name="indonesia"
                                id="indonesia"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 col-lg-7">
                <div className="section job-list-item">
                  <div className="featured-top clearfix">
                    <h4>Showing 1-25 of 65,712 ads</h4>
                    <div className="dropdown pull-right">
                      <div className="dropdown category-dropdown">
                        <h5>Sort by:</h5>
                        <a data-toggle="dropdown" href="#">
                          <span className="change-text">Most Relevant</span>
                          <i className="fa fa-caret-square-o-down"></i>
                        </a>
                        <ul className="dropdown-menu category-change">
                          <li>
                            <a href="#">Most Relevant</a>
                          </li>
                          <li>
                            <a href="#">Most Popular</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {content &&
                    content.map((list, id) => (
                      <JobListCard
                        image={list?.item?.image ? list?.item?.image : "https://vakilsearch.com/blog/wp-content/uploads/2022/06/What-is-meant-by-Pvt-Ltd-company_-.jpg"}
                        title={list.item.title}
                        company={list.item.company_name}
                        address={list.item.location}
                        max_salary={list.item.max_salary}
                        min_salary={list.item.min_salary}
                        jobId={list.item.slug}
                        key={list.item.slug}
                      />
                    ))}
                  <div className="ad-section text-center">
                    <a href="#">
                      <img
                        src="images/ads/3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <ul className="pagination ">
                      <li>
                        <a href="#">
                          <i className="fa fa-chevron-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a>...</a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>
                      <li>
                        <a href="#">20</a>
                      </li>
                      <li>
                        <a href="#">30</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 d-none d-lg-block">
                <div className="advertisement text-center">
                  <a href="#">
                    <img src="images/ads/1.jpg" alt className="img-fluid" />
                  </a>
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
  );
}

export default JobLists;
