import styled from "styled-components";

import { Header, Body } from "./type";
import { Cards, Card, CardContent, CardFront, CardBack } from "./VerticalCards";

import CivilRightsGraphic from "../assets/verticals/civil_rights.png";
import EquityGraphic from "../assets/verticals/equity.png";
import MentalHealthGraphic from "../assets/verticals/mental_health.png";
import SustainabilityGraphic from "../assets/verticals/sustainability.png";

const Verticals = () => {
  return (
    <>
      <Wrapper>
        <VerticalsHeader>Verticals</VerticalsHeader>

        <Row>
          <Column>
            <Header>Social Justice</Header>
          </Column>

          <Column>
            <Body>
              This year, we’re focusing on issues relating to social justice.
              The 4 verticals are: civil rights, sustainability, equity, and
              mental health. We’re encouraging every participant to tackle the
              problems plaguing today’s world and innovate ideas around them.
            </Body>
          </Column>
        </Row>
      </Wrapper>
      <Cards>
        <Card color="#FEDA22">
          <CardContent>
            <CardFront>
              <img
                src={CivilRightsGraphic}
                alt="Graphic that represents civil rights"
              />
              <h3>Civil Rights</h3>
              <p>
                Everyone deserves to feel comfortable in their own skin, online
                or off.
              </p>
            </CardFront>
            <CardBack>
              <h4>Civil Rights</h4>

              <p>
                Help provide technological solutions to issues such as online
                harassment, workplace misconduct, and bullying, in ways which
                are innovative, accessible, and straightforward.
              </p>
            </CardBack>
          </CardContent>
        </Card>

        <Card color="#86DCEA">
          <CardContent>
            <CardFront>
              <img
                src={SustainabilityGraphic}
                alt="Graphic that represents sustainability"
              />
              <h3>Sustainability</h3>
              <p>
                Mother Earth has a fever and it's in our best interest to cure
                her.
              </p>
            </CardFront>

            <CardBack>
              <h4>Sustainability</h4>

              <p>
                Find creative ways to help curb pollution of all varieties,
                enable access to better environmental scientific literature, or
                any other cause you see fit to help the planet we all share.{" "}
              </p>
            </CardBack>
          </CardContent>
        </Card>

        <Card color="#FF8379">
          <CardContent>
            <CardFront>
              <img src={EquityGraphic} alt="Graphic that represents equity" />
              <h3>Equity</h3>
              <p>
                Not everyone has access to financial literacy, legal aid, health
                information, and other sources of relevant knowledge.
              </p>
            </CardFront>

            <CardBack>
              <h4>Equity</h4>

              <p>
                Create a product which helps level the playing field by aiding
                access to information that everyone is entitled to have.
              </p>
            </CardBack>
          </CardContent>
        </Card>

        <Card color="#FF2B9D">
          <CardContent>
            <CardFront>
              <img
                src={MentalHealthGraphic}
                alt="Graphic that represents mental health"
              />
              <h3>Mental Health</h3>
              <p>
                The conversation around mental health is becoming more accepted,
                but there is still a shortage of stigma-free resources.
              </p>
            </CardFront>

            <CardBack>
              <h4>Mental Health</h4>

              <p>
                Contribute to the progress of services by making a product which
                facilitates care, serves as a liaison to accurate information,
                works to raise awareness, or any other action you see fit to
                help the vast category of mental health.
              </p>
            </CardBack>
          </CardContent>
        </Card>
      </Cards>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 125px;
  padding-bottom: 25px;
  flex-direction: column;
`;

const VerticalsHeader = styled.h2`
  font-family: "Proggy";
  font-size: 28px;
  text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const Column = styled.div`
  flex-basis: 50%;
`;

export default Verticals;
