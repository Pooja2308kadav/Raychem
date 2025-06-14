import React, { useState } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import VideoThumbnail from "../../assets/video.jpg";
import CapabilitiesQuickLinks from "./CapabilitiesLink";
import { Link } from "react-router-dom";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: rgb(56, 55, 114);

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 80px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 30px;
  }
`;

const VideoCard = styled.div`
  background: transparent;
  border-radius: 10px;
  padding: 30px;
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    max-width: 450px;
    padding: 25px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const WelcomeCard = styled.div`
  background: transparent;
  border-radius: 10px;
  padding: 30px;
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 1024px) {
    max-width: 350px;
    padding: 25px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const CardHeading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const CardText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 20px;
  line-height: 1.5;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 105%;
  height: 23rem;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1024px) {
    height: 20rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 18rem;
  }

  @media (max-width: 480px) {
    height: 15rem;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 75, 79, 0.8);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    background: rgba(255, 75, 79, 1);
  }

  svg {
    color: #fff;
    font-size: 24px;
    margin-left: 4px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;

    svg {
      font-size: 16px;
    }
  }
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`;

const LearnMoreButton = styled.button`
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

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const VideoAndWelcome = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <SectionContainer>
      <Div1>
        {/* Video Section */}
        <VideoCard>
          <VideoWrapper onClick={handlePlayClick}>
            {isPlaying ? (
              <VideoIframe
                src="https://www.youtube.com/embed/piXqh3wk5ZU?si=ZwjokIi0vitC1wxs&autoplay=1"
                title="Raychem RPG New Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <>
                <Thumbnail
                  src={VideoThumbnail}
                  alt="Video Thumbnail"
                  onError={() => console.log("Failed to load video thumbnail")}
                />
                <PlayButton>
                  <FaPlay />
                </PlayButton>
              </>
            )}
          </VideoWrapper>
        </VideoCard>

        {/* Welcome Paragraph */}
        <WelcomeCard>
          <CardHeading>
            <span>Welcome</span> to Raychem RPG
          </CardHeading>
          <CardText>
            Raychem RPG (P) Ltd., incorporated in 1989, is a 50:50 Joint Venture between TE Connectivity, U.S.A. and RPG Enterprises, India. It is one of the longest successful joint ventures in India spanning over 30 years.
            <br /><br />
            Built on foundation of trust and traditions, Raychem RPG is involved in engineering solutions and services. Pioneering smart products and technologies, the company caters to a wide range of industries and business segments.
          </CardText>
           <LearnMoreButton>
          <Link to ="http://localhost:5173/aboutus">
         Learn More
            </Link>
          </LearnMoreButton>
        </WelcomeCard>
      </Div1>

      {/* Capabilities Quick Links */}
      <CapabilitiesQuickLinks />
    </SectionContainer>
  );
};

export default VideoAndWelcome;