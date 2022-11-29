/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoWhite from 'assets/logo.svg';
import tpLogo from 'assets/tp-logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import { Icon } from '@iconify/react';
import { logEvent } from 'analytics/index';

export default function Header({ className, nav, author }) {
  if (author[0].name === 'Thanchila') {
    menuItems = menuItems.filter((el) => el.path != 'portfolio');
  }
  const logoImg = author[0].name === 'PJ' ? LogoWhite : tpLogo;
  const NEXT_PUBLIC_SANITY_PROJECT_ID =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const getUrlFromId = (ref) => {
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${NEXT_PUBLIC_SANITY_PROJECT_ID}/${NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
  };
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={logoImg} />
          <Flex as="nav" sx={styles.nav}>
            {nav === true &&
              menuItems.map(({ path, label }, i) => (
                <Link
                  activeClass="active"
                  to={path}
                  href={`#${path}`}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                >
                  {label}
                </Link>
              ))}
          </Flex>
          {author && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                logEvent({
                  action: 'Contact me',
                  category: 'clicks',
                  label: 'click_contact',
                });
                window.location.href = author[0].social.linkedin;
              }}
              className="donate__btn"
              variant="secondary"
              aria-label="Contact"
            >
              Contact
            </Button>
          )}
          {author && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                logEvent({
                  action: 'CV_Header',
                  category: 'clicks',
                  label: 'click_cv',
                });
                window.location.href = getUrlFromId(author[0].cv.asset._ref);
              }}
              className="donate__btn"
              variant="secondary"
              aria-label="CV"
            >
              <Icon icon="feather:download" /> CV{' '}
              <span style={styles.pdf}> (PDF)</span>
            </Button>
          )}

          <MobileDrawer author={author} />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'white',
    fontWeight: 'normal',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 24],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.donate__btn': {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
    },
  },
  pdf: {
    fontSize: '8px',
  },
  container: {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    marginRight: '24px',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'white',
      textDecoration: 'none',
      px: 25,
      cursor: 'pointer',
      lineHeight: '1.2',
      '&.active': {
        color: 'secondary',
      },
    },
  },
};
