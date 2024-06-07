"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const screenshotsData = [
  {
    image: "/images/1.png",
  },
  {
    image: "/images/2.png",
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
    image: "/images/abc.png",
  },
  {
    image: "/images/ab.png",
  },
  {
    image: "/images/abcd.png",
  },
  {
    image: "/images/q.png",
  },
  {
    image: "/images/w.png",
  },
  {
    image: "/images/e.png",
  },
  {
    image: "/images/tu.png",
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
            <h2 style={{color: "rgb(239, 90, 38)"}}>PROBLEM</h2>
            <h3 className="text-muted">
            Solusi inovatif lebih mudah
            </h3>
          </div>

          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
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
                      width={300}
                      height={533}
                    />
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
