import React, { useState } from "react";
import HeaderComp from "../Components/Header.Comp";
import FooterComp from "../Components/Footer.Comp";
import axios from "axios";
import Notify from "../Components/Notify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signin() {
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer `,
    },
  };

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    let is_valid = true;

    let err = error;

    if (user.password.length < 8) {
      is_valid = false;
      err.password = "Please enter minimum of 8 characters";
    }

    setError(err);

    if (is_valid) {
      const fd = new FormData();
      fd.append("email_address", user.email);
      fd.append("password", user.password);

      let url = "http://solidrockschool.com.ng/api/people/applicant/login";

      axios
        .post(url, fd, config)
        .then((response) => {
          if (response.data.status == 200) {
            Cookies.set("email", user.email);
            Cookies.set("token", response.data.token, {
              expires: response.data.expires_in
            });
            setIsLoading(false);
            navigator("/profile");
            Notify(
              response.data.message,
              response.data.message,
              "success",
              "Okay"
            );
          } else {
            Notify(
              "Unable to Sign In!",
              response.data.message,
              "error",
              "Okay"
            );
          }
        })
        .catch((error) => {
          Notify("Unable to Sign In!", error.message, "error", "Okay");
        });
    }
  };

  return (
    <div>
      <HeaderComp page={"signin"} />
      <section className="clearfix job-bg user-page">
        <div className="container text-center">
          <div className="user-account-content">
            <div className="user-account">
              <h2>User Login</h2>

              <form action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" href="#" className="btn" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Login"}
                </button>
              </form>

              <div className="user-option">
                <div className="checkbox pull-left">
                  <label for="logged">
                    <input type="checkbox" name="logged" id="logged" /> Keep me
                    logged in{" "}
                  </label>
                </div>
                <div className="pull-right forgot-password">
                  <a href="#">Forgot password</a>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary">
              Create a New Account
            </a>
          </div>
        </div>
      </section>
      <FooterComp />
    </div>
  );
}

export default Signin;
