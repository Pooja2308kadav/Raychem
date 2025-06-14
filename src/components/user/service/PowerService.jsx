import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../../components/user/layouts/Navbar';
import Footer from '../../../components/user/Footer';
import PowerServices from '../../../assets/powerServices.jpg';
import image from '../../../assets/powerServices3.jpg';
import Serviceimg1 from '../../../assets/serviceimg1.jpg';
import Serviceimg2 from '../../../assets/serviceimg2.jpg';
import Serviceimg3 from '../../../assets/serviceimg3.jpg';
import Serviceimg4 from '../../../assets/serviceimg4.jpg';
import serviceCase1 from '../../../assets/ser1.jpeg';
import serviceCase2 from '../../../assets/ser2.jpeg';
import { HeroSection } from '../layouts/HeroSection';
import {
  Container,
  HeroTitle,
  HeroSubtitle,
  Breadcrumb,
  MainContent,
  PowerServicesSection,
  ServiceImage,
  ServiceContent,
  SectionTitle,
  ServiceDescription,
  DownloadButton,
  ServicesGrid,
  ServicesTitle,
  ServicesContainer,
  ServiceCard,
  ServiceCardImage,
  ServiceCardContent,
  ServiceCardTitle,
  ServiceCardDescription,
  ServiceCardOverlay,
  OverlayTitle,
  OverlayDescription,
  CaseStudiesSection,
  CaseStudiesTitle,
  SliderContainer,
  SliderContent,
  SliderTextContent,
  SliderTitle,
  SliderSubtitle,
  SliderDescription,
  SliderNavigation,
  NavButton,
  SlideCounter,
} from './PowerServiceStyles';

const PowerServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroTitle = 'With Electric Vehicle consider making a green switch';

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Power Services', link: '/powerservice' },
  ];

  const services = [
    {
      id: 'underground',
      title: 'Underground Cable Fault Maintenance on 24/7 basis',
      shortTitle: 'RayLine & Jointing Installation Services',
      description:
        'Under the brand name, Rayline 24 × 7, we offer Cable Fault Management Services f...',
      fullDescription:
        'Under the brand name, Rayline 24 × 7, we offer Cable Fault Management Services for power distribution utilities with end-to-end solutions for maintenance of cable faults including excavation, testing, jointing and backfilling. We restore cable networks and support EPCs, State and Central Transmission & Distribution companies with supervision and jointing services cable accessories up to 220kV. We also undertake AMCs from industrial customers.',
      image: Serviceimg1,
    },
    {
      id: 'customized',
      title: 'Customized Solution Services',
      description: 'We provide customized solutions to improve system reliability and efficiency...',
      fullDescription:
        'We provide customized solutions to improve system reliability and efficiency, offering end-to-end engineering solutions tailored to specific customer requirements and industry standards.',
      image: Serviceimg2,
    },
    {
      id: 'amc',
      title: 'AMC',
      description: 'Years of experience working with industries and honing excellent project managem...',
      fullDescription:
        'Years of experience working with industries and honing excellent project management skills, we provide comprehensive Annual Maintenance Contract services ensuring optimal performance and reliability.',
      image: Serviceimg3,
    },
    {
      id: 'training',
      title: 'Training',
      description: 'Jointers require precision, accuracy and high level of safety precautions whils...',
      fullDescription:
        'Jointers require precision, accuracy and high level of safety precautions whilst carrying out cable jointing work. Our comprehensive training programs ensure skilled professionals with proper safety protocols.',
      image: Serviceimg4,
    },
  ];

  const caseStudies = [
    {
      title: 'Cable Fault Restoration Project',
      subtitle: 'Utility Company A',
      description:
        'Successfully restored a critical underground cable network for a major utility provider, reducing downtime by 40% through efficient fault detection and jointing services.',
      additionalInfo: 'Completed within 72 hours, ensuring minimal disruption to power supply.',
      backgroundImage: serviceCase1,
    },
    {
      title: 'Customized Power Solution',
      subtitle: 'Industrial Client B',
      description:
        'Designed and implemented a tailored power distribution solution, improving system efficiency by 25% and reducing operational costs for a large industrial client.',
      additionalInfo: 'Solution included advanced monitoring and maintenance protocols.',
      backgroundImage: serviceCase2,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const handleDownloadCatalog = async () => {
    try {
      const pdfUrl = '/assets/service-catalog-power-services.pdf';
      const response = await fetch(pdfUrl, { method: 'HEAD' });

      if (!response.ok) {
        alert(
          'PDF file not found. Please ensure the file exists at: public/assets/service-catalog-power-services.pdf',
        );
        return;
      }

      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Raychem-Power-Services-Catalog.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      try {
        window.open('/assets/service-catalog-power-services.pdf', '_blank');
      } catch (openError) {
        alert('Unable to download or open PDF. Please check if the file exists.');
      }
    }
  };

  return (
    <Container>
      <Navbar />
      <HeroSection backgroundImage={PowerServices} title={heroTitle} breadcrumbs={breadcrumbs} />
      <MainContent>
        <PowerServicesSection>
          <ServiceImage src={image} alt="Power Services" />
          <ServiceContent>
            <SectionTitle>Power Services</SectionTitle>
            <ServiceDescription>
              Backed by decades of experience in the industry, Raychem RPG provides end-to-end
              customized solutions for reliable connection, asset protection, and loss reduction in
              electrical networks and equipment. We offer solutions to improve reliability and
              efficiency of power systems, maximizing output and increasing return on investment (ROI).
            </ServiceDescription>
            <DownloadButton onClick={handleDownloadCatalog}>Download Service Catalog</DownloadButton>
          </ServiceContent>
        </PowerServicesSection>

        <ServicesGrid>
          <ServicesTitle>Range of Services We Offer</ServicesTitle>
          <ServicesContainer>
            {services.map((service) => (
              <ServiceCard key={service.id}>
                <ServiceCardImage src={service.image} alt={service.title} />
                <ServiceCardContent>
                  <ServiceCardTitle>{service.shortTitle || service.title}</ServiceCardTitle>
                  <ServiceCardDescription>{service.description}</ServiceCardDescription>
                </ServiceCardContent>
                <ServiceCardOverlay>
                  <OverlayTitle>{service.title}</OverlayTitle>
                  <OverlayDescription>{service.fullDescription}</OverlayDescription>
                </ServiceCardOverlay>
              </ServiceCard>
            ))}
          </ServicesContainer>
        </ServicesGrid>
      </MainContent>

      <CaseStudiesSection>
        <CaseStudiesTitle>Case Studies</CaseStudiesTitle>
        <SliderContainer>
          <SliderContent style={{ backgroundImage: `url(${caseStudies[currentSlide].backgroundImage})` }}>
            <SliderTextContent>
              <SliderTitle>{caseStudies[currentSlide].title}</SliderTitle>
              <SliderSubtitle>{caseStudies[currentSlide].subtitle}</SliderSubtitle>
              <SliderDescription>{caseStudies[currentSlide].description}</SliderDescription>
              <SliderDescription>{caseStudies[currentSlide].additionalInfo}</SliderDescription>
            </SliderTextContent>
            <SliderNavigation>
              <NavButton onClick={prevSlide} disabled={currentSlide === 0}>
                <ChevronLeft size={20} />
              </NavButton>
              <SlideCounter>
                {currentSlide + 1}/{caseStudies.length}
              </SlideCounter>
              <NavButton onClick={nextSlide} disabled={currentSlide === caseStudies.length - 1}>
                <ChevronRight size={20} />
              </NavButton>
            </SliderNavigation>
          </SliderContent>
        </SliderContainer>
      </CaseStudiesSection>
      <Footer />
    </Container>
  );
};

export default PowerServicesPage;