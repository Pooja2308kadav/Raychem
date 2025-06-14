import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const NavigationTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Tab = styled.div`
  color: ${props => (props.active ? '#e53e3e' : '#2d3748')};
  font-weight: 500;
  padding-bottom: 0.25rem;
  border-bottom: ${props => (props.active ? '2px solid #e53e3e' : '2px solid transparent')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #e53e3e;
    border-bottom: 2px solid #e53e3e;
  }
`;

export const OfferingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

export const OfferingCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const OfferingImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const OfferingContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

export const OfferingTitle = styled.h3`
  font-size: 1.125rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const OfferingDescription = styled.p`
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 0.75rem;
  line-height: 1.5;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const LearnMoreLink = styled.div`
  color: ${props => (props.children.includes('Discover') ? '#2d3748' : '#e53e3e')};
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  padding: ${props => (props.children.includes('Discover') ? '0.5rem 1rem' : '0')};
  background: ${props => (props.children.includes('Discover') ? '#e2e8f0' : 'transparent')};
  border-radius: ${props => (props.children.includes('Discover') ? '5px' : '0')};
  transition: background 0.3s ease;

  &:hover {
    ${props => props.children.includes('Discover') ? 'background: #cbd5e0;' : 'text-decoration: underline;'}
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

  ${props => !props.children.includes('Discover') && `
    &::after {
      content: '→';
      margin-left: 0.25rem;
    }
  `}
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  font-size: 1.125rem;
  color: #4a5568;
  margin-top: 40px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: #e53e3e;
  margin-top: 40px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;