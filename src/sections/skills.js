/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Heading, Image } from 'theme-ui';
import FeatureCard from 'components/feature-card.js';
import React from 'assets/icons/react.svg';
import Puppeteer from 'assets/icons/puppeteer.svg';
import Node from 'assets/icons/node.svg';
import Selenium from 'assets/icons/selenium.svg';
import Cucumber from 'assets/icons/cucumber.svg';
import Appium from 'assets/icons/appium.svg';
import K6 from 'assets/icons/k6.svg';
import Webdriver from 'assets/icons/webdriver.svg';
import Cypress from 'assets/icons/cypress.svg';
import Header from 'assets/Skills.png';
const data = [
  {
    id: 1,
    imgSrc: React,
    altText: 'react.js',
    title: 'React JS',
  },
  {
    id: 2,
    imgSrc: Puppeteer,
    altText: 'puppeteer',
    title: 'Puppeteer',
  },
  {
    id: 3,
    imgSrc: Node,
    altText: 'node.js',
    title: 'Node.js',
  },
  {
    id: 4,
    imgSrc: Selenium,
    altText: 'selenium',
    title: 'Selenium',
  },
  {
    id: 5,
    imgSrc: Cucumber,
    altText: 'cucumber.io',
    title: 'Cucumber.io',
  },
  {
    id: 6,
    imgSrc: Appium,
    altText: 'appium',
    title: 'Appium',
  },
  {
    id: 7,
    imgSrc: K6,
    altText: 'k6.io',
    title: 'K6.io',
  },
  {
    id: 8,
    imgSrc: Webdriver,
    altText: 'webdriver.io',
    title: 'Webdriver.io',
  },
  {
    id: 9,
    imgSrc: Cypress,
    altText: 'cypress',
    title: 'Cypress.io',
  },
];

export default function Skills() {
  return (
    <section sx={{ variant: 'section.feature' }} id="skills">
      <Container>
        <Image src={Header} sx={styles.head} />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    // pt: [0, 8, 8, 8, 8, 8, 8, 8],
    gridGap: ['37px 0', null, '45px 30px', null, '50px 30px', null, null, null],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  head: {
    position: 'absolute',
    marginTop: '-200px',
    mt: [
      '-160px',
      '-160px',
      '-180px',
      '-180px',
      '-180px',
      '-200px',
      '-200px',
      '-200px',
    ],
    marginLeft: '-20px',
    // marginTop: '-150px',
  },
};
