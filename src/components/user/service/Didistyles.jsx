import styled from 'styled-components';

export const PageContainer = styled.div`
  font-family: Arial, sans-serif;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 4vw;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 10px 3vw;
  }

  @media (max-width: 480px) {
    padding: 8px 2vw;
  }
`;

export const Logo = styled.img`
  height: 40px;

  @media (max-width: 480px) {
    height: 32px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #1a3c6b;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ContactButton = styled.button`
  background-color: #e31e24;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  min-height: 44px;

  &:hover {
    background-color: #c81b20;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const SearchIcon = styled.span`
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 80vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

export const HeroBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
  loading: lazy;
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 50%;
  z-index: 1;
  padding: 0 4vw;

  @media (max-width: 768px) {
    max-width: 80%;
    padding: 0 3vw;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0 2vw;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 20px;
  margin-left: 40px;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-left: 10px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.6;
  margin-bottom: 30px;
  margin-left: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    margin-left: 10px;
  }
`;

export const RequestDemoButton = styled.button`
  margin-left: 40px;
  background-color: transparent;
  border: 2px solid #333;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  min-height: 44px;

  &:hover {
    background-color: #333;
    color: white;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
  }
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => (props.active ? '#333' : '#ccc')};
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;

export const PhoneMockup = styled.div`
  flex: 0 0 auto;
  width: 300px;
  height: 600px;
  background-color: #000;
  border-radius: 40px;
  padding: 20px;
  z-index: 1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 250px;
    height: 500px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 400px;
    padding: 10px;
    margin-top: 20px;
  }
`;

export const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 480px) {
    border-radius: 15px;
  }
`;

export const PhoneContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 480px) {
    padding: 10px;
    gap: 8px;
  }
`;

export const PhoneTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const PhoneDetails = styled.p`
  font-size: 0.9rem;
  color: #666;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const PhoneStatus = styled.p`
  font-size: 0.9rem;
  color: #1a3c6b;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const PhoneImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  loading: lazy;

  @media (max-width: 480px) {
    height: 80px;
  }
`;

export const ExperienceContainer = styled.section`
  padding: 50px 4vw;
  text-align: center;
  background-color: #fff;

  @media (max-width: 480px) {
    padding: 30px 2vw;
  }
`;

export const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ExperienceGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const ExperienceCard = styled.div`
  max-width: 300px;
  text-align: center;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const ReadyText = styled.p`
  font-size: 1.5rem;
  color: #1a3c6b;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const TestimonialsContainer = styled.section`
  padding: 50px 4vw;
  text-align: center;
  background-color: #f5f7fa;

  @media (max-width: 480px) {
    padding: 30px 2vw;
  }
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const TestimonialCard = styled.div`
  background-color: #1a3c6b;
  color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 15px;
  }
`;

export const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const TestimonialAuthor = styled.p`
  font-size: 0.9rem;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ContactContainer = styled.section`
  padding: 50px 4vw;
  text-align: center;
  background-color: #fff;

  @media (max-width: 480px) {
    padding: 30px 2vw;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContactIcon = styled.div`
  font-size: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const ContactText = styled.p`
  font-size: 1rem;
  color: #1a3c6b;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: white;
  background-color: #1a3c6b;
  padding: 20px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 15px;
  }
`;