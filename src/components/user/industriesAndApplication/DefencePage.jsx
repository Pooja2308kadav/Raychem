import React from 'react';
import styled from 'styled-components';
import BgImage from "../../../assets/defence.jpg";
import Footer from "../../../components/user/Footer";
import Navbar from "../../../components/user/layouts/Navbar";
import { HeroSection, NavigationTabs } from '../layouts/HeroSection';

const DefenseAerospacePage = () => {
  const heroTitle = "Robust products for a robust nation";

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Industries and Applications", link: "/industries-and-applications" },
    { label: "Defense & Aerospace", link: "/industries-and-applications/defense-aerospace" }
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
            The Indian defense manufacturing industry is a significant sector for the Indian economy and is likely to accelerate with rising concerns for national security. The Defense Ministry plans to offer potential military hardware manufacturing opportunities to the Indian defense industry.
          </ContentText>
          <ContentText>
            Raychem RPG is proud to contribute within its scope of solutions to serve this industry and works closely on several strategic projects of air bases, naval sea ports, and submarines across geographies, providing customized engineering, cable management, electrical insulation, and personnel safety solutions.
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
    padding: 1rem 1rem;
  }
`;

const ContentSection = styled.div`
  display: flex;
  gap: clamp(1rem, 2vw, 2rem);
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: clamp(0.75rem, 1.5vw, 1.5rem);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: clamp(0.75rem, 1.2vw, 1.2rem);
  }
`;

const ContentText = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.8;
  color: #333;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    font-size: clamp(0.85rem, 1.4vw, 0.95rem);
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 1.3vw, 0.9rem);
    line-height: 1.6;
  }

  @media (max-width: 320px) {
    font-size: clamp(0.78rem, 1.1vw, 0.85rem);
    line-height: 1.5;
  }
`;

export default DefenseAerospacePage;
