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
import { FaDownload } from 'react-icons/fa';

export default function About() {
  return (
    <section sx={styles.banner} id="about">
      <Container sx={styles.banner.container}>
        <Image src={Header} sx={styles.header} />
        <Grid sx={styles.grid}>
          <Box sx={styles.banner.contentBox}>
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
                  window.location.href =
                    'http://pirasanth.com/Pirasanthan_Jesugeevegan_CV.pdf';
                }}
                variant="secondary"
                aria-label="Download CV"
              >
                <FaDownload />
                Download CV (PDF)
              </Button>
            </Flex>
          </Box>
          <Box sx={styles.banner.contentBox} style={{ alignItems: 'center' }}>
            <Box sx={styles.profileBackground}>
              <Image variant="profileImage" src={Profile} />
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
  },
  header: {
    ml: [null, '20px', '-10px', '-25px', '-20px', '-20px', '-20px'],
    position: 'absolute',
    mt: ['-60px', '-65px', '-60px', '-60px', '-65px', '-60px', '-20px'],
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
    contentBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
  },
};
