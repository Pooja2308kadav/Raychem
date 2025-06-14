import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from "../../../components/user/layouts/Navbar2"
import Footer from "../../../components/user/Footer";



// Styled Components
const PeopleContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
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

const CultureSection = styled.section`
  padding: 50px;
  background-color: #fff;
  display: flex;
  gap: 30px;
`;

const CultureImage = styled.div`
  flex: 1;
  background-color: #ddd; /* Placeholder background color */
  height: 300px;
  border-radius: 10px;
`;

const CultureText = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  text-align: center;
`;

const ValuesSection = styled.section`
  padding: 50px;
  background-color: #f5f7fa;
`;

const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ValueCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 23%;
  text-align: center;
`;

const ValueIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const ValueTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const LeadershipSection = styled.section`
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

const LeaderCard = styled.div`
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 23%;
  flex-shrink: 0;
  text-align: center;
`;

const LeaderImage = styled.div`
  background-color: #ddd; /* Placeholder background color */
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 0 auto 20px;
`;

const LeaderName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const LeaderTitle = styled.p`
  font-size: 14px;
  color: #666;
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

const JoinUsSection = styled.section`
  background-color: #2c3e50; /* Placeholder background color */
  color: #fff;
  padding: 50px;
  text-align: center;
`;

const JoinUsButton = styled.a`
  display: inline-block;
  background-color: #d32f2f;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  &:hover {
    background-color: #b71c1c;
  }
`;

// React Component
const People = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leaders = [
    { name: 'John Doe', title: 'CEO', image: '' },
    { name: 'Jane Smith', title: 'COO', image: '' },
    { name: 'Michael Brown', title: 'CFO', image: '' },
    { name: 'Sarah Johnson', title: 'CTO', image: '' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % leaders.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  return (
    <PeopleContainer>
      <Navbar/>
      <HeroSection>
        <HeroText>
          <HeroTitle>Our People</HeroTitle>
          <HeroSubtitle>Empowering a culture of innovation and collaboration</HeroSubtitle>
        </HeroText>
        <HeroImage />
      </HeroSection>

      <CultureSection>
        <CultureImage />
        <CultureText>
          <h2>Our Culture</h2>
          <p>
            At Raychem RPG, we foster a culture of collaboration, innovation, and growth. Our employees are at the heart of everything we do, driving our mission to deliver cutting-edge solutions to our customers.
          </p>
          <p>
            We believe in empowering our people through continuous learning, open communication, and a supportive work environment. Our diverse team brings together a wealth of experience and perspectives, enabling us to tackle challenges and achieve excellence.
          </p>
        </CultureText>
      </CultureSection>

      <ValuesSection>
        <SectionTitle>Our Values</SectionTitle>
        <ValuesContainer>
          <ValueCard>
            <ValueIcon>🤝</ValueIcon>
            <ValueTitle>Collaboration</ValueTitle>
            <p>We work together to achieve shared goals and drive success.</p>
          </ValueCard>
          <ValueCard>
            <ValueIcon>💡</ValueIcon>
            <ValueTitle>Innovation</ValueTitle>
            <p>We encourage creativity and new ideas to stay ahead.</p>
          </ValueCard>
          <ValueCard>
            <ValueIcon>🌟</ValueIcon>
            <ValueTitle>Excellence</ValueTitle>
            <p>We strive for the highest standards in all we do.</p>
          </ValueCard>
          <ValueCard>
            <ValueIcon>🤗</ValueIcon>
            <ValueTitle>Respect</ValueTitle>
            <p>We value every individual and foster inclusivity.</p>
          </ValueCard>
        </ValuesContainer>
      </ValuesSection>

      <LeadershipSection>
        <SectionTitle>Leadership Team</SectionTitle>
        <SliderContainer>
          <SliderButton onClick={prevSlide}>
            <FaArrowLeft />
          </SliderButton>
          <Slider>
            {leaders.map((leader, index) => (
              <LeaderCard key={index} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                <LeaderImage />
                <LeaderName>{leader.name}</LeaderName>
                <LeaderTitle>{leader.title}</LeaderTitle>
              </LeaderCard>
            ))}
          </Slider>
          <SliderButton onClick={nextSlide}>
            <FaArrowRight />
          </SliderButton>
        </SliderContainer>
      </LeadershipSection>

      <JoinUsSection>
        <SectionTitle>Join Our Team</SectionTitle>
        <p>
          Be a part of a dynamic team that’s shaping the future of engineering solutions. Explore opportunities to grow and make an impact with Raychem RPG.
        </p>
        <JoinUsButton href="#">View Openings</JoinUsButton>
      </JoinUsSection>
      <Footer />
    </PeopleContainer>
  );
};

export default People;