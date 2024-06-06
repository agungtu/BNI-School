"use client";

import React from "react";

const AppDownload: React.FC = () => {
  return (
    <>
      <section id="contact"  style={{backgroundColor : " rgb(3, 92, 109)"  , }}>
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h2 style={{color: " rgb(239, 90, 38)"}}>GET NOW !!!</h2>
            <h4 className="text-white">
              Temukan era baru pendidikan dengan aplikasi yang memudahkan dan
              menginspirasi.
            </h4>
            <p className="text-white">Bersiaplah untuk transisi yang mulus menuju masa depan pendidikan yang lebih canggih, lebih cerdas, dan lebih terkoneksi!</p>
          </div>

          <div className="">
            <div className="col-lg-12 d-flex justify-content-center">
              <div
                className="app-download-content"
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=6281542553779&text&type=phone_number&app_absent=0"
                  className="purchase-btn"
                  target="_blank"
                  style={{ backgroundColor: "rgb(239, 90, 38)", color : "white" }}
                >
                    
                    <span className="large-text">Hubungi Kami</span>
                </a>
               
              </div>
              &nbsp;&nbsp;
              <a
                  href="https://www.canva.com/design/DAF9m9y5ymI/Ml6ErBopq4JNPAQ9FnB-9A/view?utm_content=DAF9m9y5ymI&utm_campaign=designshare&utm_medium=link&utm_source=editor#1"
                  className="purchase-btn"
                  target="_blank"
                  style={{ backgroundColor: "rgb(239, 90, 38)", color  : "white" }}
                >
               
                    <span className="large-text" >Materi BNI-Smart School</span>
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDownload;
