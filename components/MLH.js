import styled from "styled-components";

const MLH = () => (
  <Badge
    id="mlh-trust-badge"
    href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=black"
    target="_blank"
  >
    <img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-black.svg"
      alt="Major League Hacking 2020 Hackathon Season"
    />
  </Badge>
);

const Badge = styled.a`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: 50px;
  top: 0;
  width: 10%;
  z-index: 10000;

  img {
    width: 100%;
  }
`;

export default MLH;
