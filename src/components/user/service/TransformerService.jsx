import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import Navbar from "../../../components/user/layouts/Navbar"
import Footer from "../../../components/user/Footer";



const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  position: relative;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  opacity: 0.9;
`;

const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.9;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const ContentSection = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  font-weight: normal;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
`;

const DownloadButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  border: 2px solid #333;
  color: #333;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
    color: white;
  }
`;

const TransformerImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const ServicesSection = styled.div`
  margin-bottom: 80px;
`;

const ServicesTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  text-align: left;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ServiceContent = styled.div`
  padding: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const ServicesGridBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ApproachSection = styled.div`
  margin-bottom: 80px;
`;

const ApproachTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`;

const ApproachContent = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ApproachText = styled.div`
  flex: 1;
`;

const ApproachParagraph = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #666;
  margin-bottom: 25px;
`;

const ApproachImage = styled.img`
  flex: 1;
  width: 100%;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

const CaseStudiesSection = styled.div`
  background: #f8f9fa;
  padding: 80px 20px;
`;

const CaseStudiesTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`;

const CaseStudySlider = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const CaseStudyContent = styled.div`
  background: url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=600&fit=crop') center/cover;
  height: 600px;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 12px;
  }
`;

const CaseStudyText = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 60px;
`;

const CaseStudyCompany = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: 600;
`;

const CaseStudyProject = styled.h4`
  font-size: 20px;
  margin-bottom: 25px;
  font-weight: 400;
  opacity: 0.9;
`;

const CaseStudyDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.9;
`;

const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const SliderButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const SliderIndicator = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const TransformerServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      title: "Repair",
      description: "Well-equipped facility and resources are available to carry out repair of transformers at our workshop."
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      title: "Overhauling",
      description: "Services include Washing core coil assembly with clean oil and re-assembling with new gaskets."
    },
    {
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=200&fit=crop",
      title: "Erection, Testing & Commissioning",
      description: "Dedicated team of engineers are engaged in services of erecting, testing and commissioning."
    },
    {
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=300&h=200&fit=crop",
      title: "Spares",
      description: "Right Part at the right time reduces down time! We are fully equipped with spares."
    }
  ];

  const bottomServices = [
    {
      image: "https://images.unsplash.com/photo-1581091012184-b1b9b2b8b2b0?w=300&h=200&fit=crop",
      title: "Maintenance",
      description: "Comprehensive maintenance services to ensure optimal transformer performance."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      title: "Upgradation",
      description: "Modern upgradation services to enhance transformer capabilities and efficiency."
    }
  ];

  const caseStudies = [
    {
      company: "Bharat Petroleum Corp. Ltd. Mumbai Refinery (BPCL)",
      project: "Major Overhauling of 52.5MVA 22/11 kV Generator Transformer",
      description: "Ensuring power continuity at site with lowest downtime is the most critical requirement for site managers. The generator transformer installed at BPCL site required urgent maintenance. Procuring a new transformer would take a longer time and repairs at Services Workshop would result in time lapse during transit, not to mention the cost for either of the two options. Our service team offered to carry out major overhauling of the complete transformer at site in record time of 20 days. The performance parameters of the transformer were restored as that of a new transformer."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <Container>
      <Navbar/>
      <Header>
        <HeaderContent>
          <Breadcrumb>Home / Services / Transformer Services</Breadcrumb>
          <MainTitle>Transformer Services</MainTitle>
          <Subtitle>Unparalleled Customer Experience</Subtitle>
        </HeaderContent>
      </Header>

      <MainContent>
        <ContentSection>
          <LeftContent>
            <TransformerImage 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
              alt="Transformer Services"
            />
          </LeftContent>
          <RightContent>
            <SectionTitle>Transformer Services</SectionTitle>
            <Description>
              We strive each day to achieve our vision of growing our business by offering world class quality transformers and unparalleled customer experience. Raychem RPG believes in offering solutions than selling just products and have an in-house Services Team providing end-to-end solutions to our customers. We strive each day to achieve our vision of growing our business by offering world class quality transformers and unparallel customer experience.
            </Description>
            <DownloadButton>
              <Download size={20} />
              Download Service Catalog
            </DownloadButton>
          </RightContent>
        </ContentSection>

        <ServicesSection>
          <ServicesTitle>Range of services we offer</ServicesTitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceImage src={service.image} alt={service.title} />
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
          <ServicesGridBottom>
            {bottomServices.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceImage src={service.image} alt={service.title} />
                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGridBottom>
        </ServicesSection>

        <ApproachSection>
          <ApproachTitle>Our Approach</ApproachTitle>
          <ApproachContent>
            <ApproachText>
              <ApproachParagraph>
                When customers reach out to us with their concerns, after detailed discussion and understanding of the problems, Services Team designs solutions to minimize breakdown costs. On occasions when customers not able to move the installed unit to our workshop, we suggest site overhauling and repair methodologies.
              </ApproachParagraph>
              <ApproachParagraph>
                When customers reach out to us with their concerns, after detailed discussion and understanding of the problems, Services Team designs solutions to minimize breakdown costs. On occasions when customers not able to move the installed unit to our workshop, we suggest site overhauling and repair methodologies.
              </ApproachParagraph>
              <ApproachParagraph>
                Once the customers' gives the go ahead, Services Team meticulously plans each task, ensures availability of materials, arranges requisite tools and machinery at site, and finally allocates trained and skilled manpower to execute the jobs.
              </ApproachParagraph>
            </ApproachText>
            <ApproachImage 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop" 
              alt="Our Approach"
            />
          </ApproachContent>
        </ApproachSection>
      </MainContent>

      <CaseStudiesSection>
        <CaseStudiesTitle>Case Studies</CaseStudiesTitle>
        <CaseStudySlider>
          <CaseStudyContent>
            <CaseStudyText>
              <CaseStudyCompany>{caseStudies[currentSlide].company}</CaseStudyCompany>
              <CaseStudyProject>{caseStudies[currentSlide].project}</CaseStudyProject>
              <CaseStudyDescription>{caseStudies[currentSlide].description}</CaseStudyDescription>
            </CaseStudyText>
          </CaseStudyContent>
          <SliderControls>
            <SliderButton onClick={prevSlide}>
              <ChevronLeft size={24} />
            </SliderButton>
            <SliderIndicator>1/2</SliderIndicator>
            <SliderButton onClick={nextSlide}>
              <ChevronRight size={24} />
            </SliderButton>
          </SliderControls>
        </CaseStudySlider>
      </CaseStudiesSection>
      <Footer />
    </Container>
  );
};

export default TransformerServices;