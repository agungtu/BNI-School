"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const sliderData = [
  {
    heading: "Manage all of your Stuff Using a Jibo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/app-mockup-1.png",
  },
  {
    heading: "Awesome Jibo Mobile App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/app-mockup-2.png",
  },
];

const Slider: React.FC = () => {
  return (
    <>
      <div id="home" className="hompage-slides-wrapper particle-bg">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="homepage-slides"
        >
          {sliderData &&
            sliderData.map((value, i) => (
              <SwiperSlide key={i}>
                <div className="single-slider-item">
                  <div className="slide-item-table">
                    <div className="slide-item-tablecell">
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-md-12 col-lg-7">
                            <div className="slider-text">
                              <h1>{value.heading}</h1>

                              <p>{value.text}</p>

                              <div className="slide-button">
                                <a
                                  href="https://play.google.com/store/apps"
                                  target="_blank"
                                  className="slide-btn-white mr-10"
                                >
                                  <i className="icofont-cloud-download"></i>
                                  Download
                                </a>
                                <a href="#" className="slide-btn-bordered">
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12 col-lg-5">
                            <div className="welcome-phone text-center">
                              <Image
                                src={value.image}
                                alt="App Mockup image"
                                width={400}
                                height={500}
                              />

                              <div className="animate-bg"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
