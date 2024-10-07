import React from "react";
import HeaderComp from "../Components/Header.Comp";
import FooterComp from "../Components/Footer.Comp";
import UserInfoCardComp from "../Components/UserInfoCard.Comp";

function DeleteAccount() {
  return (
    <div>
      <HeaderComp page={"deleteAccount"} />

      <section className="clearfix job-bg delete-page">
        <div className="container">
          <div className="breadcrumb-section">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Close account</li>
            </ol>
            <h2 className="title">Close Account</h2>
          </div>
          <UserInfoCardComp page={"closeAccount"} />
          <div className="close-account text-center">
            <div className="delete-account section">
              <h2>Delete Your Account</h2>
              <h4>Are you sure, you want to delete your account?</h4>
              <a href="#" className="btn">
                Delete Account
              </a>
              <a href="#" className="btn cancle">
                Cancle
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <FooterComp />
    </div>
  );
}

export default DeleteAccount;
