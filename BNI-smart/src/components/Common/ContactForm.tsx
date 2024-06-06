"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <>
      <section id="contact" className="contact-section gray-bg">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="icofont-location-pin"></i>
                <h3>Office Address:</h3>
                <p>
                  Jl. Nakula Sadewa Raya No.17B, Dukuh,Kec. Sidomukti, Kota
                  Salatiga, Jawa Tengah 50722
                </p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="icofont-envelope"></i>
                <h3>E-mail Address:</h3>
                <p>info@katalis.info</p>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="icofont icofont-phone"></i>
                <h3>Phone Number:</h3>
                <p>0815-4255-3779</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
