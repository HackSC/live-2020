import React from "react";
import styled from "styled-components";
import fetch from "isomorphic-fetch";
import Logo from "../assets/header_logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <LogoLink href="/">
          <img src={Logo} width="169" alt="HackSC 2020 logo" />
        </LogoLink>

        <Links>
          <a href="/">Live</a>
          <a href="/calendar">Calendar</a>
          <a href="/api-directory">API Directory</a>
          <a href="/maps">Maps</a>
          <a href="https://odyssey.hacksc.com">Odyssey</a>
        </Links>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px 0 30px;
`;

const Container = styled.div`
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const LogoLink = styled.a`
  ${({ theme }) => theme.media.tablet`
    width: 100%;
    display: block;
    text-align: center;
  `}
`;

const Links = styled.div`
  a {
    padding: 0 12px;
    color: #1c1c1c;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
  }

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    margin-top: 12px;
    text-align: center;
    flex-wrap: wrap;
  `}
`;

export default Navbar;
