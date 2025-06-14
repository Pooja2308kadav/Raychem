import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: rgb(56, 55, 114);
  padding: 3rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  color: #000;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 2.7rem;
  flex: 1 1 400px;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
`;

const Title = styled.h3`
  color: #11357e;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Highlight = styled.span`
  color: #d92128;
  font-weight: bold;
`;

const Link = styled.a`
  display: inline-block;
  color: #11357e;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CapabilitiesQuickLinks = () => {
  return (
    <Section>
      <Card>
        <Title>Capabilities</Title>
        <Description>
          Lasting legacy and thinking beyond the horizon, Raychem RPG developed connections for a
          lifetime, not only through solutions but with collaborations and partnerships with their stakeholders.
        </Description>
        <Description>
          <Highlight>Leader in Domestic Gas Meter for City Gas Distribution Networks in India</Highlight>
        </Description>
        <Link href="#">More &#x25BC;</Link>
      </Card>

      <Card>
        <Title>Quick Links that will interest you</Title>
        <Description>View our offerings to suit your business interests.</Description>
        <Description>
          <Link href="#">Job listing &#x276F;</Link>
          <br />
          <Link href="#">Facility &#x276F;</Link>
        </Description>
        <Link href="#">More &#x25BC;</Link>
      </Card>
    </Section>
  );
};

export default CapabilitiesQuickLinks;
