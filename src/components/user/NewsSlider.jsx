import { useState, useEffect } from 'react';
import styled from 'styled-components';
import img1 from "../../assets/NewsSlider1.png";
import img2 from "../../assets/NewsSlider2.jpg";
import img3 from "../../assets/NewsSlider3.png";

// All styled components and the main slider component in one file
const SliderComponent = () => {
  // Sample slides data - replace these with your actual images and content
  const slides = [
    {
      tag: 'ARTICLE',
      title: 'Raychem RPG Celebrates Major Milestone with \'Make India\' Initiative',
      description: 'Successfully Completing Rigorous PQ Test Protocols at CPRI for 245KV Cable Accessories',
      image: img1
    },
    {
      tag: 'ARTICLE',
      title: 'Raychem RPG Showcases its Portfolio of Sustainable & Innovative Solutions',
      description: 'Raychem RPG, the leading player in the Energy segment, is at the 15th edition of ELECRAMA 2023',
      image: img2
    },
    {
      tag: 'ARTICLE',
      title: 'Raychem RPG\'s Workshop-on-Wheels service (WoW)',
      description: 'At Raychem RPG, we believe in taking steps a notch higher when it comes to customer support.',
      image: img3
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <SlideImage 
          key={index} 
          image={slide.image}

          active={index === currentSlide}
        />
      ))}
      
      <SlideContent>
        <Tag>{slides[currentSlide].tag}</Tag>
        <Title>{slides[currentSlide].title}</Title>
        <Description>{slides[currentSlide].description}</Description>
      </SlideContent>
      
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot 
            key={index} 
            active={index === currentSlide} 
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

// Styled components all in the same file
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
`;

const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.active ? 1 : 0)};
  z-index: ${props => (props.active ? 1 : 0)};
  z-index: 0;
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 60px;
  left: 30px;
  color: white;
  z-index: 2;
  max-width: 80%;

  
`;

const Tag = styled.div`
  background-color: rgba(255, 223, 126, 0.9);
  color: #000;
  padding: 5px 15px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  display: flex;
  gap: 8px;
  z-index: 2;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#e73c3e' : '#fff')};
  border: none;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0.5)};
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

export default SliderComponent;