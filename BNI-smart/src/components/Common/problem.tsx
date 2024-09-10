"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const screenshotsData = [
  {
    image: "/images/transaksi.png",
    deskripsi: "seratus"
  },
  {
    image: "/images/22.png",
    deskripsi: "ssssseratus"

  },
  {
    image: "/images/3a.png",
  },
  {
    image: "/images/4.png",
  },
  {
    image: "/images/banksampah.png",
  },
  {
    image: "/images/cardd.png",
  },
  {
    image: "/images/belanja.png",
  },
  {
    image: "/images/market.png",
  },
  {
    image: "/images/bimbii.png",
  },
  {
    image: "/images/lms.png",
  },
  {
    image: "/images/jurnalmanual.png",
  },
  {
    image: "/images/lmss.png",
  },
];

const Screenshots: React.FC = () => {
  return (
    <>
      <section id="problem" className="app-screenshots-section">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "#006677" }}>PROBLEM</h2>
            <h3 style={{ color: "#006677" }}>
            Solusi inovatif lebih mudah
            </h3>
          </div>

          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            slidesPerGroup={2}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation, Pagination]}
            className="screenshot-slider"
          >
            {screenshotsData &&
              screenshotsData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="screenshot-item">
                    <Image
                      src={value.image}
                      alt="Screenshot Image"
                      width={500}
                      height={533}
                    />
                    {/* <p>{value.deskripsi}</p> */}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Screenshots;
