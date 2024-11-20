import Portfolio from "./Porfolio";
import AboutMe from "./AboutMe";
import WhatIDo from "./WhatIDo";
import Hero from "./Hero";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <WhatIDo />
      <Portfolio />
      <Footer />
    </>
  );
};

export default LandingPage;
