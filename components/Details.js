import styled from "styled-components";

import { Header, Body } from "./type";

const Details = () => {
  return (
    <Wrapper>
      <Row>
        <Column>
          <DetailsHeader>HackSC Live</DetailsHeader>

          <Body>
            We're excited that you're here for HackSC 2020! We have a lot of great stuff planned for this weekend. From great speakers to helpful workshops to fun events, we hope we can provide you with a great 36 hours.
          </Body>
          <Body>
            You can check out what we were up to last year{" "}
            <a href="https://2019.hacksc.com" target="_blank">
              here
            </a>
            .
          </Body>
        </Column>

        <FactsColumn>
          <FactHeader>When?</FactHeader>
          <Fact>January 31 - February 2nd, 2020</Fact>

          <FactHeader>Where?</FactHeader>
          <Fact>On USC's campus</Fact>

          <FactHeader>Price?</FactHeader>
          <Fact>Free!</Fact>

          <FactHeader>How?</FactHeader>
          <Fact>Apps open up in November.</Fact>
        </FactsColumn>
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
  padding-top: 125px;
  flex-direction: column;
`;

const DetailsHeader = styled(Header)`
  margin-bottom: 12px;
`;

const FactHeader = styled.h2`
  font-family: "Proggy";
  font-size: 26px;
  width: fit-content;
  position: relative;
  margin-bottom: 3px;

  &:after {
    width: 105%;
    height: 30%;
    background: #feda22;
    display: block;
    content: "";
    position: absolute;
    bottom: 5px;
    left: -3px;
    z-index: -10;
  }
`;

const Fact = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 45px;
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
  flex-basis: 50%;

  ${({ theme }) => theme.media.tablet`
    flex-basis: 100%;
  `}
`;

const FactsColumn = styled(Column)`
  padding-left: 100px;
  padding-right: 100px;
  box-sizing: border-box;

  ${({ theme }) => theme.media.tablet`
    flex-basis: 100%;
    padding: 0;
  `}
`;

export default Details;
