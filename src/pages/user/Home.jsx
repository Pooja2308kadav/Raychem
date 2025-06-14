import React from "react";
import styled from "styled-components";
import Navbar from "../../components/user/layouts/Navbar";
import Slider from "../../components/user/layouts/Slider";
import VideoStructure from "../../components/user/VideoStructure";
import RaychemCards from "../../components/user/RRLatGlanceCards";
import NewsSection from "../../components/user/NewsSection";
import EducationalCard from "../../components/user/RectCard";
import FeaturedOfferings from "../../components/user/FeaturedOfferings";
import Footer from "../../components/user/Footer";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh; /* Changed from height to min-height to allow content to expand */
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    min-height: auto; /* Allow content to dictate height on smaller screens */
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Slider />
      <VideoStructure />
      <FeaturedOfferings/>
      <RaychemCards />
      <NewsSection />
      <EducationalCard />
      <Footer />
    </HomeContainer>
  );
};

export default Home;