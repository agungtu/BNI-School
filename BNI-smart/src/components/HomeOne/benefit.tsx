"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const howItWorksData = [
  {
    icon: "icofont-login",
    title: "Mengajarkan pengelolaan keuangan sejak dini",
    duration: "800",
    delay: "100",
  },
  {
    icon: "icofont-test-tube-alt",
    title:
      "Mengajarkan siswa tentang pentingnya menjaga lingkungan melalui program kartubank sampah",
    duration: "800",
    delay: "200",
  },
  {
    icon: "icofont-chart-histogram-alt",
    title: "Membantu guru menyusun laporan jurnal pembelajaran",
    duration: "800",
    delay: "300",
  },
];
const howItWorksData2 = [
  {
    icon: "icofont-login",
    title: "Melatih anak menggunakan teknologi pembayaran terkini",
    duration: "800",
    delay: "100",
  },
  {
    icon: "icofont-test-tube-alt",
    title:
      "Jadwal pelajaran interaktif dan kalender pendidikan yang terintegrasi",
    duration: "800",
    delay: "200",
  },
  {
    icon: "icofont-chart-histogram-alt",
    title:
      "Memudahkan admin sekolah dalam operasional keuangan dan kegiatan belajar mengajar",
    duration: "800",
    delay: "300",
  },
];

const HowItWorks: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.

  return (
    <>
      <section
        id="benefit"
        className="how-it-works"
        style={{ backgroundColor: " rgb(239, 90, 38)" }}
      >
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{color : "#006677"}}>Benefit</h2>
            <h3 style={{color : "#006677"}}>Keuntungan Yang Didapat</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hiw-feature-content">
                {howItWorksData &&
                  howItWorksData.map((value, i) => (
                    <div
                      className="single-hiw-feature"
                      data-aos="fade-in"
                      data-aos-duration={value.duration}
                      data-aos-delay={value.delay}
                      key={i}
                    >
                      <ul>
                        <li className="text-white">
                          <h5 className="text-white">{value.title}</h5>
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hiw-feature-content">
                {howItWorksData2 &&
                  howItWorksData2.map((value, i) => (
                    <div
                      className="single-hiw-feature"
                      data-aos="fade-in"
                      data-aos-duration={value.duration}
                      data-aos-delay={value.delay}
                      key={i}
                    >
                      <ul>
                        <li className="text-white">
                          <h5 className="text-white">{value.title}</h5>
                        </li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/q5DsVVurRQ8"]}
      /> */}
    </>
  );
};

export default HowItWorks;
