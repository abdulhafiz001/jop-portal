const JobListCard = ({image, title, company, address, min_salary, max_salary, jobId})=>{
    return (
        <a href={"/job-details/"+jobId}>
        <div className="job-ad-item">
        <div className="item-info">
          <div className="item-image-box">
            <div className="item-image">
                <img
                  src={image}
                  alt="Image"
                  className="img-fluid"
                />
            </div>
          </div>
          <div className="ad-info">
            <span>
              
                {title}
              {" "}
              @ {company}
            </span>
            <div className="ad-meta">
              <ul>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-map-marker"
                      aria-hidden="true"
                    ></i>
                    {address}{" "}
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
              </ul>
            </div>
          </div>
        </div>
        </div>
        </a>
    )
}

export default JobListCard;