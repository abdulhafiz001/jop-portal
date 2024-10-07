import React from "react";
import FooterComp from "../Components/Footer.Comp";
import HeaderComp from "../Components/Header.Comp";
import UserInfoCardComp from "../Components/UserInfoCard.Comp";
import Template from "../Components/Template";

function AppliedJob() {
  return (
    <Template>
    {/* <div>
      <HeaderComp page={"appliedJob"} /> */}

      <section className="job-bg page ad-profile-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Applied Job</li>
            </ol>
            <h2 className="title">Applied Job</h2>
          </div>
          <UserInfoCardComp page={"appliedJob"} />
          <div className="section trending-ads latest-jobs-ads">
            <h4>Applied Jobs</h4>
            {/* Repeatable job items */}
            <div className="job-ad-item">
              <div className="item-info">
                <div className="item-image-box">
                  <div className="item-image">
                    <a href="job-details.html">
                      <img
                        src="images/job/4.png"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div className="ad-info">
                  <span>
                    <a href="job-details.html" className="title">
                      Human Resource Manager
                    </a>{" "}
                    @ <a href="#">Dropbox Inc</a>
                  </span>
                  <div className="ad-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          San Francisco, CA, US{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                          Full Time
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-money" aria-hidden="true"></i>
                          $25,000 - $35,000
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-tags" aria-hidden="true"></i>
                          HR/Org. Development
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="close-icon">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            {/* Additional job items */}
          </div>
        </div>
      </section>
      
      {/* <FooterComp />
    </div> */}
    </Template>
  );
}

export default AppliedJob;
