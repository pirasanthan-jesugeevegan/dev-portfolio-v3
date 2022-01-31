/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Image } from 'theme-ui';
import FeatureCard from 'components/feature-card.js';
import Header from 'assets/Skills.png';

export default function Skills({ skills }) {
  return (
    <section sx={{ variant: 'section.feature' }} id="skills">
      <Container>
        <Image src={Header} sx={styles.head} alt="skills" />
        <Grid sx={styles.grid}>
          {skills.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.altText}
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
