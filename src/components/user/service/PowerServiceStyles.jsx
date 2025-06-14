import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: white;
  font-family: 'Arial', sans-serif;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: white;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
  color: white;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const MainContent = styled.main`
  padding: 4rem 4vw;

  @media (max-width: 768px) {
    padding: 3rem 3vw;
  }

  @media (max-width: 480px) {
    padding: 2rem 2vw;
  }
`;

export const PowerServicesSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  object-fit: cover;
  loading: lazy;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const ServiceContent = styled.div`
  padding: 2rem 0;

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #374151;
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const DownloadButton = styled.button`
  background: white;
  color: #374151;
  border: 2px solid #d1d5db;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  min-height: 44px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e31e24;
    color: #e31e24;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

export const ServicesGrid = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 2rem;
  color: #374151;
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  height: 300px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

export const ServiceCardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  loading: lazy;

  @media (max-width: 480px) {
    height: 50%;
  }
`;

export const ServiceCardContent = styled.div`
  padding: 1rem;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) {
    height: 50%;
    padding: 0.75rem;
  }
`;

export const ServiceCardTitle = styled.h3`
  font-size: 1rem;
  color: #1e40af;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const ServiceCardDescription = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ServiceCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1e40af;
  color: white;
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const OverlayTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const OverlayDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CaseStudiesSection = styled.section`
  background: #f9fafb;
  padding: 4rem 4vw;
  margin: 0 -4vw;

  @media (max-width: 768px) {
    padding: 3rem 3vw;
    margin: 0 -3vw;
  }

  @media (max-width: 480px) {
    padding: 2rem 2vw;
    margin: 0 -2vw;
  }
`;

export const CaseStudiesTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #374151;
  margin-bottom: 3rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SliderContent = styled.div`
  background-size: cover;
  background-position: center;
  height: 500px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 3rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: 400px;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    height: 350px;
    padding: 1.5rem;
  }
`;

export const SliderTextContent = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SliderTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const SliderSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const SliderDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.8;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const SliderNavigation = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    bottom: 1rem;
    left: 1.5rem;
    gap: 0.75rem;
  }
`;

export const NavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

export const SlideCounter = styled.span`
  color: white;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;