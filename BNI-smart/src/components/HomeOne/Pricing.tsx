"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Pricing: React.FC = () => {
  return (
    <>
      <section id="pricing" className="pricing-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "rgb(239, 90, 38)" }}>Pricing </h2>
            <h3 className="text-muted">Penawaran Menarik Dari Kami</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <div className="price-header">
                  <h3 style={{color: "rgb(239, 90, 38)"}}>Paket A</h3>
                  <Image
                    src="/images/card.png"
                    alt="App Mockup image"
                    width={400}
                    height={500}
                  />
                  <div className=" mt-4">
                    <h4 className="text-muted">Rp 10.000</h4>
                    <h4 className="text-muted">/ Registrasi User</h4>
                  </div>
                  <div className="pt-5">
                  <br></br>
                  <br></br>
                  <br></br>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="price-header">
                  <h3 style={{color : "rgb(239, 90, 38)"}}>PAKET B</h3>
                  <Image
                    src="/images/lap.png"
                    alt="App Mockup image"
                    width={400}
                    height={500}
                  />
                  <div className=" mt-4">
                    <h4 className="text-muted">Rp 20.000</h4>
                    <h4 className="text-muted">/ Kartu Pelajar</h4>
                  </div>
                  <div className="pt-5">
                  <br></br>
                  <br></br>
                  <br></br>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="single-price-package"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <div className="price-header">
                  <h3 style={{color : "rgb(239, 90, 38)"}}>PAKET C</h3>
                  <Image
                    src="/images/a.png"
                    alt="App Mockup image"
                    width={400}
                    height={500}
                  />
                  <div className=" mt-4">
                    <h4 className="text-muted">Rp 2.500.000</h4>
                    <h4 className="text-muted">/ Android POS</h4>
                    <h4 className="text-muted">Rp 1.500.000</h4>
                    <h4 className="text-muted">/ Mesin Absensi</h4>
                    <br></br>
                    <br></br>
                  </div>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-center">
                Informasi produk dan harga lebih detail
              </h4>
              <center>
                <div className="price-footer col-sm-3 text-center">
                  <Link href="https://api.whatsapp.com/send/?phone=6281542553779&text&type=phone_number&app_absent=0" target="_blank" className="purchase-btn" style={{ backgroundColor: "rgb(239, 90, 38)", color : "white" }}>
                    Hubungi Kami
                  </Link>
                </div>
              </center>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
