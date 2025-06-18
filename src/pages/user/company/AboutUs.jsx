import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from '../../../components/user/layouts/Navbar2';
import Footer from '../../../components/user/Footer';
import AboutUS from '../../../assets/aboutus.jpg';
import WelcomeImg from '../../../assets/welcomeimg.jpg';
import VisionImg from '../../../assets/Ourvision.jpg';
import MissionImg from '../../../assets/vision.jpg';

// Styled Components
const AboutUsContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  width: 100%;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: clamp(2rem, 5vw, 3.125rem) clamp(2rem, 5vw, 5%);
  background-color: #f5f7fa;
  width: 100%;
  box-sizing: border-box;
  margin-top: 2rem;

  @media (max-width: 1440px) {
    padding: clamp(1.75rem, 4.5vw, 2.875rem) clamp(1.75rem, 4.5vw, 4%);
  }

  @media (max-width: 1024px) {
    padding: clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 3%);
  }

  @media (max-width: 768px) {
    padding: clamp(1.25rem, 3.5vw, 1.875rem) clamp(1.25rem, 3.5vw, 2.5%);
  }

  @media (max-width: 425px) {
    padding: clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 2%);
  }
`;

const HeroSection = styled(Section)`
  background: url(${AboutUS}) center/cover no-repeat;
  color: #fff;
  text-align: left;
  padding: clamp(4rem, 10vw, 6.25rem) clamp(2rem, 5vw, 5%);
  display: flex;
  align-items: center;
  min-height: clamp(250px, 50vw, 400px);

  @media (max-width: 1440px) {
    min-height: clamp(230px, 45vw, 380px);
    padding: clamp(3.5rem, 9vw, 5.75rem) clamp(1.75rem, 4.5vw, 4%);
  }

  @media (max-width: 1024px) {
    min-height: clamp(210px, 40vw, 360px);
    padding: clamp(3rem, 8vw, 5rem) clamp(1.5rem, 4vw, 3%);
  }

  @media (max-width: 768px) {
    min-height: clamp(190px, 35vw, 300px);
    padding: clamp(2.5rem, 7vw, 3.75rem) clamp(1.25rem, 3.5vw, 2.5%);
  }

  @media (max-width: 425px) {
    min-height: clamp(170px, 30vw, 270px);
    padding: clamp(2rem, 6vw, 2.5rem) clamp(1rem, 3vw, 2%);
  }
