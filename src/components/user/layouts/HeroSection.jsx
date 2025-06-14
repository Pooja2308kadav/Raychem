import React from 'react';
import styled from 'styled-components';

// Hero Section Component
const HeroSection = ({ 
  title, 
  breadcrumbs = [], 
  backgroundImage = 'https://via.placeholder.com/1920x600',
  overlay = true 
}) => {
  return (
    <HeroContainer backgroundImage={backgroundImage}>
      {overlay && <Overlay />}
      <ContentContainer>
        <HeroTitle>{title}</HeroTitle>
        <BreadcrumbsContainer>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem href={item.link}>{item.label}</BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
            </React.Fragment>
          ))}
        </BreadcrumbsContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

// Navigation Tabs Component
const NavigationTabs = ({ tabs = [] }) => {
  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <TabItem key={index} href={tab.link}>
          {tab.label}
        </TabItem>
      ))}
    </TabsContainer>
  );
};

// Styled Components
const HeroContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  padding: 0 clamp(1rem, 5vw, 100px);
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 clamp(1rem, 4vw, 50px);
  }

  @media (max-width: 480px) {
    padding: 0 clamp(0.5rem, 3vw, 20px);
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
`;

const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: clamp(0.75rem, 1.5vw, 1rem);
`;

const BreadcrumbItem = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 10px;
  color: white;

  @media (max-width: 480px) {
    margin: 0 5px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  justify-content: center;
`;

const TabItem = styled.a`
  padding: 15px 25px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.85rem;
  }
`;

export { HeroSection, NavigationTabs };
