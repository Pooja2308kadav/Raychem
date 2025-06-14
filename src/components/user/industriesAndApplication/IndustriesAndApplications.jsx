import React from 'react';
import styled from 'styled-components';
import { HeroSection, NavigationTabs } from '../layouts/HeroSection';
import IndustiesImg from "../../../assets/industies.jpg";
import Navbar from '../../../components/user/layouts/Navbar';
import Footer from '../../../components/user/Footer';
import DefenceImg from "../../../assets/defence.jpg";
import ElectricVehicleImg from "../../../assets/electricVehicle.jpg";
import EnergyImg from "../../../assets/energy.jpg";
import InfrastructureImg from "../../../assets/Infrastructure.jpg";
import OilAndGasImg from "../../../assets/Oil.jpg";
import TransportationImg from "../../../assets/Transportation.jpg";

const IndustriesAndApplications = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Industries & Applications', link: '/industries-and-applications' },
  ];

  const industries = [
    {
      image: { src: DefenceImg, alt: 'Defense & Aerospace' },
      title: 'DEFENSE & AEROSPACE',
      description: 'The Indian defense manufacturing sector is a significant sector likely to accelerate with rising concerns for national security.',
      link: '/defense-aerospace',
    },
    {
      image: { src: ElectricVehicleImg, alt: 'Electric Vehicle' },
      title: 'ELECTRIC VEHICLE',
      description: 'The electric vehicle market is rapidly evolving, with a focus on sustainable and efficient transportation solutions.',
      link: '/electric-vehicle',
    },
    {
      image: { src: EnergyImg, alt: 'Energy' },
      title: 'ENERGY',
      description: 'Power is among the most critical components of infrastructure, crucial for the economic growth and welfare of nations.',
      link: '/energy',
    },
    {
      image: { src: InfrastructureImg, alt: 'Infrastructure' },
      title: 'INFRASTRUCTURE',
      description: 'The infrastructure sector is a key driver for the Indian economy and is responsible for propelling India’s overall development.',
      link: "/infrastructure"
    },
    {
      image: { src: OilAndGasImg, alt: 'Oil & Gas' },
      title: 'OIL & GAS',
      description: 'The oil and gas industry requires robust solutions to operate in challenging environments.',
      link: '/oil-and-gas',
    },
    {
      image: { src: TransportationImg, alt: 'Transportation' },
      title: 'TRANSPORTATION',
      description: 'Efficient transportation systems are vital for economic growth and connectivity.',
      link: '/transportation',
    },
  ];

  return (
    <PageContainer>
      <Navbar />
      <HeroSection
        title="Industries & Applications"
        breadcrumbs={breadcrumbs}
        backgroundImage={IndustiesImg}
        backgroundSize="cover"
      />
      
      <MainContent>
        <Subtitle>
          A partner of choice in diverse industries, Raychem RPG is committed to meet and deliver expectations of each and every stakeholder in the ecosystem.
        </Subtitle>
        <SearchBarContainer>
          <SearchInput placeholder="🔍  Search by Industries or Applications" />
        </SearchBarContainer>
        <IndustriesGrid>
          {industries.map((industry, index) => (
            <IndustryCard key={index}>
              <IndustryImage src={industry.image.src} alt={industry.image.alt} />
              <IndustryContent>
                <IndustryTitle>{industry.title}</IndustryTitle>
                <IndustryDescription>{industry.description}</IndustryDescription>
                <LearnMoreLink href={industry.link}>LEARN MORE →</LearnMoreLink>
              </IndustryContent>
            </IndustryCard>
          ))}
        </IndustriesGrid>
      </MainContent>
      <Footer/>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    max-width: 1200px;
  }

  @media (max-width: 1024px) {
    max-width: 90%;
    padding: clamp(1.5rem, 4vw, 3rem) clamp(0.75rem, 2vw, 1.5rem);
  }

  @media (max-width: 768px) {
    padding: clamp(1rem, 3vw, 2rem) clamp(0.5rem, 1.5vw, 1rem);
  }

  @media (max-width: 480px) {
    padding: clamp(0.75rem, 2vw, 1.5rem) clamp(0.5rem, 1vw, 0.75rem);
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #4a4a4a;
  text-align: center;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 1.8vw, 1.3rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 1.6vw, 1.1rem);
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: clamp(0.6rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1rem);
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  border: 1px solid #d0d0d0;
  border-radius: 25px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #ff4d4f;
    box-shadow: 0 0 5px rgba(255, 77, 79, 0.3);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 1.3vw, 0.9rem);
    padding: clamp(0.5rem, 1.2vw, 0.7rem) clamp(0.7rem, 1.8vw, 0.9rem);
  }
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  padding: 0 clamp(1rem, 3vw, 3rem);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: clamp(1rem, 2vw, 1.5rem);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    padding: 0 clamp(0.5rem, 1.5vw, 1rem);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: clamp(0.75rem, 1.5vw, 1rem);
  }
`;

const IndustryCard = styled.div`
  background-color: #f9f9f9;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const IndustryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const IndustryContent = styled.div`
  padding: clamp(0.8rem, 2vw, 1.2rem);
`;

const IndustryTitle = styled.h3`
  font-size: clamp(1.1rem, 1.8vw, 1.25rem);
  font-weight: 600;
  margin-bottom: clamp(0.5rem, 1vw, 0.8rem);
  color: #333;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 1.6vw, 1.15rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 1.4vw, 1.05rem);
  }
`;

const IndustryDescription = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #666;
  margin-bottom: clamp(0.8rem, 1.5vw, 1rem);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: clamp(0.85rem, 1.4vw, 0.95rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 1.3vw, 0.9rem);
  }
`;

const LearnMoreLink = styled.a`
  color: #ff4d4f;
  font-weight: 500;
  text-decoration: none;
  font-size: clamp(0.8rem, 1.3vw, 0.9rem);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.75rem, 1.2vw, 0.85rem);
  }
`;

export default IndustriesAndApplications;