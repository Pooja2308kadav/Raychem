import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

export const Navigation = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

export const NavItem = styled.li`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  color: ${props => props.active ? '#2b6cb0' : '#4a5568'};
  font-weight: ${props => props.active ? '600' : '500'};
  
  &:hover {
    background: #f7fafc;
    color: #2b6cb0;
  }
`;

export const ContactButton = styled.button`
  background: #e53e3e;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c53030;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  }
`;

export const HeroSection = styled.section`
  padding: 4rem 2rem;
  background: white;
  margin: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
`;

export const HeroText = styled.div`
  flex: 1;
  color: #2d3748;
`;

export const Quote = styled.div`
  margin-bottom: 2rem;
`;

export const QuoteText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2b6cb0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  quotes: """ """ "'" "'";
  
  &::before {
    content: open-quote;
    font-size: 2rem;
    color: #e53e3e;
    vertical-align: -0.4rem;
  }
  
  &::after {
    content: close-quote;
    font-size: 2rem;
    color: #e53e3e;
    vertical-align: -0.4rem;
  }
`;

export const AuthorInfo = styled.div`
  text-align: right;
`;

export const AuthorName = styled.h3`
  font-size: 1.5rem;
  color: #2b6cb0;
  margin: 0;
  font-weight: 700;
`;

export const AuthorTitle = styled.p`
  color: #718096;
  margin: 0.5rem 0 0 0;
  font-style: italic;
`;

export const ServicesSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4a5568;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 300;
  letter-spacing: -1px;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  height: 300px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover { 
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ServiceContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
`;

export const ServiceDescription = styled.p`
  color: #e2e8f0;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
`;

export const ServiceButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #2d3748;
  }
`;

export const PromiseSection = styled.section`
  padding: 4rem 2rem;
  background: white;
  margin: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const PromiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PromiseCard = styled.div`
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: #fff;
    border-color:rgb(167, 4, 4);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const PromiseIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: sepia(1) hue-rotate(340deg) saturate(1.5);
`;

export const PromiseTitle = styled.h4`
  color: #2d3748;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0;
  line-height: 1.4;
`;

export const ChatButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #22c55e;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(34, 197, 94, 0.4);
  }
`;