/** @jsx jsx */
import { jsx, Container, Grid, Image } from 'theme-ui';
import PriceCard from 'components/price-card';
import Title from 'assets/Portfolio.png';

export default function Portfolio({ projects }) {
  return (
    <section id="portfolio" sx={styles.pricing}>
      <Container>
        <Image src={Title} sx={styles.header} alt="portfolio" />
        <Grid sx={styles.grid}>
          {projects.map(
            (packageData) =>
              packageData.display && (
                <PriceCard data={packageData} key={packageData.name} />
              )
          )}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [
      '-55px',
      '-60px',
      '-60px',
      '-25px',
      '-13px',
      '-13px',
      '-13px',
      '-13px',
    ],

    gridGap: ['37px 0', null, '24px 24px', null, '24px 24px', null, null, null],
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
  header: {
    ml: ['-20px', '-20px', '-10px', '-25px', '-20px', '-20px', '-20px'],
    mb: [null, '5px'],
  },

  pricing: {
    backgroundColor: 'primary',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,

      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
