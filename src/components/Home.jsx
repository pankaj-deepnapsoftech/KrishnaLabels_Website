import React from 'react';
import HeroSection from "./HeroSection";
import Product from "./Product";
import TrustedBrands from "./Trusted";
import CustomOrderProcess from "./OrderProcess";
import QualityControl from "./Quality";
import Reviews from "./Reviews";
import Certifications from "./Certification";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Product />
      <TrustedBrands />
      <CustomOrderProcess />
      <QualityControl />
      <Reviews />
      <Certifications />
    </>
  );
};

export default Home;
