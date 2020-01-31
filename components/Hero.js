import React from "react";

import styled from "styled-components";

import { Header, Body, Bold, Italic } from "./type";

import DotFlower from "../assets/dot_flower.png";
import Hand from "../assets/hero_hand_la.png";
import GradientBlob from "../assets/hero_gradient_blob.png";
import Lines from "../assets/hero_lines_decoration.png";

const Hero = () => {
  return (
    <Wrapper>
      <CTA>
        <ItalicHeader>
          The future is in your hands at <Rainbow>HackSC 2020</Rainbow>
        </ItalicHeader>
        <Date>01.31.20 - 02.02.20</Date>

        <Body>
          <Bold>HackSC</Bold> is the University of Southern California’s largest
          hackathon. This year, we’re focused on bringing{" "}
          <Italic>
            <Bold>real</Bold>
          </Italic>{" "}
          solutions to those in need by pushing the boundaries of technology,
          innovation, and collaboration.
        </Body>

        <AppsClosed>
          Applications for HackSC 2020 have closed. Be on the lookout for status
          updates soon
        </AppsClosed>
      </CTA>
      <DotFlowerLeftGraphic
        src={DotFlower}
        alt="Dot flower graphic used for decoration"
      />
      <HandGraphic
        src={Hand}
        alt="Grayscale image of hand holding the city of LA"
      />
      <GradientBlobGraphic
        src={GradientBlob}
        alt="Gradient blob in the background"
      />
      <LinesGraphic src={Lines} alt="Lines graphic used for decoration" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 200px;
  padding-bottom: 200px;
  position: relative;

  ${({ theme }) => theme.media.desktop`
    padding-top: 100px;
    padding-bottom: 100px;
  `}

  ${({ theme }) => theme.media.tablet`
    padding-top: 50px;
    padding-bottom: 50px;
  `}
`;

const CTA = styled.div`
  width: 550px;

  ${({ theme }) => theme.media.desktop`
    width: 50%;
  `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
  `}
`;

const DotFlowerLeftGraphic = styled.img`
  position: absolute;
  left: -90px;
  top: 170px;
  z-index: -8;

  animation-name: fade;
  animation-duration: 1.5s;

  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`;

const HandGraphic = styled.img`
  position: absolute;
  left: -300%;
  top: -90px;
  z-index: -5;
  max-width: 1000px;
  animation-name: slideFromLeft;
  animation-duration: 1.5s;
  animation-delay: 0.25s;
  animation-fill-mode: forwards;

  ${({ theme }) => theme.media.handOverlap`
    animation-name: slideFromLeftTablet;
  `}

  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`;

const GradientBlobGraphic = styled.img`
  position: absolute;
  left: -50px;
  top: -30px;
  z-index: -10;
  max-width: 700px;
  animation-name: fade;
  animation-duration: 1.5s;

  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`;

const LinesGraphic = styled.img`
  position: absolute;
  left: -20%;
  top: 450px;
  z-index: -10;
  max-width: 700px;
  animation-name: fade;
  animation-duration: 1.5s;

  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`;

const ItalicHeader = styled(Header)`
  font-style: italic;
`;

const Rainbow = styled.span`
  background: -webkit-linear-gradient(0deg, #feda22, #ff8379);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-right: 8px;
`;

const Date = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin: 12px 0;
`;

const AppsClosed = styled.p`
  color: #ff8379;
  font-weight: 600;
  line-height: 22px;
  font-style: italic;
`;

export default Hero;
