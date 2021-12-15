/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  img: {
    width: ['60px', null, null, null, '55px', '70px', null, '80px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4, null, null, 3, 4, null, 5],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      fontWeight: 700,
      lineHeight: 4,
    },
  },
};
