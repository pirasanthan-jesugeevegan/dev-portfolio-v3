import { Box, Card, Flex, Image, Text } from 'theme-ui';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Modal from '../components/modal';
import CardRibbon from './card-ribbon';
import Appium from 'assets/icons/appium.svg';
import Applitools from 'assets/icons/applitools.svg';
import Browserstack from 'assets/icons/browserstack.svg';
import { urlFor } from '../../sanity';
import { logEvent } from '../analytics/index';

export default function PriceCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const newArray = [];

  data.icons.forEach(function (rank) {
    switch (rank) {
      case 'appium':
        newArray.push(Appium);
        break;
      case 'applitools':
        newArray.push(Applitools);
        break;
      case 'browserstack':
        newArray.push(Browserstack);
        break;
      default:
        newArray.push(rank);
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
        {data.tag && <CardRibbon data={data.tag} />}
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
            {newArray.map((icon, i) =>
              icon.includes('data') ? (
                <Image src={icon} key={i} sx={styles.icons} />
              ) : (
                <Icon
                  icon={icon}
                  key={i}
                  style={{
                    color: '#FFC35B',
                    boxSizing: 'border-box',
                    margin: '0',
                    minWidth: '0',
                    maxWidth: '100%',
                    height: 'auto',
                    width: '10%',
                    margin: '10px',
                  }}
                />
              )
            )}
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
  cardRibbon: {
    position: 'absolute',
    overflow: 'hidden',
    top: '-10px',
    left: '-10px',
    width: '114px',
    height: '112px',
    span: {
      position: 'absolute',
      display: 'block',
      width: '160px',
      padding: '10px 0',
      backgroundColor: '#ffc35b',
      boxShadow: '0 5px 5px rgba(0,0,0,0.2)',
      color: '#252734',
      fontSize: '13px',
      textTransform: 'uppercase',
      textAlign: 'center',
      left: '-35px',
      top: '25px',
      transform: 'rotate(-45deg)',
    },
    '&::before &::after': {
      position: 'absolute',
      zIndex: '-1',
      content: "''",
      display: 'block',
      border: '5px solid #2980b9',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
    },
    '&::before': {
      top: '0',
      right: '0',
    },
    '&::after': {
      bottom: '0',
      left: '0',
    },
  },
};
