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
import Header from '../assets/About.png';
import { useGlitch } from 'react-powerglitch';
import { urlFor } from '../../sanity';

export default function About({ author }) {
  const NEXT_PUBLIC_SANITY_PROJECT_ID =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const getUrlFromId = (ref) => {
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${NEXT_PUBLIC_SANITY_PROJECT_ID}/${NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
  };

  const glitch = useGlitch();
  return (
    <section sx={styles.banner} id="about">
      <Container sx={styles.banner.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.banner.contentBox}>
            <Image
              src={Header}
              sx={styles.header}
              alt="about"
              ref={glitch.ref}
            />
            <Heading
              as="h1"
              variant="highlight"
              style={{ position: 'relative' }}
            >
              {author.about.header}
            </Heading>
            <Text as="p" variant="primaryText">
              {author.about.p1}
            </Text>
            <Text as="p" variant="primaryText">
              {author.about.p2}
            </Text>
            <Flex
              sx={{
                justifyContent: ['center', 'normal'],
              }}
            >
              {author?.achievements &&
                author?.achievements.map((achievement) => (
                  <Button
                    sx={styles.cert}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = getUrlFromId(
                        achievement.document.asset._ref
                      );
                    }}
                  >
                    <Image src={urlFor(achievement.value)} />
                  </Button>
                ))}
            </Flex>
          </Box>
          <Box sx={styles.banner.portfolio} style={{ alignItems: 'center' }}>
            <Box sx={styles.profileBackground}>
              <Box sx={{ transform: 'rotate(6deg)' }}>
                <Image
                  // variant="profileImage"
                  src={urlFor(author.image)}
                  alt="Profile"
                  ref={glitch.ref}
                  sx={styles.profileImage}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  profileImage: {
    border: '4px solid #252734',
    boxSizing: 'border-box',
    borderRadius: '8px',

    // ,
  },
  cert: {
    width: '50%',
    justifyContent: 'center',
    padding: '5px',
  },
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
