import styled from "styled-components";
import { Header, Body } from "./type";

const Maps = () => {
  return (
    <Wrapper>
      <Row>
        <Header>Maps</Header>
        <br/>
        <Body>Below are some helpful maps that will help you navigate around campus and this year's hacker space</Body>
      </Row>

      <MapRow>
        <Header>3D</Header>
        <MapImg src="/static/map/3D.png" />
      </MapRow>

      <MapRow>
        <Header>Flat</Header>
        <MapImg src="/static/map/FLAT.png" />
      </MapRow>

      <MapRow>
        <Header>Campus</Header>
        <MapImg src="/static/map/CAMPUS.png" />
      </MapRow>

      {/* No shame */}
      <div style={{
        paddingBottom: 100
      }}/>
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
  flex-direction: column;
`;

const MapRow = styled(Row)`
  margin-top: 48px;
  text-align: center;
`;

const MapImg = styled.img`
  width: 100%;
  border: 8px solid #ff8379;
  box-sizing: border-box;
  border-radius: 2px;
`;

export default Maps;
