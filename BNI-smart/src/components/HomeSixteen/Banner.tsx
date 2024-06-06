"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface BannerItem {
  heading: string;
  text: string;
  image: string;
  video: string;
}

const bannerData: BannerItem[] = [
  {
    heading: "Manage all of your Stuff Using a Jibo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/app-mockup-1.png",
    video: "/video/presentation.mp4",
  },
];

const Banner: React.FC = () => {
  const videoEl = useRef<HTMLVideoElement>(null);

  const attemptPlay = () => {
    videoEl.current?.play().catch((error) => {
      console.error("Error attempting to play", error);
    });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      {bannerData &&
        bannerData.map((value, i) => (
          <div id="home" className="hompage-slides-wrapper video-bg" key={i}>
            <div className="video-area">
              <video playsInline loop muted src={value.video} ref={videoEl} />
            </div>

            <div className="single-slider-item wave-bg-two">
              <div className="slide-item-table">
                <div className="slide-item-tablecell">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-12 col-lg-7">
                        <div className="slider-text">
                          <h1>{value.heading}</h1>
                          <p>{value.text}</p>

                          <div className="slide-button">
                            <a href="#" className="slide-btn-white mr-10">
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
                        <div className="welcome-phone">
                          <Image
                            src={value.image}
                            alt="App Mockup image"
                            width={400}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Banner;
