/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';

export default function Hero() {
  return (
    <section sx={styles.banner} id="about">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Hi!
          </Heading>
          <Text as="h1" variant="heroSecondary">
            I’m <span style={{ color: '#FFC35B' }}>Pirasanth</span> — but call
            me <span style={{ color: '#FFC35B' }}>PJ</span>.
          </Text>
          <Text as="h1" variant="heroSecondary">
            I’m a frontend developer and automation QA living in London.
          </Text>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],

    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      px: ['24px', '44px', '64px'],
      py: ['44px', '44px', '64px'],
      position: 'static',
      width: ['100%', null, '85%', '55%', '50%', '55%'],

      left: '0px',
      top: '304px',
      background: '#252734',
      borderRadius: '0px 8px 8px 0px',
      flex: 'none',
      order: '1',
      flexGrow: '0',
      margin: '96px 0px',
      boxShadow: '20px 24px 20px rgb(107 133 154 / 12%);',
    },
  },
};
