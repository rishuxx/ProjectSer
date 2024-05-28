import React from "react";
import styled from "styled-components";
import washingMachine from "../../assets/washing.jpg";

const Container = styled.div`
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Heading = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  color: white;
  font-size: 18px;
  text-shadow: 1px 1px 2px #000000;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PlumbingServices = () => {
  return (
    <Container>
      <Image src={washingMachine} alt="Plumbing" />
      <TextContainer>
        <Heading>Expert Plumbing Services</Heading>
        <Paragraph>
          Our team of skilled plumbers offers comprehensive plumbing services
          for residential and commercial properties.
        </Paragraph>
      </TextContainer>
    </Container>
  );
};

export default PlumbingServices;
