import styled from "styled-components";

import { Header, Body } from "./type";
import SponsorLogos from "./SponsorLogos";
import Button from "./Button";

const Sponsors = () => {
  return (
    <Wrapper>
      <Row>
        <Column>
          <SponsorsHeader>Sponsors</SponsorsHeader>

          <Body>
            Each year, our sponsors help us unite 800+ emerging developers,
            designers, and builders. Our sponsors make it possible for hackers
            to build something they're proud of.
          </Body>
          <Body>
            Interested in sponsoring? E-mail us at{" "}
            <a href="mailto:sponsorship@hacksc.com" target="_blank">
              sponsorship@hacksc.com
            </a>
          </Body>

          <div>
            <LearnMoreButton as="a" href="/sponsor">
              Learn More
            </LearnMoreButton>
          </div>

          <SponsorLogos />
        </Column>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 75px;
  padding-bottom: 75px;
  flex-direction: column;
`;

const SponsorsHeader = styled(Header)`
  margin-bottom: 12px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet`
    flex-basis: 100%;
  `}
`;

const LearnMoreButton = styled(Button)`
  font-weight: 600;
  display: inline-block;
  padding: 16px 40px;
`;

export default Sponsors;
