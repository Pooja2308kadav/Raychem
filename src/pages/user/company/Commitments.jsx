import React from 'react';
import styled from 'styled-components';
import Navbar from "../../../components/user/layouts/Navbar2"
import Footer from "../../../components/user/Footer";



// Styled Components
const CommitmentsContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const BannerSection = styled.section`
  position: relative;
  background-color: #2c3e50; /* Placeholder background color */
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const BannerText = styled.div`
  z-index: 1;
`;

const BannerTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const BannerSubtitle = styled.p`
  font-size: 18px;
`;

const IntroSection = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 16px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CommitmentsGrid = styled.section`
  padding: 50px;
  background-color: #f5f7fa;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const CommitmentCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
`;

const CommitmentImage = styled.div`
  background-color: #ddd; /* Placeholder background color */
  height: 200px;
`;

const CommitmentContent = styled.div`
  padding: 20px;
`;

const CommitmentTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CommitmentDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const CallToActionSection = styled.section`
  background-color: #2c3e50; /* Placeholder background color */
  color: #fff;
  padding: 50px;
  text-align: center;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #d32f2f;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  &:hover {
    background-color: #b71c1c;
  }
`;

// React Component
const Commitments = () => {
  return (
    <CommitmentsContainer>
      <Navbar/>
      <BannerSection>
        <BannerOverlay />
        <BannerText>
          <BannerTitle>Our Commitments</BannerTitle>
          <BannerSubtitle>Driving sustainability and ethical practices for a better future</BannerSubtitle>
        </BannerText>
      </BannerSection>

      <IntroSection>
        <SectionTitle>Our Dedication</SectionTitle>
        <SectionText>
          Raychem RPG is committed to creating a positive impact through sustainable practices, ethical governance, and community engagement. We prioritize the well-being of our stakeholders, ensuring a safe and inclusive environment while driving long-term success.
        </SectionText>
      </IntroSection>

      <CommitmentsGrid>
        <SectionTitle>Our Focus Areas</SectionTitle>
        <GridContainer>
          <CommitmentCard>
            <CommitmentImage />
            <CommitmentContent>
              <CommitmentTitle>Sustainability</CommitmentTitle>
              <CommitmentDescription>
                We integrate sustainable practices into our operations to minimize environmental impact and promote resource efficiency.
              </CommitmentDescription>
            </CommitmentContent>
          </CommitmentCard>
          <CommitmentCard>
            <CommitmentImage />
            <CommitmentContent>
              <CommitmentTitle>Ethical Governance</CommitmentTitle>
              <CommitmentDescription>
                We uphold the highest standards of integrity in our business dealings, fostering trust with all stakeholders.
              </CommitmentDescription>
            </CommitmentContent>
          </CommitmentCard>
          <CommitmentCard>
            <CommitmentImage />
            <CommitmentContent>
              <CommitmentTitle>Community Engagement</CommitmentTitle>
              <CommitmentDescription>
                We actively support local communities through education, empowerment, and inclusive initiatives.
              </CommitmentDescription>
            </CommitmentContent>
          </CommitmentCard>
        </GridContainer>
      </CommitmentsGrid>

      <CallToActionSection>
        <SectionTitle>Partner With Us</SectionTitle>
        <SectionText>
          Join us in our mission to create a sustainable and inclusive future. Learn more about our initiatives and how you can contribute.
        </SectionText>
        <CTAButton href="#">Get Involved</CTAButton>
      </CallToActionSection>
      <Footer />
    </CommitmentsContainer>
  );
};

export default Commitments;