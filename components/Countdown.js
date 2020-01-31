import styled from "styled-components";
import ReactCountdown from "react-countdown";

import { Header, Body } from "./type";

const Countdown = () => {
  return (
    <Wrapper>
      <Row>
        <CountdownContainer>
          <h2>Time Till Hacking Starts</h2>
          <ReactCountdown date={new Date("Jan 31, 2020 9:00 PM")}>
            Hacking has begun!
          </ReactCountdown> 
        </CountdownContainer>
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
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const CountdownContainer = styled.div`
  background: #ff8379;
  color: #FFFFFF;
  width: 100%;
  padding: 24px 18px;
  border-radius: 6px;
  text-align: center;
  box-sizing: border-box;

  h2 {
    font-size: 18px;
    margin-bottom: 12px;
  }

  span {
    font-size:48px;
    font-weight: bold;
  }
`;

export default Countdown;
