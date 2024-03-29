/** @jsx jsx */
import { jsx, Box, Heading } from 'theme-ui';
import { Icon } from '@iconify/react';

export default function FeatureCard({ src, title }) {
  return (
    <Box sx={styles.card}>
      <Icon icon={src} sx={styles.img} />
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
    path: {
      fill: '#ffc35b',
    },
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
