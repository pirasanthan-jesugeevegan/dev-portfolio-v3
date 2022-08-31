/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  Container,
  Grid,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from 'theme-ui';
import Profile from '../assets/Profile.png';
import Header from '../assets/About.png';
import { Icon } from '@iconify/react';
import { logEvent } from '../analytics/index';
export default function About() {
  return (
    <section sx={styles.banner} id="about">
      <Container sx={styles.banner.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.banner.contentBox}>
            <Image src={Header} sx={styles.header} alt="about" />
            <Heading
              as="h1"
              variant="highlight"
              style={{ position: 'relative' }}
            >
              I love to program, write automation scripts, travel, and lift
              heavy things.
            </Heading>
            <Text as="p" variant="primaryText">
              I have currently nestled myself into a niche for building
              automation script and still have an interest in developing web
              applications
            </Text>
            <Text as="p" variant="primaryText">
              I define myself by the work I want to do as skills can be taught
              and learnt but personality is inherent. I am eager to continue
              learning, continue challenging myself, and most important continue
              to succeed in every task I put myself into.
            </Text>
            <Flex>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  logEvent({
                    action: 'CV_MainPage',
                    category: 'clicks',
                    label: 'click_cv',
                  });
                  window.location.href =
                    'https://firebasestorage.googleapis.com/v0/b/pirasanth.appspot.com/o/Pirasanthan_Jesugeevegan_CV.pdf?alt=media&token=bc308318-ae6b-46c1-9f78-b30950d12ebb';
                }}
                variant="secondary"
                aria-label="Download CV"
              >
                <Icon icon="feather:download" style={{ marginRight: '10px' }} />
                Download CV (PDF)
              </Button>
            </Flex>
          </Box>
          <Box sx={styles.banner.portfolio} style={{ alignItems: 'center' }}>
            <Box sx={styles.profileBackground}>
              <Image variant="profileImage" src={Profile} alt="Profile" />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null],
  },
  profileBackground: {
    background: '#252734',
    borderRadius: '8px',
    width: [null, null, null, null, '50vw'],
  },
  header: {
    ml: ['-20px', '-20px', '-10px', '-25px', '-20px', '-20px', '-20px'],
    mb: ['-24px', '-24px', '-24px', '-24px', '-25px', '-25px', '-20px'],
  },
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    portfolio: {
      pt: [0, null, null, 5, 5, 5, 5, 7],
    },
    contentBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
  },
};
