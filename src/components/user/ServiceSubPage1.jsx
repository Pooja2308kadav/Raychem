import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Navigation,
  Logo,
  NavList,
  NavItem,
  ContactButton,
  HeroSection,
  HeroContent,
  HeroImage,
  HeroText,
  Quote,
  QuoteText,
  AuthorInfo,
  AuthorName,
  AuthorTitle,
  ServicesSection,
  SectionTitle,
  ServicesGrid,
  ServiceCard,
  ServiceImage,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  ServiceButton,
  PromiseSection,
  PromiseGrid,
  PromiseCard,
  PromiseIcon,
  PromiseTitle,
  ChatButton
} from '../styles/ServicesubStyles';
import Image1 from "../../assets/TransformerServices.jpg"
import Image2 from "../../assets/powerServicesImg.jpg"
import JayaramanImg from "../../assets/Jayaraman.jpg"

const ServicesPage1 = () => {
  const services = [
    {
      id: 1,
      title: "Transformer Services",
      description: "We believe in offering solutions rather than selling products and have an in-house Services Team providing end-to-end solutions to our customers...",
      buttonText: "Discover Transformer Services",
      image: Image1
    },
    {
      id: 2,
      title: "Power Services",
      description: "Backed by decades of experience in the industry, Raychem RPG provides end-to-end customized solutions for reliable connection...",
      buttonText: "Discover Power Services",
      image: Image2
    }
  ];

  const promises = [
    { title: "RELIABLE", icon: "👍" },
    { title: "RESPONSIVE", icon: "🔄" },
    { title: "RECEPTIVE", icon: "👂" },
    { title: "LIFECYCLE PROMISE", icon: "🏆" },
    { title: "RIGHT FIRST TIME", icon: "✓" },
    { title: "AMC", icon: "📅" },
    { title: "MINIMUM DOWN TIME", icon: "⚠️" },
    { title: "PAN INDIA PARTNERS", icon: "🇮🇳" },
    { title: "SLA FRAMEWORK", icon: "📋" },
    { title: "FEEDBACK", icon: "💬" },
    { title: "PLANT LEVEL TROUBLESHOOTING", icon: "🔧" },
    { title: "HOLISTIC VIEW OF PLANT PERFORMANCE", icon: "📊" },
    { title: "24X7 SUPPORT", icon: "🔄" },
    { title: "REGULAR PRODUCT TRAINING", icon: "⚙️" },
    { title: "SPARE PARTS & CONSUMABLES AVAILABILITY", icon: "⚙️" },
    { title: "DEDICATED HOTLINE SUPPORT", icon: "👥" }
  ];

  return (
    <Container>

      <HeroSection>
        <HeroContent>
          <HeroImage src={JayaramanImg} alt="Jayaraman Ramakrishnan" />
          <HeroText>
            <Quote>
              <QuoteText>
                "India's electricity requirement to increase to more than 2,000 TWh by FY'27. This would require investment in capacity additions of more than US$ 300 billion."
              </QuoteText>
              <p>
                The potential for further growth in the power consumption is significant in India. The growing demand, network extension & upgradation, improved efficiency by reduction in AT&C loss and growth of cross-border trade presents wide range of opportunities across the value chain for Power Sector in India.
              </p>
            </Quote>
            <AuthorInfo>
              <AuthorName>Jayaraman Ramakrishnan</AuthorName>
              <AuthorTitle>National Head – Sales & Service</AuthorTitle>
            </AuthorInfo>
          </HeroText>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionTitle>Explore Our Services</SectionTitle>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceButton><Link to= "/transformerServices">
                  {service.buttonText}</Link></ServiceButton>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      <PromiseSection>
        <SectionTitle>Services Promise</SectionTitle>
        <PromiseGrid>
          {promises.map((promise, index) => (
            <PromiseCard key={index}>
              <PromiseIcon>{promise.icon}</PromiseIcon>
              <PromiseTitle>{promise.title}</PromiseTitle>
            </PromiseCard>
          ))}
        </PromiseGrid>
      </PromiseSection>

      <ChatButton>💬</ChatButton>
    </Container>
  );
};

export default ServicesPage1;