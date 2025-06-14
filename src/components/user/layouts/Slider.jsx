import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image1 from "../../../assets/connectingworld.jpg";
import Image2 from "../../../assets/innovativesolutions.jpg";
import Image3 from "../../../assets/partnerofchoice.jpg";
import Image4 from "../../../assets/empoweredpeople.jpg";
import Image5 from "../../../assets/inspiringinnovation.jpg";

// Sample slide data
const slides = [
  {
    background: Image1,
    heading: "Connecting Your World",
    subtitle: "The promise of safe and reliable electrification to power ecosystems and empower communities",
  },
  {
    background: Image2,
    heading: "Innovative Solutions, Reliable Connections for a Lifetime",
    subtitle: "A comprehensive offering meeting worlds electrification needs",
  },
  {
    background: Image3,
    heading: "A Partner of Choice, Multitude of Industries",
    subtitle: "Proven Solutions, meeting Energy Efficiencies",
  },
  {
    background: Image4,
    heading: "Empowered People, Collaborative Culture",
    subtitle: "An inclusive and happy workplace built on pillars of unleashing talent, outperformance and touching lives",
  },
  {
    background: Image5,
    heading: "Inspiring Innovation, Creating the Future",
    subtitle: "Pioneering technologies, processes, and business practices, challenge the status quo and add value to our stakeholders",
  },
];

const HomeContainer = styled.div`
  position: relative;
  height: 92vh;
  overflow: hidden;
  padding-top: 60px; /* Adjust based on Navbar height */

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    height: 60vh;
    padding-top: 40px;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
  color: #fff;
  transform: translateX(${(props) => {
    if (props.active) return "0";
    if (props.direction === "next") {
      return props.isNext ? "100%" : "-100%";
    } else {
      return props.isNext ? "-100%" : "100%";
    }
  }});
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: transform 1s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 1.2s cubic-bezier(0.22, 0.61, 0.36, 1);
  z-index: ${(props) => (props.active ? 2 : 1)};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  transform: translateX(${(props) => (props.active ? "0" : "-180px")});
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: transform 1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s, opacity 1s cubic-bezier(0.22, 0.61, 0.36, 1) 0.4s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 3;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 15px;
  max-width: 700px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transform: translateY(${(props) => (props.active ? "0" : "20px")});
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: transform 0.8s ease-out 0.5s, opacity 0.8s ease-out 0.5s;

  span {
    color: #ff4d4f;
  }

  @media (max-width: 1024px) {
    font-size: 36px;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    max-width: 300px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  max-width: 600px;
  margin-bottom: 25px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transform: translateY(${(props) => (props.active ? "0" : "20px")});
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: transform 0.8s ease-out 0.6s, opacity 0.8s ease-out 0.6s;

  @media (max-width: 1024px) {
    font-size: 14px;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    max-width: 300px;
    margin-bottom: 15px;
  }
`;

const LearnMoreButton = styled.button`
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(${(props) => (props.active ? "0" : "20px")});
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: background 0.3s ease, color 0.3s ease, transform 0.8s ease-out 0.7s, opacity 0.8s ease-out 0.7s;

  &:hover {
    background:rgb(214, 58, 40);
    border: 2px solid rgb(214, 58, 40);
    color: white;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 20px;
    left: 30px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    bottom: 15px;
    left: 20px;
    gap: 8px;
  }
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const SlideCounter = styled.span`
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-right: 6px;
  }
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  background: ${(props) => (props.active ? "#fff" : "rgba(255, 255, 255, 0.5)")};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.2);
    background: ${(props) => (props.active ? "#fff" : "rgba(255, 255, 255, 0.8)")};
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 1200);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setDirection("next");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 1200);
  };

  const goToSlide = (index) => {
    if (animating) return;
    if (index === currentSlide) return;
    setAnimating(true);
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    setTimeout(() => setAnimating(false), 1200);
  };

  const getIsNext = (index) => {
    if (direction === "next") {
      return index === (currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    } else {
      return index === (currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }
  };

  return (
    <HomeContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          background={slide.background}
          active={index === currentSlide}
          isNext={getIsNext(index)}
          direction={direction}
          onError={() => console.log(`Failed to load image: ${slide.background}`)}
        >
          <TextContainer active={index === currentSlide}>
            <Heading active={index === currentSlide}>
              <span>{slide.heading.split(",")[0]}</span>
              {slide.heading.includes(",") ? "," : " "}
              {slide.heading.split(",").slice(1).join(",")}
            </Heading>
            <Subtitle active={index === currentSlide}>
              {slide.subtitle}
            </Subtitle>
            <LearnMoreButton active={index === currentSlide}>
              Learn More
            </LearnMoreButton>
          </TextContainer>
        </Slide>
      ))}
      <Navigation>
        <ArrowButton onClick={handlePrev} disabled={animating}>
          <FaArrowLeft />
        </ArrowButton>
        <Dots>
          <SlideCounter>{`${currentSlide + 1}/${slides.length}`}</SlideCounter>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Dots>
        <ArrowButton onClick={handleNext} disabled={animating}>
          <FaArrowRight />
        </ArrowButton>
      </Navigation>
    </HomeContainer>
  );
};

export default Slider;