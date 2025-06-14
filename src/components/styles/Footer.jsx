import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

// Footer color variables
const footerBg = 'linear-gradient(135deg, #2c2b57 0%, #3f3967 50%, #312e5c 100%)';
const footerOverlay = 'linear-gradient(45deg, rgba(79, 172, 254, 0.05) 0%, rgba(0, 242, 254, 0.02) 100%)';
const footerTextColor = '#ffffff';
const footerLinkColor = 'rgba(255, 255, 255, 0.85)';
const footerInputBg = 'rgba(255, 255, 255, 0.08)';
const footerBorderColor = 'rgba(255, 255, 255, 0.2)';
const footerButtonHover = 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)';
const certificationBoxBg = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)';
const certificationBoxBorder = 'rgba(255, 255, 255, 0.3)';
const accentColor = '#4facfe';

// Footer container with enhanced background
export const FooterContainer = styled.footer`
  background: ${footerBg};
  position: relative;
  color: ${footerTextColor};
  width: 100%;
  overflow: hidden;
  padding-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${footerOverlay};
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(ellipse at center right, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
    z-index: 1;
  }
`;

export const FooterDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.3) 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 3s ease-in-out infinite;
  z-index: 2;
`;

export const FooterTop = styled.div`
  text-align: center;
  padding: 2.5rem 1rem;
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0.5rem;
  }
`;

export const FooterTitle = styled.h2`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
  margin: 0;
  background: linear-gradient(45deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.9) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  position: relative;
  z-index: 2;
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

// Certification section
export const CertificationSection = styled.div`
  flex: 1;
  min-width: clamp(250px, 40vw, 350px);
  max-width: 400px;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (max-width: 1024px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const CertificationRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const CertificationBox = styled.div`
  border: 2px solid ${certificationBoxBorder};
  padding: 0.75rem;
  background: ${certificationBoxBg};
  backdrop-filter: blur(10px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: 500;
  color: ${footerTextColor};
  transition: all 0.3s ease;
  min-height: 60px;

  .cert-text {
    line-height: 1.4;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%);
  }
`;

// Newsletter section
export const NewsletterSection = styled.div`
  flex: 1;
  min-width: clamp(250px, 40vw, 350px);
  max-width: 400px;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  form {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 1024px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  margin-top: 0.75rem;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  .country-code {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    padding: 0.625rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: clamp(0.75rem, 2vw, 0.875rem);
    border: 1px solid ${footerBorderColor};
    border-right: none;
  }
`;

export const Input = styled.input`
  background: ${footerInputBg};
  backdrop-filter: blur(10px);
  border: 1px solid ${footerBorderColor};
  color: ${footerTextColor};
  padding: 0.625rem 0.9375rem;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  flex-grow: 1;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%);
  border: 1px solid ${footerBorderColor};
  border-left: none;
  color: ${footerTextColor};
  padding: 0 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  min-width: 80px;

  &:hover {
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%);
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const CheckboxInput = styled.input`
  margin-right: 0.625rem;
  margin-top: 0.125rem;
  transform: scale(1.2);
  accent-color: rgba(255, 255, 255, 0.8);
`;

export const CheckboxLabel = styled.label`
  font-size: clamp(0.6875rem, 1.8vw, 0.75rem);
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

// Social media section
export const SocialSection = styled.div`
  flex: 1;
  min-width: clamp(200px, 30vw, 300px);
  max-width: 350px;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;

  @media (max-width: 1024px) {
    min-width: 100%;
    max-width: 100%;
    text-align: center;
  }
`;

export const SocialTitle = styled.h3`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${footerTextColor};
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: clamp(0.875rem, 2vw, 1rem);
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (hover: none) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

// Footer links section
export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.25rem;
  padding: 1.5rem 5%;
  position: relative;
  z-index: 2;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  margin-top: 1.5rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 1.25rem 5%;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const LinksColumn = styled.div`
  animation: ${fadeInUp} 0.8s ease-out calc(0.1s * var(--index, 0)) both;
  max-width: 250px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const ColumnTitle = styled.h3`
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${footerTextColor};
  position: relative;
  padding-bottom: 0.375rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 25px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%);
    border-radius: 2px;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 0.5rem;

  span {
    color: ${footerLinkColor};
    text-decoration: none;
    font-size: clamp(0.75rem, 2vw, 0.8125rem);
    font-weight: 400;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
    padding: 0.1875rem 0;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%);
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${footerTextColor};
      transform: translateX(5px);

      &::before {
        width: 100%;
      }
    }

    @media (hover: none) {
      &:hover {
        transform: none;
      }
    }
  }
`;

// Copyright section
export const CopyrightSection = styled.div`
  background: linear-gradient(135deg, rgba(44, 43, 87, 0.9) 0%, rgba(49, 46, 92, 0.9) 100%);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;

  .copyright-content {
    padding: 1.25rem 5%;
    text-align: center;

    .company-info {
      font-size: clamp(0.75rem, 2vw, 0.875rem);
      color: ${footerTextColor};
      margin-bottom: 0.375rem;
      font-weight: 500;
    }
  }
`;

export default {
  FooterContainer,
  FooterTop,
  FooterTitle,
  FooterContent,
  CertificationSection,
  CertificationRow,
  CertificationBox,
  NewsletterSection,
  InputGroup,
  Input,
  SubmitButton,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  SocialSection,
  SocialTitle,
  SocialIcons,
  SocialIcon,
  FooterLinks,
  LinksColumn,
  ColumnTitle,
  LinksList,
  LinkItem,
  CopyrightSection,
  FooterDecoration
};