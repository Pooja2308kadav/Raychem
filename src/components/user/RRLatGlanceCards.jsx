import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RRLimage1 from "../../assets/TechnologicalExcellence.jpg";
import RRLimage2 from "../../assets/PartnershipConnectivity.jpg";
import RRLimage3 from "../../assets/ProudTobe.jpg";

// Styled components
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1024px) {
    gap: 15px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack cards vertically */
    gap: 20px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    gap: 15px;
    padding: 8px;
  }
`;

const CardWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 480px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    flex: none; /* Remove flex growth */
    width: 100%; /* Full width for stacked layout */
    height: 380px;
  }

  @media (max-width: 480px) {
    height: 340px;
  }

  @media (max-width: 360px) {
    height: 300px;
  }
`;

const CardImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  color: white;
  transition: background 0.3s ease;
  
  &:hover {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.85));
  }

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 16px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)); /* Slightly darker overlay for better readability */
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 12px 0;

  @media (max-width: 1024px) {
    font-size: 22px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

const CardSubtitle = styled.h3`
  font-size: 18px;
  font-weight: normal;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 360px) {
    font-size: 13px;
  }
`;

const CardContent = styled.div`
  max-height: 0;
  overflow-y: auto;
  transition: max-height 0.5s ease, margin-top 0.5s ease;
  
  ${CardOverlay}:hover & {
    max-height: 200px;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    max-height: 100px; /* Always visible on smaller screens */
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    max-height: 80px;
    margin-top: 10px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }
`;

const CardParagraph = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 16px 0;

  @media (max-width: 1024px) {
    font-size: 13px;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }

  @media (max-width: 360px) {
    font-size: 10px;
    line-height: 1.4;
  }
`;

const CardButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1024px) {
    padding: 8px 14px;
    font-size: 13px;
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    padding: 7px 12px;
    font-size: 12px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 11px;
  }

  @media (max-width: 360px) {
    padding: 5px 8px;
    font-size: 10px;
  }
`;

// Card data
const cardData = [
  {
    id: 'tech-excellence',
    title: 'Technological Excellence',
    subtitle: 'through innovation',
    content: 'Technology Leadership in "Power Saving, Protection and Distribution" through continuous innovation, Raychem RPG offers customized solutions to customers in a collaborative partnership. It is a holistic approach in conserving energy, reducing carbon emissions and saving utility costs with world class technologies and systems.',
    image: RRLimage1,
    buttonText: 'Discover Tomorrow',
    link: '/innovation'
  },
  {
    id: 'partnership',
    title: 'Partnership with TE Connectivity',
    subtitle: '',
    content: 'Strategic alliance with TE Connectivity brings global expertise and advanced technologies to our customers. This partnership enables us to deliver cutting-edge solutions with world-class quality and reliability across various industries.',
    image: RRLimage2,
    buttonText: 'Read More',
    link: '/partnership'
  },
  {
    id: 'workplace',
    title: 'Proud to be called a Great Place',
    subtitle: 'to Work',
    content: 'At Raychem RPG, we foster a collaborative environment where innovation thrives and personal growth is encouraged. Our team comprises talented individuals who are passionate about making a difference through technology and sustainable solutions.',
    image: RRLimage3,
    buttonText: 'Say Hello to Happiness',
    link: '/careers'
  }
];

const RaychemCards = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = (link) => {
    navigate(link);
  };
  
  return (
    <div>
      <h1 style={{ 
        fontSize: '32px', 
        color: '#444', 
        fontWeight: 'normal', 
        maxWidth: '1200px', 
        margin: '20px auto 30px', 
        padding: '0 20px' 
      }}>
        RRL at a glance
      </h1>
      <CardsContainer>
        {cardData.map((card) => (
          <CardWrapper key={card.id}>
            <CardImage bgImage={card.image}>
              <CardOverlay>
                <CardTitle>{card.title}</CardTitle>
                {card.subtitle && <CardSubtitle>{card.subtitle}</CardSubtitle>}
                <CardContent>
                  <CardParagraph>{card.content}</CardParagraph>
                </CardContent>
                <CardButton onClick={() => handleButtonClick(card.link)}>
                  {card.buttonText}
                </CardButton>
              </CardOverlay>
            </CardImage>
          </CardWrapper>
        ))}
      </CardsContainer>
    </div>
  );
};

export default RaychemCards;