import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/HomeSixteen/Banner";
import About from "../../components/HomeTwo/About";
import HowItWorks from "../../components/HomeSixteen/HowItWorks";
import Features from "../../components/HomeTwo/Features";
import Counter from "../../components/HomeSixteen/Counter";
import Screenshots from "../../components/Common/problem";
import Testimonial from "../../components/HomeSixteen/Testimonial";
import Pricing from "../../components/HomeSixteen/Pricing";
import Faq from "../../components/HomeSixteen/Faq";
import Team from "../../components/HomeSixteen/Team";
import AppDownload from "../../components/HomeSixteen/AppDownload";
import Blog from "../../components/HomeSixteen/Blog";
import ContactForm from "../../components/Common/ContactForm";
import Footer from "../../components/Common/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <Banner />

      <About />

      <HowItWorks />

      <Features />

      <Counter />

      <Screenshots />

      <Testimonial />

      <Pricing />

      <Faq />

      <Team />

      <AppDownload />

      <Blog />

      <ContactForm />

      <Footer />
    </>
  );
}
