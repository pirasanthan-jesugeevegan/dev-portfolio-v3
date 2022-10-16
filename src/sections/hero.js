/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import AnimatedText from 'react-animated-text-content';

export default function About() {
  return (
    <section sx={styles.banner} id="about">
      <Container sx={styles.banner.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.banner.portfolio} style={{ alignItems: 'center' }}>
            <Box sx={styles.profileBackground}></Box>
            <Box sx={styles.innerContainer}>
              <Heading as="h1" variant="heroPrimary">
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                  }}
                  animationType="float"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  Hi!
                </AnimatedText>
              </Heading>

              <Text as="h1" variant="heroSecondary">
                I’m <span style={{ color: '#FFC35B' }}>Pirasanth</span> — but
                call me <span style={{ color: '#FFC35B' }}>PJ</span>.
              </Text>
              <Text as="h1" variant="heroSecondary">
                <AnimatedText
                  type="words" // animate words or chars
                  animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                  }}
                  animationType="float"
                  interval={0.1}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.3}
                  rootMargin="10%"
                >
                  I’m a frontend developer and automation QA living in London.
                </AnimatedText>
              </Text>
            </Box>
          </Box>
          <Box sx={styles.banner.contentBox}></Box>
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
  innerContainer: {
    py: '30px',
    px: ['30px', '30px', '0px'],
    pr: ['30px', '0px'],
  },
  profileBackground: {
    background: '#252734',
    borderRadius: '10px',
    px: '20px',
    right: 0,
    content: "''",
    width: ['inherit', 'inherit', '50vw'],
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: '-1',
  },
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pb: ['30px', null, null, '110px', null, 10, '100px'],
    pt: [11, 11, 11, 11, 11, 11, 11, 11],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    portfolio: {
      alignItems: 'center',
      zIndex: 100,
      position: 'relative',
      width: '100%',
      pt: [0, null, null, null, null, null, 5, 7],
    },
  },
};
