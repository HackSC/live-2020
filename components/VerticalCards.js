import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 93.75%;
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 64px;

  ${({ theme }) => theme.media.desktop`
    flex-wrap: wrap;
  `}
`;

const Card = styled.div`
  border-radius: 8px;
  width: 24%;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  height: 380px;
  perspective: 1000px;
  cursor: pointer;

  &:hover {
    > div {
      transform: rotateY(180deg);
    }
  }

  ${({ theme }) => theme.media.desktop`
    width: 48%;
    margin-left: 4px;
    margin-right: 4px;
    margin-bottom: 26px;
  `}

  ${({ theme }) => theme.media.mobile` 
    width: 100%;
  `}

  img {
    display: block;
    max-width: 100%;
    height: 148px;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-weight: 700;
    font-size: 22px;
    text-align: center;
    margin-top: 35px;
    text-transform: uppercase;
    color: ${({ color }) => color};
  }

  h4 {
    font-family: "Proggy";
    font-size: 24px;
    text-transform: uppercase;
    text-align: left;
    padding-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    border-top: 5px solid ${({ color }) => color};
  }

  p {
    font-size: 14px;
    color: #757575;
    text-align: center;
    margin-top: 16px;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 18px;
    line-height: 20px;
  }
`;

const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 8px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
  padding: 36px 0;
  box-sizing: border-box;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(0deg);
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  p {
    text-align: left;
    color: black;
    font-size: 16px;
    line-height: 24px;
  }
`;

export { Cards, Card, CardContent, CardFront, CardBack };
