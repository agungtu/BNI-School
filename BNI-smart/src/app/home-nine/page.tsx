import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Slider from "../../components/HomeNine/Slider";
import About from "../../components/HomeNine/About";
import HowItWorks from "../../components/HomeNine/HowItWorks";
import Features from "../../components/HomeNine/Features";
import Counter from "../../components/HomeNine/Counter";
import Screenshots from "../../components/Common/problem";
import Testimonial from "../../components/HomeNine/Testimonial";
import Pricing from "../../components/HomeNine/Pricing";
import Faq from "../../components/Common/Faq";
import Team from "../../components/HomeNine/Team";
import AppDownload from "../../components/HomeNine/AppDownload";
import Blog from "../../components/HomeNine/Blog";
import ContactForm from "../../components/Common/ContactForm";
import Footer from "../../components/Common/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <Slider />

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
