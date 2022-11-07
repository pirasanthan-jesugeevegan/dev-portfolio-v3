/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Image } from 'theme-ui';
import FeatureCard from 'components/feature-card.js';
import Header from 'assets/Skills.png';
import { useGlitch } from 'react-powerglitch';
const thanSkills = [
  {
    altText: 'python',
    imgSrc: 'akar-icons:python-fill',
    order: 1,
    title: 'Python',
  },
  {
    altText: 'selenium',
    imgSrc: 'simple-icons:selenium',
    order: 2,
    title: 'Selenium',
  },
  {
    altText: 'cucumber.io',
    imgSrc: 'file-icons:cucumber',
    order: 3,
    title: 'Cucumber.io',
  },
  {
    altText: 'java',
    imgSrc: 'cib:java',
    order: 4,
    title: 'Java Core',
  },
  {
    altText: 'UNIX',
    imgSrc: 'codicon:terminal-powershell',
    order: 5,
    title: 'UNIX',
  },
  {
    altText: 'sql',
    imgSrc: 'carbon:sql',
    order: 6,
    title: 'SQL',
  },
];
export default function Skills({ skills, user }) {
  const glitch = useGlitch();
  return (
    <section sx={{ variant: 'section.feature' }} id="skills">
      <Container>
        <Image src={Header} sx={styles.head} alt="skills" ref={glitch.ref} />
        {user ? (
          <Grid sx={styles.grid}>
            {thanSkills.map((item) => (
              <FeatureCard
                key={item.title}
                src={item.imgSrc}
                alt={item.title}
                title={item.title}
                text={item.altText}
              />
            ))}
          </Grid>
        ) : (
          <Grid sx={styles.grid}>
            {skills.map((item) => (
              <FeatureCard
                key={item.title}
                src={item.imgSrc}
                alt={item.title}
                title={item.title}
                text={item.altText}
              />
            ))}
          </Grid>
        )}
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
