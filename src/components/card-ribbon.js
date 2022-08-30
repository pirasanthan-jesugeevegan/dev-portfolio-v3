import { Card } from 'theme-ui';

export default function CardRibbon({ data }) {
  return (
    <Card sx={styles.cardRibbon}>
      <span>{data}</span>
    </Card>
  );
}

const styles = {
  cardRibbon: {
    position: 'absolute',
    overflow: 'hidden',
    top: '-10px',
    left: '-11px',
    width: '156px',
    height: '156px',
    span: {
      position: 'absolute',
      display: 'block',
      width: '230px',
      padding: '10px 0',
      backgroundColor: '#ffc35b',
      boxShadow: '0 5px 5px rgba(0,0,0,0.2)',
      color: '#252734',
      fontSize: '12px',
      textTransform: 'uppercase',
      textAlign: 'center',
      left: '-48px',
      top: '42px',
      transform: 'rotate(-45deg)',
    },
    '&::before, &::after': {
      position: 'absolute',
      zIndex: '0',
      content: "''",
      display: 'block',
      border: '5px solid #ffc35bab',
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
    },
    '::before': {
      top: '0',
      right: '0',
    },
    '::after': {
      bottom: '0',
      left: '0',
    },
  },
};
