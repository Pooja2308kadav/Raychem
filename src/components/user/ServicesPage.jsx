import React from "react";
import { HeroSection, NavigationTabs } from "./layouts/HeroSection";
import styled from "styled-components";
import BgImage from "../../assets/services.jpg";
import SubServices1 from "./ServiceSubPage1"
import ServiceSlider from "./ServiceSlider";


const RectangleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/rectangle-image-new.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 30px;
  color: #fff;
  margin: 20px auto;

  @media (max-width: 768px) {
    height: 250px;
    padding: 20px;
  }
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;

  span {
    color: #ff4d4f;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1.5;
  max-width: 80%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ReadMoreButton = styled.button`
  background: #ff4d4f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #e04345;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

  const handleButtonClick = () => {
    window.location.href = "https://rpgf.org/";
  };

const ServicesPage = () => {
  // Data for the Services page
  const heroTitle = "Consultancy & Services Solutions";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
  ];

  const navigationTabs = [
    { label: "Service Overview", link: "#service-overview" },
    { label: "Our Expertise", link: "#our-expertise" },
  ];

  // Services background image - replace with your actual image path
  const backgroundImage = BgImage;

  return (
    <PageContainer>
      {/* Hero Section with Title and Breadcrumbs */}
      <HeroSection
        title={heroTitle}
        breadcrumbs={breadcrumbs}
        backgroundImage={backgroundImage}
      />

      {/* Navigation Tabs */}
      <NavigationTabs tabs={navigationTabs} />

      {/* Main Content */}
      <ContentContainer>
        <ContentSection>
          <ContentText>
            Raychem RPG offers a wide range of engineering services designed to meet the unique
            needs of industries worldwide. From design and prototyping to installation and
            maintenance, our team delivers customized solutions that ensure reliability and
            efficiency.
          </ContentText>

          <ContentText>
            Our expertise spans electrical connectivity, cable management, and safety solutions,
            backed by decades of experience in the field. Raychem RPG is committed to providing
            exceptional service and support, helping our clients achieve their goals with
            innovative and sustainable technologies.
          </ContentText>
        </ContentSection>
      </ContentContainer>
 <RectangleContainer>
      <Heading>
        <span>Explore</span> Raychem RPG
      </Heading>
      <Description>
        Discover innovative engineering solutions and smart technologies for a sustainable future.
      </Description>
      <ReadMoreButton onClick={handleButtonClick}>Read More</ReadMoreButton>
    </RectangleContainer>
    <SubServices1/>
    <ServiceSlider/>
      
    </PageContainer>
  );
};

// Styled components for the page layout
const PageContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ContentSection = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  flex: 1;
`;

export default ServicesPage;