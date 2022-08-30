/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoWhite from 'assets/logo.svg';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import { Icon } from '@iconify/react';
import { logEvent } from 'analytics/index';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoWhite} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
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

          <Button
            onClick={(e) => {
              e.preventDefault();
              logEvent({
                action: 'Contact me',
                category: 'clicks',
                label: 'click_contact',
              });
              window.location.href =
                'https://uk.linkedin.com/in/pirasanth-jesugeevegan';
            }}
            className="donate__btn"
            variant="secondary"
            aria-label="Contact"
          >
            Contact
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              logEvent({
                action: 'CV_Header',
                category: 'clicks',
                label: 'click_cv',
              });
              window.location.href =
                'https://firebasestorage.googleapis.com/v0/b/pirasanth.appspot.com/o/Pirasanthan_Jesugeevegan_CV%20(1).pdf?alt=media&token=ced4b7e0-f7a0-4d42-8b30-17e7dbc74a06';
            }}
            className="donate__btn"
            variant="secondary"
            aria-label="CV"
          >
            <Icon icon="feather:download" /> CV{' '}
            <span style={styles.pdf}> (PDF)</span>
          </Button>

          <MobileDrawer />
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
