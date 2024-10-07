const JobItemCard = ({image, title, company, address, min_salary, max_salary, office, jobId})=>{
    return (
        <div className="job-ad-item">
        <div className="item-info">
            <div className="item-image-box">
              <div className="item-image">
                <a href="/job-details">
                  <img
                    src={image}
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="ad-info">
              <span>
                <a href="/job-details" className="title">
                  {title}
                </a>{" "}
                @ <a href="#">{company}</a>
              </span>
              <div className="ad-meta">
                <ul>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                      ></i>
                      {address}
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
                      ${min_salary} - ${max_salary}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-tags" aria-hidden="true"></i>
                    {office}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="button">
              <a href={"/jobdetail/"+jobId} className="btn btn-primary">
                Apply Now
              </a>
            </div>
        </div>
        </div>
    )
}

export default JobItemCard