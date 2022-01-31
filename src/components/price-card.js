import { Box, Card, Flex, Image, Text } from 'theme-ui';
import { useState } from 'react';

import Modal from '../components/modal';
import Reacts from 'assets/icons/react.svg';
import Node from 'assets/icons/node.svg';
import Selenium from 'assets/icons/selenium.svg';
import Cucumber from 'assets/icons/cucumber.svg';
import Appium from 'assets/icons/appium.svg';
import Chai from 'assets/icons/chai.svg';
import Cypress from 'assets/icons/cypress.svg';
import Heroku from 'assets/icons/heroku.svg';
import Express from 'assets/icons/express.svg';
import Webdriver from 'assets/icons/webdriver.svg';
import Mongo from 'assets/icons/mongodb.svg';
import Browserstack from 'assets/icons/browserstack.svg';
import Netlify from 'assets/icons/netifly.svg';
import Sass from 'assets/icons/sass.svg';
import Javascript from 'assets/icons/javascript.svg';
import { urlFor } from '../../sanity';
import { logEvent } from '../analytics/index';

export default function PriceCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const newArray = [];

  data.icons.forEach(function (rank) {
    switch (rank) {
      case 'react':
        newArray.push(Reacts);
        break;
      case 'chai':
        newArray.push(Chai);
        break;
      case 'cucumber':
        newArray.push(Cucumber);
        break;
      case 'cypress':
        newArray.push(Cypress);
        break;
      case 'heroku':
        newArray.push(Heroku);
        break;
      case 'node':
        newArray.push(Node);
        break;
      case 'express':
        newArray.push(Express);
        break;
      case 'netlify':
        newArray.push(Netlify);
        break;
      case 'sass':
        newArray.push(Sass);
        break;
      case 'javascript':
        newArray.push(Javascript);
        break;
      case 'mongodb':
        newArray.push(Mongo);
        break;
      case 'appium':
        newArray.push(Appium);
        break;
      case 'webdriver':
        newArray.push(Webdriver);
        break;
      case 'selenium':
        newArray.push(Selenium);
        break;
      case 'browserstack':
        newArray.push(Browserstack);
    }
  });
  return (
    <Card sx={styles.pricingBox}>
      <Box
        onClick={() => {
          setShowModal(true);
          logEvent({
            action: `Project_${data.name}`,
            category: 'clicks',
            label: 'click_project',
          });
        }}
      >
        <Flex sx={styles.pricingHeader}>
          <Card
            sx={{
              maxWidth: '100%',
              padding: '0px',
              textAlign: 'center',
            }}
          >
            <Image src={urlFor(data.image)} alt={data.name} />
            <Text className="package__name" sx={styles.heading}>
              {data.name}
            </Text>
            {newArray.map((icon, i) => (
              <Image src={icon} key={i} sx={styles.icons} />
            ))}
          </Card>
        </Flex>
      </Box>
      {showModal && <Modal setShowModal={setShowModal} data={data} />}
    </Card>
  );
}

const styles = {
  pricingBox: {
    padding: '0px',
    flex: [
      '0 1 100%',
      null,
      null,
      '0 1 50%',
      '0 1 45%',
      '0 1 40%',
      '0 1 38.5%',
    ],
    background: '#252734',
    borderRadius: 8,
    // ml: [3, 5, 5, 6],
    // margin: [null, null, null, '24px'],
    position: 'relative',
    mt: ['40px', null, null, 0],
    '@media screen and (min-width: 420px) and (max-width: 767px)': {
      maxWidth: '380px',
    },
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '30px 30px 60px -25px #FFC35B',
    },
  },
  header: {
    height: ['28px', null, null, null, '32px'],
    backgroundColor: '#EF9E48',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    position: 'absolute',
    top: [3, null, 4],
    letterSpacing: '-.14px',
    px: '10px',
  },
  icons: { width: '10%', margin: '10px' },
  heading: {
    fontWeight: 'heading',
    fontSize: [6, null, null, null, 7],
    textAlign: 'center',
    lineHeight: '23px',
    color: 'text',
    margin: [1, null, '12px'],
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['35px', null, null, null, null, '50px'],
    padding: '0px',
  },
};