`;

const HeroContent = styled.div`
  max-width: clamp(400px, 40vw, 600px);
  width: 100%;

  @media (max-width: 1024px) {
    max-width: clamp(350px, 35vw, 550px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: clamp(0.75rem, 2.5vw, 1.25rem);

  @media (max-width: 1024px) {
    font-size: clamp(1.75rem, 4.5vw, 2.5rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }

  @media (max-width: 425px) {
    font-size: clamp(1.25rem, 3.5vw, 1.75rem);
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  margin-bottom: clamp(1rem, 4vw, 2rem);

  @media (max-width: 1024px) {
    font-size: clamp(0.875rem, 2vw, 1.125rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(0.8125rem, 1.8vw, 1rem);
  }

  @media (max-width: 425px) {
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  }
`;

const OverviewSection = styled(Section)`
  display: flex;
  gap: clamp(1rem, 3vw, 1.875rem);
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1440px) {
    gap: clamp(0.875rem, 2.5vw, 1.625rem);
  }

  @media (max-width: 1024px) {
    gap: clamp(0.75rem, 2vw, 1.5rem);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: clamp(0.625rem, 1.5vw, 1.25rem);
  }

  @media (max-width: 425px) {
    gap: clamp(0.5rem, 1.2vw, 1rem);
  }
`;

const OverviewImage = styled.div`
  flex: 1;
  background: url(${WelcomeImg}) center/cover no-repeat;
  border-radius: 10px;
  height: clamp(200px, 40vw, 300px);
  min-width: clamp(250px, 30vw, 300px);

  @media (max-width: 1440px) {
    height: clamp(180px, 35vw, 280px);
    min-width: clamp(230px, 28vw, 280px);
  }

  @media (max-width: 1024px) {
    height: clamp(170px, 32vw, 260px);
    min-width: clamp(220px, 26vw, 260px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: clamp(160px, 30vw, 250px);
    min-width: 100%;
  }

  @media (max-width: 425px) {
    height: clamp(140px, 28vw, 230px);
  }
`;

const OverviewText = styled.div`
  flex: 1;
  min-width: clamp(250px, 30vw, 300px);

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    margin-bottom: clamp(0.75rem, 2.5vw, 1.25rem);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    min-width: clamp(220px, 26vw, 260px);
    h2 {
      font-size: clamp(1.5rem, 3.5vw, 2rem);
    }
    p {
      font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    h2 {
      font-size: clamp(1.375rem, 3vw, 1.75rem);
    }
    p {
      font-size: clamp(0.875rem, 1.5vw, 1rem);
    }
  }

  @media (max-width: 425px) {
    h2 {
      font-size: clamp(1.25rem, 2.8vw, 1.5rem);
    }
    p {
      font-size: clamp(0.8125rem, 1.3vw, 0.9375rem);
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: clamp(1rem, 3vw, 1.875rem);
  margin-top: clamp(2rem, 5vw, 3.125rem);
  flex-wrap: wrap;

  @media (max-width: 1440px) {
    gap: clamp(0.875rem, 2.5vw, 1.625rem);
    margin-top: clamp(1.75rem, 4.5vw, 2.875rem);
  }

  @media (max-width: 1024px) {
    gap: clamp(0.75rem, 2vw, 1.5rem);
    margin-top: clamp(1.5rem, 4vw, 2.5rem);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: clamp(0.625rem, 1.5vw, 1.25rem);
    margin-top: clamp(1.25rem, 3.5vw, 1.875rem);
  }

  @media (max-width: 425px) {
    gap: clamp(0.5rem, 1.2vw, 1rem);
    margin-top: clamp(1rem, 3vw, 1.5rem);
  }
`;

const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1.25rem);
  min-width: clamp(250px, 30vw, 300px);

  @media (max-width: 1440px) {
    min-width: clamp(230px, 28vw, 280px);
    gap: clamp(0.625rem, 1.8vw, 1rem);
  }

  @media (max-width: 1024px) {
    min-width: clamp(220px, 26vw, 260px);
    gap: clamp(0.5rem, 1.5vw, 0.875rem);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    gap: clamp(0.375rem, 1.2vw, 0.75rem);
  }
`;

const ContentRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 2vw, 1.25rem);
  min-width: clamp(250px, 30vw, 300px);

  @media (max-width: 1440px) {
    min-width: clamp(230px, 28vw, 280px);
    gap: clamp(0.625rem, 1.8vw, 1rem);
  }

  @media (max-width: 1024px) {
    min-width: clamp(220px, 26vw, 260px);
    gap: clamp(0.5rem, 1.5vw, 0.875rem);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    gap: clamp(0.375rem, 1.2vw, 0.75rem);
  }
`;

const SubSection = styled.div`
  background-color: #fff;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: clamp(1rem, 3vw, 1.875rem);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1.5vw, 0.75rem);

  p {
    font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    padding: clamp(0.875rem, 2.5vw, 1.25rem);
    margin-bottom: clamp(0.875rem, 2.5vw, 1.625rem);
    p {
      font-size: clamp(0.875rem, 1.6vw, 1rem);
    }
  }

  @media (max-width: 768px) {
    padding: clamp(0.75rem, 2vw, 1rem);
    margin-bottom: clamp(0.75rem, 2vw, 1.375rem);
    p {
      font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);
    }
  }

  @media (max-width: 425px) {
    padding: clamp(0.625rem, 1.8vw, 0.875rem);
    p {
      font-size: clamp(0.75rem, 1.2vw, 0.875rem);
    }
  }
`;

const SubSectionTitle = styled.h3`
  color: #d32f2f;
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  margin-bottom: clamp(0.5rem, 1.5vw, 0.75rem);

  @media (max-width: 1024px) {
    font-size: clamp(1.0625rem, 2.8vw, 1.375rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }

  @media (max-width: 425px) {
    font-size: clamp(0.9375rem, 2.2vw, 1.125rem);
  }
`;

const SubSectionLink = styled.a`
  color: #d32f2f;
  text-decoration: none;
  font-weight: bold;
  font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    font-size: clamp(0.875rem, 1.6vw, 1rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);
  }

  @media (max-width: 425px) {
    font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  }
`;



const VisionSection = styled(Section)`
  display: flex;
  gap: clamp(1rem, 3vw, 1.875rem);
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1440px) {
    gap: clamp(0.875rem, 2.5vw, 1.625rem);
  }

  @media (max-width: 1024px) {
    gap: clamp(0.75rem, 2vw, 1.5rem);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: clamp(0.625rem, 1.5vw, 1.25rem);
  }
`;

const VisionImage = styled.div`
  flex: 1;
  background: url(${VisionImg}) center/cover no-repeat;
  height: clamp(200px, 40vw, 300px);
  border-radius: 10px;
  min-width: clamp(250px, 30vw, 300px);

  @media (max-width: 1440px) {
    height: clamp(180px, 35vw, 280px);
    min-width: clamp(230px, 28vw, 280px);
  }

  @media (max-width: 1024px) {
    height: clamp(170px, 32vw, 260px);
    min-width: clamp(220px, 26vw, 260px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: clamp(160px, 30vw, 250px);
    min-width: 100%;
  }
`;

const MissionImage = styled.div`
  flex: 1;
  background: url(${MissionImg}) center/cover no-repeat;
  height: clamp(200px, 40vw, 300px);
  border-radius: 10px;
  min-width: clamp(250px, 30vw, 300px);

  @media (max-width: 1440px) {
    height: clamp(180px, 35vw, 280px);
    min-width: clamp(230px, 28vw, 280px);
  }

  @media (max-width: 1024px) {
    height: clamp(170px, 32vw, 260px);
    min-width: clamp(220px, 26vw, 260px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: clamp(160px, 30vw, 250px);
    min-width: 100%;
  }
`;

const VisionText = styled.div`
  flex: 1;
  background-color: #fff;
  padding: clamp(1.25rem, 3.5vw, 2rem);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: clamp(250px, 30vw, 300px);

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    margin-bottom: clamp(0.75rem, 2.5vw, 1.25rem);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 1024px) {
    min-width: clamp(220px, 26vw, 260px);
    padding: clamp(1rem, 3vw, 1.75rem);
    h2 {
      font-size: clamp(1.5rem, 3.5vw, 2rem);
    }
    p {
      font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    padding: clamp(0.875rem, 2.5vw, 1.5rem);
    h2 {
      font-size: clamp(1.375rem, 3vw, 1.75rem);
    }
    p {
      font-size: clamp(0.875rem, 1.6vw, 1rem);
    }
  }

  @media (max-width: 425px) {
    padding: clamp(0.75rem, 2vw, 1.25rem);
    h2 {
      font-size: clamp(1.25rem, 2.8vw, 1.5rem);
    }
    p {
      font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);
    }
  }
`;

const CoreValuesSection = styled(Section)`
  text-align: center;
`;

const CoreValuesTitle = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin-bottom: clamp(1.25rem, 4.5vw, 2.5rem);

  @media (max-width: 1024px) {
    font-size: clamp(1.5rem, 3.5vw, 2rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.375rem, 3vw, 1.75rem);
  }

  @media (max-width: 425px) {
    font-size: clamp(1.25rem, 2.8vw, 1.5rem);
  }
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2.5vw, 1.25rem);
  justify-content: center;

  @media (max-width: 1440px) {
    gap: clamp(0.625rem, 2vw, 1rem);
  }

  @media (max-width: 1024px) {
    gap: clamp(0.5rem, 1.8vw, 0.875rem);
  }
`;

const ValueItem = styled.div`
  background-color: #fff;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 18%;
  min-width: clamp(200px, 20vw, 300px);

  h3 {
    font-size: clamp(1.125rem, 2.5vw, 1.375rem);
    margin-bottom: clamp(0.5rem, 1.5vw, 0.75rem);
  }

  p {
    font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);
    line-height: 1.5;
  }

  @media (max-width: 1440px) {
    width: 19%;
    min-width: clamp(180px, 18vw, 280px);
    padding: clamp(0.875rem, 2.5vw, 1.25rem);
  }

  @media (max-width: 1024px) {
    width: 45%;
    min-width: clamp(260px, 40vw, 380px);
    padding: clamp(0.75rem, 2vw, 1rem);
    h3 {
      font-size: clamp(1.0625rem, 2.2vw, 1.25rem);
    }
    p {
      font-size: clamp(0.875rem, 1.6vw, 1rem);
    }
  }

  @media (max-width: 425px) {
    padding: clamp(0.625rem, 1.8vw, 0.875rem);
    h3 {
      font-size: clamp(1rem, 2vw, 1.125rem);
    }
    p {
      font-size: clamp(0.8125rem, 1.4vw, 0.9375rem);
    }
  }
`;


const ValueIcon = styled.div`
  font-size: clamp(1.25rem, 4vw, 2rem);
  margin-bottom: clamp(0.25rem, 1.2vw, 0.5rem);

  @media (max-width: 1024px) {
    font-size: clamp(1rem, 3.5vw, 1.75rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(0.875rem, 3vw, 1.5rem);
  }
`;

const AwardsSection = styled(Section)`
  text-align: center;
`;

const AwardsTitle = styled.h2`
  font-size: clamp(1.25rem, 3.5vw, 1.75rem);
  margin-bottom: clamp(1rem, 4vw, 2rem);

  @media (max-width: 1024px) {
    font-size: clamp(1.125rem, 3vw, 1.5rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1rem, 2.5vw, 1.375rem);
  }
`;

const AwardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;

const AwardItem = styled.div`
  background-color: #fff;
  padding: clamp(0.75rem, 2.5vw, 1.25rem);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 23%;
  min-width: clamp(200px, 20vw, 300px);

  h3 {
    font-size: clamp(0.875rem, 2vw, 1rem);
    margin-bottom: clamp(0.25rem, 1vw, 0.5rem);
  }

  p {
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  }

  @media (max-width: 1440px) {
    width: 24%;
    min-width: clamp(180px, 18vw, 280px);
    padding: clamp(0.625rem, 2vw, 1rem);
  }

  @media (max-width: 1024px) {
    width: 45%;
    min-width: clamp(260px, 40vw, 380px);
    padding: clamp(0.5rem, 1.8vw, 0.875rem);
    h3 {
      font-size: clamp(0.75rem, 1.5vw, 0.875rem);
    }
    p {
      font-size: clamp(0.625rem, 1.2vw, 0.75rem);
    }
  }
`;

const AwardImage = styled.div`
  background: url('https://via.placeholder.com/150x100/ddd/000?text=Award+Badge') center/cover no-repeat;
  height: clamp(80px, 15vw, 100px);
  margin-bottom: clamp(0.375rem, 1.5vw, 0.625rem);

  @media (max-width: 1440px) {
    height: clamp(70px, 13vw, 90px);
  }

  @media (max-width: 1024px) {
    height: clamp(60px, 11vw, 80px);
  }
`;

const P = styled.div`
  font-size: 1.3rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

// React Component
const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Navbar />

      <HeroSection>
        <HeroContent>
          <HeroTitle>Discover the World of Raychem RPG</HeroTitle>
        </HeroContent>
      </HeroSection>

      <OverviewSection id="overview">
        <OverviewImage />
        <OverviewText>
          <h2>Welcome to Raychem RPG</h2>
          <P>
            Raychem RPG (P) Ltd., incorporated in 1989, is a 50:50 Joint Venture between TE Connectivity, U.S.A. and RPG Enterprises, India. It is the longest running successful joint venture in India for over 30 years.
            <br />
            Built on foundation of trust and traditions, Raychem RPG is involved in engineering solutions and services. Pioneering smart products and technologies, the company caters to the infrastructure segment of multiple business industries.
          </P>
        </OverviewText>
      </OverviewSection>

      <Section>
        <MainContent>
          <ContentLeft>
            <SubSection>
              <SubSectionTitle>RPG Group</SubSectionTitle>
              <p>
                Established in 1979, RPG Group is one of India’s fastest growing business groups with a turnover of US$ 4.5 Billion. The group has...
              </p>
            </SubSection>
            <SubSection>
              <SubSectionTitle>TE Connectivity</SubSectionTitle>
              <p>
                TE Connectivity Ltd., with turnover of US$ 14 Billion, is a global industrial technology leader creating a safer...
              </p>
            </SubSection>
          </ContentLeft>
          <ContentRight>
            <SubSection>
              <SubSectionTitle>Brand Raychem – A Lasting Legacy</SubSectionTitle>
              <p>
                Raychem Corporation, USA pioneered the heat shrink technology and introduced it in...
              </p>
            </SubSection>
            <SubSection>
              <SubSectionTitle>Raychem RPG Business</SubSectionTitle>
              <p>
                Raychem RPG is organized around diverse and strategic businesses, providing solutions for various...
              </p>
            </SubSection>
          </ContentRight>
        </MainContent>
      </Section>

    
      <VisionSection id="vision-mission-values">
        <VisionImage />
        <VisionText>
          <h2>Our Vision</h2>
          <p>We will grow and attain sustained leadership position in all our chosen lines of business.</p>
          <p>We will win the respect of all our stakeholders.</p>
        </VisionText>
      </VisionSection>

      <VisionSection>
        <VisionText>
          <h2>Our Mission</h2>
          <p>Accelerate growth with focus on new products and services introduction.</p>
          <p>Make exports a major vehicle for corporate growth.</p>
          <p>Enhance customer satisfaction to the highest level in all businesses.</p>
          <p>Achieve business excellence through the process of continual improvement.</p>
        </VisionText>
        <MissionImage />
      </VisionSection>

      <CoreValuesSection>
        <CoreValuesTitle>Core Values</CoreValuesTitle>
        <ValuesContainer>
          <ValueItem>
            <ValueIcon>👥</ValueIcon>
            <h3>Focus on Customers</h3>
            <p>Communicate openly and demonstrate integrity in all activities.</p>
          </ValueItem>
          <ValueItem>
            <ValueIcon>🔍</ValueIcon>
            <h3>Transparency</h3>
            <p>Communicate openly and demonstrate integrity in all activities.</p>
          </ValueItem>
          <ValueItem>
            <ValueIcon>⚙️</ValueIcon>
            <h3>Stakeholder Appreciation</h3>
            <p>Develop a committed and responsive community of Employees, Distributors and Vendors.</p>
          </ValueItem>
          <ValueItem>
            <ValueIcon>📈</ValueIcon>
            <h3>Performance Recognition</h3>
            <p>Demonstrate passion for performance through anticipation, speed and flexibility.</p>
          </ValueItem>
          <ValueItem>
            <ValueIcon>🌍</ValueIcon>
            <h3>Rewarding Growth</h3>
            <p>Embrace growth through innovation and entrepreneurship.</p>
          </ValueItem>
        </ValuesContainer>
      </CoreValuesSection>

      <AwardsSection id="awards">
        <AwardsTitle>Awards & Recognition</AwardsTitle>
        <AwardsContainer>
          <AwardItem>
            <AwardImage />
            <h3>Best Workplaces in Manufacturing – 2021</h3>
            <p>Great Place to Work® Institute’s recognition of manufacturing companies that create High-Trust, High-Performance Culture for their employees</p>
          </AwardItem>
          <AwardItem>
            <AwardImage />
            <h3>Golden Peacock Award for Innovation – 2020</h3>
            <p>Instituted by the Institute of Directors (IOD), designed to encourage systemic innovation in organization to make new products and services</p>
          </AwardItem>
          <AwardItem>
            <AwardImage />
            <h3>Exemplars – Most Inclusive Companies – 2020</h3>
            <p>Working Mother & Avtar Best Companies for Women in India (BCWI) strive for inclusion through Most Inclusive Companies Index (MICI)</p>
          </AwardItem>
          <AwardItem>
            <AwardImage />
            <h3>Great Place to Work – 2020</h3>
            <p>Great Place to Work® Institute’s recognition for defining great workplace culture of trust and performance</p>
          </AwardItem>
        </AwardsContainer>
      </AwardsSection>

      <Footer />
    </AboutUsContainer>
  );
};

export default AboutUs;