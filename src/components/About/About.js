import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Heading = styled.h2`
  text-align: center;
  color: #e5e5e5;
  margin: 3rem 0 2rem 0;
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 1rem 0 1rem 0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 1.2rem 0 1.2rem 0;
  }
`;

const Paragraph = styled.p`
  color: #e5e5e5;
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem 3rem 2rem 3rem;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 1rem 1.5rem 1rem 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem 1.5rem 2rem 1.5rem;
  }
`;

const ParagraphQuote = styled(Paragraph)`
  font-style: italic;
  padding: 3rem 0;
`;

const Logo = styled.img`
  padding: 0 1rem 0 1rem;
  &:hover {
    transform: scale(1.2);
  }
  transition: transform 0.3s ease;
  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const About = () => {
  return (
    <Container style={{ padding: 0 }} fluid>
      <Row className='align-items-center'>
        <Col xs={12} md={6}>
          <Fade cascade bottom>
            <Heading>Mon parcours</Heading>
            <Paragraph>
              Passionné d'informatique depuis le plus jeune âge, songeant depuis
              quelques mois à me reconvertir j'ai commencé à m'auto-former au
              développement web début 2019. En novembre 2019 j'ai sauté le pas
              et je me suis inscrit dans un bootcamp JavaScript.
            </Paragraph>

            <ParagraphQuote>
              "Dynamique, je suis à la recherche de nouvelles opportunités et de
              challenges"
            </ParagraphQuote>
          </Fade>
        </Col>
        <Col xs={4} md={2}>
          <Fade delay={200} bottom>
            <Logo className='img-fluid' fluid src='/img/js.png' />
          </Fade>
        </Col>
        <Col xs={4} md={2}>
          <Fade delay={600} bottom>
            <Logo className='img-fluid' fluid src='/img/react.png' />
          </Fade>
        </Col>
        <Col xs={4} md={2}>
          <Fade delay={400} bottom>
            <Logo className='img-fluid' fluid src='/img/node.png' />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
