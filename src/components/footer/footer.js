/** @jsx jsx */
import { jsx, Box, Container, Text, Image } from 'theme-ui';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import { Icon } from '@iconify/react';

export default function Footer({ author }) {
  const social = [
    {
      path: author[0].social.linkedin,
      icon: <Icon icon="akar-icons:linkedin-fill" />,
    },
    {
      path: author[0].social.github,
      icon: <Icon icon="akar-icons:github-fill" />,
    },
    {
      path: author[0].social.instagram,
      icon: <Icon icon="akar-icons:instagram-fill" />,
    },
  ];
  const fullName =
    author[0].name === 'PJ'
      ? 'Pirasanthan Jesugeevegan'
      : 'Thanchila Pirasanthan';
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Image sx={{ width: '40px' }} src={logo} />
          <Text sx={{ alignSelf: 'center', paddingLeft: '10px' }}>
            ©2021 <span sx={styles.footer.copyright}>{fullName}</span>
          </Text>
          <Box sx={styles.social}>
            {social.map(({ path, icon }, i) => (
              <Box as="span" key={i} sx={styles.social.icon}>
                <Link
                  to={path}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = path;
                  }}
                >
                  {icon}
                </Link>
              </Box>
            ))}
          </Box>
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
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 26,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },
};
