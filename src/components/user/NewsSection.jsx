import React from 'react';
import NewsSlider from './NewsSlider';
import styled from 'styled-components';
import Image1 from "../../assets/MigrationProject.jpg";
import Image2 from "../../assets/RaychemRPGNews.png";
import Image3 from "../../assets/EPCCustomerWin.jpg";

const NewsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const NewsHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: normal;
  color: #333;
  position: relative;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 1px;
    background-color: #ddd;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
    margin-bottom: 30px;

    &::after {
      width: 150px;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 25px;

    &::after {
      width: 120px;
    }
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 20px;

    &::after {
      width: 100px;
    }
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 1024px) {
    grid-gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

const MainNewsCard = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  border: 1px solid #eee;
  overflow: hidden;
  position: relative;
  height: 500px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const MainNewsImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const NewsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: white;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const EventBadge = styled.span`
  background-color: #f58220;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  display: inline-block;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 3px 6px;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 2px 5px;
    margin-bottom: 4px;
  }
`;

const MainNewsTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SmallNewsGrid = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 1024px) {
    grid-gap: 15px;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
    grid-gap: 20px;
  }
`;

const SmallNewsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #eee;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SmallNewsImage = styled.div`
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const SmallNewsContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const ArticleBadge = styled.span`
  background-color: #f58220;
  color: white;
  font-size: 10px;
  padding: 3px 6px;
  display: inline-block;
  margin-bottom: 8px;
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 9px;
    padding: 2px 5px;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    padding: 2px 4px;
    margin-bottom: 4px;
  }
`;

const SmallNewsTitle = styled.h3`
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
  color: #333;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const ViewAllButton = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  color: #333;
  padding: 8px 16px;
  cursor: pointer;
  margin: 30px auto 10px;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
    margin: 20px auto 5px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

const newsData = {
  small: [
    {
      id: 2,
      type: "ARTICLE",
      title: "MIGRATION PROJECT - Europe to India!",
      image: Image1
    },
    {
      id: 3,
      type: "ARTICLE",
      title: "Raychem RPG Celebrates Major Milestone with 'Make India' Initiative: Successfully Completing Rigorous PQ Test Protocols at CPRI for 24/kV Cable Accessories Manufactured in India",
      image: Image2
    },
    {
      id: 4,
      type: "ARTICLE",
      title: "EPC Customer Win!",
      image: Image3
    }
  ]
};

const NewsSection = () => {
  return (
    <NewsContainer>
      <NewsHeading>News & Updates</NewsHeading>
      
      <NewsGrid>
        <NewsSlider />
        
        <SmallNewsGrid>
          {newsData.small.map(news => (
            <SmallNewsCard key={news.id} onClick={() => console.log(`Clicked news ${news.id}`)}>
              <SmallNewsImage src={news.image} />
              <SmallNewsContent>
                <ArticleBadge>{news.type}</ArticleBadge>
                <SmallNewsTitle>{news.title}</SmallNewsTitle>
              </SmallNewsContent>
            </SmallNewsCard>
          ))}
        </SmallNewsGrid>
      </NewsGrid>
      
      <ViewAllButton>View All</ViewAllButton>
    </NewsContainer>
  );
};

export default NewsSection;