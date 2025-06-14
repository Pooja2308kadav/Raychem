import React, { useState, useEffect } from 'react';
import Navbar from "../../../components/user/layouts/Navbar";
import Footer from "../../../components/user/Footer";
import sliderimg1 from "../../../assets/ser1.jpeg";
import sliderimg2 from "../../../assets/ser2.jpeg";
import {
  PageContainer,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  ContactButton,
  SearchIcon,
  HeroContainer,
  HeroBackground,
  HeroContent,
  HeroTitle,
  HeroDescription,
  RequestDemoButton,
  CarouselDots,
  Dot,
  PhoneMockup,
  PhoneScreen,
  PhoneContent,
  PhoneTitle,
  PhoneDetails,
  PhoneStatus,
  PhoneImage,
  ExperienceContainer,
  ExperienceTitle,
  ExperienceGrid,
  ExperienceCard,
  CardIcon,
  CardText,
  ReadyText,
  TestimonialsContainer,
  TestimonialsTitle,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  ContactContainer,
  ContactTitle,
  ContactInfo,
  ContactItem,
  ContactIcon,
  ContactText,
  FooterText
} from './Didistyles';
import styled from 'styled-components';

// Additional styled components for enhanced functionality
const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: url(${props => props.bgImage}) no-repeat center center;
  background-size: cover;
  opacity: ${props => props.active ? 1 : 0};
  transform: translateX(${props => props.active ? '0' : '50px'});
  transition: all 0.8s ease-in-out;
  pointer-events: ${props => props.active ? 'auto' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const VideoSection = styled.div`
  background: #f8fafc;
  padding: 5rem 2rem;
  text-align: center;
`;

const VideoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
`;

const VideoPlayer = styled.div`
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 2rem;
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
  background: #000;
`;

const VideoText = styled.div`
  text-align: left;
  
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1e293b;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.1rem;
    color: #64748b;
    line-height: 1.6;
  }
`;

const EnhancedPhoneContent = styled(PhoneContent)`
  background: white;
  border-radius: 20px 20px 0 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.8rem;
  
  .phone-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e2e8f0;
  }
  
  .phone-body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0;
  }
  
  .status-completed {
    color: #16a34a;
    font-weight: bold;
  }
  
  .kit-image {
    width: 100%;
    height: 80px;
    background: #f1f5f9;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
  }
`;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "RRPL Service App",
      description: "The Growing shift to underground electric cables highlights the rising significance of cable jointing for power supply. Raychem RPG's dedicated jointers invest 3-4 hours per joint, across various locations. Their commitment as system integrators is to prevent joint failures, which can cause power outages with substantial consequences for businesses and residents. Repairing a failed joint can incur costs at least five times higher than the initial deployment.",
      phoneId: "A71D0E18",
      phoneStatus: "Completed",
      image: sliderimg1
    },
    {
      title: "RRPL Service App",
      description: "Raychem RPG's mobile app provides comprehensive end-to-end tracking of field operations, including personnel, methods, tools, and site conditions. This ensures full traceability and allows for proactive measures against potential issues. Data collected is stored in the cloud for analysis, helping to enhance joint reliability and identify areas for improvement.",
      phoneId: "DD3F42B5",
      phoneStatus: "Completed",
      image: sliderimg2
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <PageContainer>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Slider */}
      <HeroContainer>
        <SliderContainer>
          {slides.map((slide, index) => (
            <Slide key={index} active={index === currentSlide} bgImage={slide.image}>
              <HeroContent>
                <HeroTitle>{slide.title}</HeroTitle>
                <HeroDescription>{slide.description}</HeroDescription>
                <RequestDemoButton>REQUEST DEMO</RequestDemoButton>
                <CarouselDots>
                  {slides.map((_, dotIndex) => (
                    <Dot 
                      key={dotIndex}
                      active={dotIndex === currentSlide}
                      onClick={() => handleDotClick(dotIndex)}
                    />
                  ))}
                </CarouselDots>
              </HeroContent>
           
            </Slide>
          ))}
        </SliderContainer>
      </HeroContainer>

      {/* Customer Experience Section */}
      <ExperienceContainer>
        <ExperienceTitle>Delightful Customer Experience</ExperienceTitle>
        <ExperienceGrid>
          <ExperienceCard>
            <CardIcon>👷</CardIcon>
            <CardText>
              Send detailed information on certified and fully equipped technicians to bring customer confidence in your services.
            </CardText>
          </ExperienceCard>
          <ExperienceCard>
            <CardIcon>🔌</CardIcon>
            <CardText>
              Send timely updates to customers via email for all jointing services over an email.
            </CardText>
          </ExperienceCard>
          <ExperienceCard>
            <CardIcon>⚡</CardIcon>
            <CardText>
              Send service reports on job completion and get customer feedbacks and ratings.
            </CardText>
          </ExperienceCard>
        </ExperienceGrid>
      </ExperienceContainer>

      {/* Video Section */}
      <VideoSection>
        <VideoContainer>
          <VideoPlayer>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Et_ZcANg-ig?si=mx9PpbxxVhPIFNHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </VideoPlayer>
          <VideoText>
            <h2>Seamless Cable Jointing Operations. Creating Memorable Service Experience.</h2>
            <p>
              A powerful and cost effective cable jointing service management app that streamlines your cable jointing services and elevates your customer experience.
            </p>
          </VideoText>
        </VideoContainer>
      </VideoSection>

      {/* Testimonials Section */}
      <TestimonialsContainer>
        <TestimonialsTitle>Testimonials</TestimonialsTitle>
        <TestimonialsGrid>
          <TestimonialCard>
            <TestimonialText>
              "The app is exceptionally well-designed, providing a valuable means to monitor on-field activities and proactively address potential issues. It significantly enhanced the service quality and traceability, making it an indispensable tool for cable jointing operations."
            </TestimonialText>
            <TestimonialAuthor>India's leading private power utility company</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>
              "This app has been a game-changer as an on-field cable jointer. It keeps me on track, records all my work and worksite operations, sends me timely work notifications, and significantly improves my productivity."
            </TestimonialText>
            <TestimonialAuthor>Cable Jointer</TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsContainer>

      {/* Contact Section */}
      <ContactContainer>
        <ContactTitle>Want To Know More? Contact Our Customer Interaction Cell</ContactTitle>
        <ContactInfo>
          <ContactItem>
            <ContactIcon>📞</ContactIcon>
            <ContactText>Contact Us: 02245745060</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>📧</ContactIcon>
            <ContactText>Email Us: cic@raychemrpg.com</ContactText>
          </ContactItem>
        </ContactInfo>
        <FooterText>Stay in touch for updates</FooterText>
      </ContactContainer>
      <Footer />
    </PageContainer>
  );
};

export default App;