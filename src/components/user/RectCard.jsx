import React from "react";
import styled from "styled-components";
import Image from "../../assets/ed2.webp";

// Container with background image
const RectangleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80rem;
  max-width: 90%; /* Use percentage for better scaling */
  height: 200px;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px auto;

  @media (max-width: 1024px) {
    width: 90%;
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 280px; /* Increase height for very small screens to fit content */
    border-radius: 8px;
  }

  @media (max-width: 360px) {
    height: 300px; /* Further adjust for very small devices */
  }
`;

// Red overlay on top of the background
const RedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 0, 0, 0.5); /* Red with opacity */
  z-index: 1;
`;

// Content over the red overlay
const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%; /* Ensure content takes full width for better alignment */

  @media (max-width: 1024px) {
    padding: 25px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    align-items: center; /* Center content on very small screens */
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;

  span {
    color: #ffd4d4;
  }

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 8px;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1.5;
  max-width: 80%;

  @media (max-width: 1024px) {
    font-size: 15px;
    max-width: 85%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    max-width: 100%; /* Full width on small screens */
    margin-bottom: 15px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
    line-height: 1.4;
  }
`;

const ReadMoreButton = styled.button`
  background: #ff4d4f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #e04345;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    padding: 9px 18px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 7px 14px;
    font-size: 13px;
  }

  @media (max-width: 360px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const RectangleSection = () => {
  const handleButtonClick = () => {
    window.location.href = "https://rpgf.org/";
  };

  return (
    <RectangleContainer>
      <RedOverlay />
      <ContentWrapper>
        <Heading>
          <span>Touching Lives,</span> Spreading Joy
        </Heading>
        <Description>
          Helping societies with core initiatives in areas of Education,
          Employability, Community Development & Heritage Revival.
        </Description>
        <ReadMoreButton onClick={handleButtonClick}>Read More</ReadMoreButton>
      </ContentWrapper>
    </RectangleContainer>
  );
};

export default RectangleSection;