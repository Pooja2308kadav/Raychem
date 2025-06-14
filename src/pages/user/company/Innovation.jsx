import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from "../../../components/user/layouts/Navbar2"
import Footer from "../../../components/user/Footer";
import VisionImg from "../../../assets/Vision1.jpg"




// Styled Components
const InnovationContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #d32f2f;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  &:hover {
    color: #d32f2f;
  }
`;

const ContactButton = styled.button`
  background-color: #d32f2f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Sidebar = styled.div`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SidebarItem = styled.a`
  background-color: #1976d2;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: #1565c0;
  }
`;

const HeroSection = styled.section`
  background-color: #2c3e50; /* Placeholder background color */
  color: #fff;
  padding: 100px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroText = styled.div`
  flex: 1;
  padding-right: 50px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const HeroImage = styled.div`
  flex: 1;
  background-color: #ddd; /* Placeholder background color */
  height: 400px;
  border-radius: 10px;
`;

const WelcomeSection = styled.section`
  padding: 50px;
  display: flex;
  gap: 30px;
  background-color: #fff;
`;

const WelcomeImage = styled.div`
  flex: 1;
  background-color: #ddd▄; /* Placeholder background color */
  height: 300px;
  border-radius: 10px;
`;

const WelcomeText = styled.div`
  flex: 1;
`;

const StatsSection = styled.section`
  background-color: #2c3e50; /* Placeholder background color */
  color: #fff;
  padding: 50px;
  text-align: center;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
`;

const StatItem = styled.div`
  flex: 1;
`;

const StatNumber = styled.h2`
  font-size: 48px;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 18px;
`;

const FrameworkSection = styled.section`
  padding: 50px;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
`;

const FrameworkContent = styled.div`
  display: flex;
  gap: 30px;
`;

const FrameworkImage = styled.div`
  flex: 1;
  background-color: #ddd; /* Placeholder background color */
  height: 300px;
  border-radius: 10px;
`;

const FrameworkText = styled.div`
  flex: 1;
`;

const FrameworkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const FrameworkNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: #1976d2;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const ToolsSection = styled.section`
  padding: 50px;
  background-color: #fff;
`;

const ToolsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ToolCard = styled.div`
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 30%;
`;

const ToolImage = styled.div`
  background-color: #ddd; /* Placeholder background color */
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ToolTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ToolDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ReadMoreLink = styled.a`
  color: #d32f2f;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const AwardsSection = styled.section`
  padding: 50px;
  background-color: #fff;
`;

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Slider = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const AwardCard = styled.div`
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 23%;
  flex-shrink: 0;
`;

const AwardImage = styled.div`
  background-color: #ddd; /* Placeholder background color */
  height: 150px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const AwardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SliderButton = styled.button`
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;

const NewsletterSection = styled.section`
  background-color: #2c3e50; /* Placeholder background color */
  color: #fff;
  padding: 50px;
  text-align: center;
`;

// React Component
const Innovation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const awards = [
    { title: 'Chairman Award for Best Product 2020', image: '' },
    { title: 'RPG Innovation Festival Awards in 2015, 2016', image: '' },
    { title: 'Golden Peacock Award 2020', image: '' },
    { title: 'Elecrama 2020 - Best Innovative Product', image: '' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <InnovationContainer>
    <Navbar/>


      <HeroSection>
        <HeroText>
          <HeroTitle>Vision</HeroTitle>
          <HeroSubtitle>Technology leadership</HeroSubtitle>
        </HeroText>
        <HeroImage src={VisionImg} alt="Vision" />
      </HeroSection>

      <WelcomeSection>
        <WelcomeImage />
        <WelcomeText>
          <h2>Welcome to innovation at raychem rpg</h2>
          <p>
            Technology Leadership in "Power Saving, Protection and Distribution" through continuous innovation, Raychem RPG offers customized solutions to customers in a collaborative partnership. It is a holistic approach in conserving energy, reducing carbon emissions saving utility costs with world-class technologies and systems.
          </p>
          <p>
            Comprehensive framework, rigorous methods and tools trigger the innovation minds of our members in developing unique concepts that are aligned to company’s mission and goals. Nurturing and facilitating learning programs, Raychem RPG has built strong Innovation Culture at workplace.
          </p>
        </WelcomeText>
      </WelcomeSection>

      <StatsSection>
        <StatsContainer>
          <StatItem>
            <StatNumber>75+</StatNumber>
            <StatLabel>Patents</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>20+</StatNumber>
            <StatLabel>New Products Developed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>20+</StatNumber>
            <StatLabel>Business Challenges Addressed</StatLabel>
          </StatItem>
        </StatsContainer>
      </StatsSection>

      <FrameworkSection>
        <SectionTitle>Innovation Framework</SectionTitle>
        <FrameworkContent>
          <FrameworkImage />
          <FrameworkText>
            <FrameworkItem>
              <FrameworkNumber>01</FrameworkNumber>
              <div>
                <h3>Incremental Innovation</h3>
                <p>Optimizing current processes and products</p>
              </div>
            </FrameworkItem>
            <FrameworkItem>
              <FrameworkNumber>02</FrameworkNumber>
              <div>
                <h3>Substantial Innovation</h3>
                <p>Developing products and services new to company but not new in industry/market</p>
              </div>
            </FrameworkItem>
            <FrameworkItem>
              <FrameworkNumber>03</FrameworkNumber>
              <div>
                <h3>Breakthrough Innovation</h3>
                <p>Developing new products and services for first time use in industry/market</p>
              </div>
            </FrameworkItem>
          </FrameworkText>
        </FrameworkContent>
      </FrameworkSection>

      <ToolsSection>
        <SectionTitle>Tool & Techniques:</SectionTitle>
        <ToolsContainer>
          <ToolCard>
            <ToolImage />
            <ToolTitle>Theory of Inventive Problem Solving, TRIZ</ToolTitle>
            <ToolDescription>
              Theory of Inventive Problem Solving, TRIZ is a problem-solving, analysis and forecasting tool. It is...
            </ToolDescription>
            <ReadMoreLink href="#">Read More <FaArrowRight /></ReadMoreLink>
          </ToolCard>
          <ToolCard>
            <ToolImage />
            <ToolTitle>Design for Six Sigma (DFSS)</ToolTitle>
            <ToolDescription>
              Design for Six Sigma (DFSS) is a methodology of improvement that helps businesses create new...
            </ToolDescription>
            <ReadMoreLink href="#">Read More <FaArrowRight /></ReadMoreLink>
          </ToolCard>
          <ToolCard>
            <ToolImage />
            <ToolTitle>Design Thinking</ToolTitle>
            <ToolDescription>
              Design thinking is used to represent a set of cognitive, strategic, and practical processes by which...
            </ToolDescription>
            <ReadMoreLink href="#">Read More <FaArrowRight /></ReadMoreLink>
          </ToolCard>
        </ToolsContainer>
      </ToolsSection>

      <AwardsSection>
        <SectionTitle>Awards & Recognition</SectionTitle>
        <SliderContainer>
          <SliderButton onClick={prevSlide}>
            <FaArrowLeft />
          </SliderButton>
          <Slider>
            {awards.map((award, index) => (
              <AwardCard key={index} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                <AwardImage />
                <AwardTitle>{award.title}</AwardTitle>
              </AwardCard>
            ))}
          </Slider>
          <SliderButton onClick={nextSlide}>
            <FaArrowRight />
          </SliderButton>
        </SliderContainer>
      </AwardsSection>

      <NewsletterSection>
        <p>Stay in touch for updates</p>
      </NewsletterSection>
      <Footer />
    </InnovationContainer>
  );
};

export default Innovation;