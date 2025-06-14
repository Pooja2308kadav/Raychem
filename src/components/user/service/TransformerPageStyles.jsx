import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
`;

export const Header = styled.div`
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

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4vw;
  width: 100%;

  @media (max-width: 480px) {
    padding: 0 2vw;
  }
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  opacity: 0.9;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.9;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 4vw;

  @media (max-width: 480px) {
    padding: 30px 2vw;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
`;

export const RightContent = styled.div`
  flex: 1;
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const DownloadButton = styled.button`
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
  min-height: 44px;

  &:hover {
    background: #333;
    color: white;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const TransformerImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  loading: lazy;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const ServicesSection = styled.div`
  margin-bottom: 80px;

  @media (max-width: 480px) {
    margin-bottom: 48px;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  loading: lazy;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

export const ServiceContent = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ServicesGridBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ApproachSection = styled.div`
  margin-bottom: 80px;

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;

export const ApproachTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ApproachContent = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ApproachText = styled.div`
  flex: 1;
`;

export const ApproachParagraph = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #666;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ApproachImage = styled.img`
  flex: 1;
  width: 100%;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const CaseStudiesSection = styled.div`
  background: #f8f9fa;
  padding: 80px 4vw;

  @media (max-width: 480px) {
    padding: 40px 2vw;
  }
`;

export const CaseStudiesTitle = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const CaseStudySlider = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: flex;

  align-items: center;
`;

export const CaseStudyContent = styled.div`
  background: url('https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1200&h=600&fit=crop') center/cover;
  height: 400px;
  border-radius: 8px;
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
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    height: 600px;
  }
`;

export const CaseStudyText = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  padding: 60px 20px;

  @media (max-width: 480px) {
    
    font-size: 14px;
  }
`;

export const CaseStudyCompany = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const CaseStudyProject = styled.h4`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CaseStudyDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 480px) {
    font-size: 10px;
  }
    @media (max-width: 320px) {
    font-size: 8px;
  }
`;

export const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const SliderButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 40px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

export const SliderIndicator = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;