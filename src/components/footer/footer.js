/** @jsx jsx */
import { jsx, Box, Container, Text, Image } from 'theme-ui';
import logo from '../../assets/logo.svg';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Image sx={{ width: '40px' }} src={logo} />
          <Text sx={{ alignSelf: 'center', paddingLeft: '10px' }}>
            ©2021{' '}
            <span sx={styles.footer.copyright}>Pirasanthan Jesugeevegan</span>{' '}
            (PJ)
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    container: {
      alignItems: 'stretch',
    },
    footerTopArea: {
      justifyContent: 'center',
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [7, null, 8],
      pb: ['10px', null, null, '80px'],
      px: [0, null, null, null, 4],
    },

    copyright: {
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      color: 'secondary',
    },
  },
};
