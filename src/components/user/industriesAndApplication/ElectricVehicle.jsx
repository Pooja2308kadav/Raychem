import React from 'react';
import { HeroSection, NavigationTabs } from '../layouts/HeroSection';
import styled from 'styled-components';
import BgImage from "../../../assets/electricVehicle.jpg";
import Footer from "../../../components/user/Footer";
import Navbar from "../../../components/user/layouts/Navbar";

const ElectricVehicle = () => {
  const heroTitle = "With Electric Vehicle consider making a green switch";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Industries and Applications", link: "/industries-and-applications" },
    { label: "Electric Vehicle", link: "/industries-and-applications/electric-vehicle" }
  ];
  
  const navigationTabs = [
    { label: "Business Overview", link: "#business-overview" },
    { label: "Product Portfolio", link: "#product-portfolio" }
  ];
  
  const backgroundImage = BgImage;

  return (
    <PageContainer>
      <Navbar />
      <HeroSection 
        title={heroTitle} 
        breadcrumbs={breadcrumbs} 
        backgroundImage={backgroundImage}
      />
      <NavigationTabs tabs={navigationTabs} />
      <ContentContainer>
        <ContentSection>
          <ContentText>
            We provide engineering solutions for customized connectors, electrical insulation, and safety. Today the automotive industry is highly disrupted with a paradigm shift towards EVs that are powering the world. Raychem RPG has embraced the change and is a strategic channel partner to various OEMs in the EV mobility value chain.
          </ContentText>
          <ContentText>
            We are developing innovative products to meet the industry's evolving needs. India's electric vehicle (EV) market is estimated to be a Rs. 50,000 crore (US$ 7.09 billion) opportunity by 2025, with two- and three-wheeler vehicles expected to drive higher electrification.
          </ContentText>
        </ContentSection>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) clamp(2vw, 5vw, 5vw);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    max-width: 1000px;
  }

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: clamp(1.5rem, 4vw, 3rem) clamp(1.5vw, 4vw, 4vw);
  }

  @media (max-width: 768px) {
    padding: clamp(1rem, 3vw, 2rem) clamp(1vw, 3vw, 3vw);
  }

  @media (max-width: 480px) {
    padding: clamp(0.75rem, 2vw, 1.5rem) clamp(0.5vw, 2vw, 2vw);
  }

  @media (max-width: 320px) {
    padding: clamp(0.5rem, 1.5vw, 1rem) clamp(0.5vw, 1.5vw, 1.5vw);
  }
`;

const ContentSection = styled.div`
  display: flex;
  gap: clamp(1rem, 2vw, 2rem);
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: clamp(0.75rem, 1.5vw, 1.5rem);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: clamp(0.5rem, 1vw, 1rem);
  }
`;

const ContentText = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: #333;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    font-size: clamp(0.85rem, 1.4vw, 0.95rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 1.3vw, 0.9rem);
  }

  @media (max-width: 320px) {
    font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  }
`;

export default ElectricVehicle;