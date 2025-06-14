import React, { useState } from 'react';
import styled from 'styled-components';
import TPM1 from "../../assets/TPM1.jpg"
import TPM2 from "../../assets/TPM2.jpg"
import TPM3 from "../../assets/TPM3.jpg"
import TPM4 from "../../assets/TPM4.jpg"
import TPM5 from "../../assets/TPM5.jpg"
import Navbar from './layouts/Navbar';
import Footer from "../../components/user/Footer"

// Styled components for the slider
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const AwardCard = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: 22%;
  height: 280px;
    margin: 0 10px;
    padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const AwardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const AwardText = styled.p`
  color: #1a73e8;
  font-size: 14px;
  margin: 10px 0 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  z-index: 1;
  ${({ direction }) => (direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background: ${({ active }) => (active ? '#1a73e8' : '#ccc')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

const AwardsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const awards = [
    [
      { image: TPM1 , text: 'TPM EXCELLENCE AWARD' },
      { image: TPM2, text: 'TPM CONSISTENCY AWARD' },
      { image: TPM3, text: 'TPM SPECIAL AWARD' },
      { image: TPM4, text: 'INDIAN MANUFACTURING EXCELLENCE AWARD (IMEA)' },
      
    ],
    [
       
        { image: TPM5, text: 'TPM EXCELLENCE AWARD' },
    ]

    // Add more slides if needed
   
  ];

  const totalSlides = awards.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (<>
  
    <Navbar/>
    <SliderContainer>
      <Arrow direction="left" onClick={handlePrev}>←</Arrow>
      <SliderWrapper currentSlide={currentSlide}>
        {awards.map((slide, index) => (
          <Slide key={index}>
            {slide.map((award, idx) => (
              <AwardCard key={idx}>
                <AwardImage src={award.image} alt={award.text} />
                <AwardText>{award.text}</AwardText>
                <AwardText>More info available on request</AwardText>
              </AwardCard>
            ))}
          </Slide>
        ))}
      </SliderWrapper>
      <Arrow direction="right" onClick={handleNext}>→</Arrow>
      <Dots>
        {awards.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Dots>
    </SliderContainer>
    <Footer/>
  </>

  );
};

export default AwardsSlider;