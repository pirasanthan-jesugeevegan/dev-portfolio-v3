export default {
  // example colors with dark mode
  colors: {
    text: '#FFFFFF', // body color and primary color
    text_secondary: '#FFC35B', // secondary body color
    heading: '#252734', // primary heading color
    heading_secondary: '#FFC35B', // heading color
    background: '#323444', // body background color
    background_secondary: '#252734', // secondary background color
    border_color: '#252734', // border color
    primary: '#323444', // primary button and link color
    secondary: '#FFC35B', // secondary color - can be used for hover states
  },
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',
  ],
  fonts: {
    body: 'Montserrat',
    heading: 'Montserrat',
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.6,
    heading: 0.2,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '3.5px',
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: [null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6],
    },
    header: {
      color: 'heading_secondary',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%',
    },
  },
  section: {
    keyFeature: {
      py: [8, null, 9, null, null, 10],
    },
    feature: {
      py: [8, null, 9, null, null, 10],
      backgroundColor: 'background_secondary',
    },
    partner: {
      pt: [2, null, null, 5],
      pb: [8, null, 9, null, null, 10],
    },
  },
  sectionHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: -1,
    // marginBottom: ['50px', null, '60px', null, '65px', '75px'],
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, 1.2],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px',
    },

    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: '8px',
      lineHeight: 1.5,
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 90,
      letterSpacing: 'heading',
      color: 'heading',
    },
    highlight: {
      fontFamily: 'heading',
      lineHeight: 'body',

      fontSize: 24,
      // letterSpacing: 'heading',
      color: 'secondary',
    },
    primaryText: {
      fontFamily: 'Montserrat',
      lineHeight: '1.6',
      fontWeight: 'normal',
      fontSize: '20px',
      margin: '10px 0px',
      //line-height: '32px'
    },
    heroPrimary: {
      color: 'secondary',
      fontSize: [
        '40px',
        '42px',
        '48px',
        '50px',
        '52px',
        '60px',
        '66px',
        '78px',
      ],
      lineHeight: 1.2,
      fontWeight: 900,
      mb: [2, null, null, null, '20px'],
    },
    heroSecondary: {
      color: 'white',
      fontSize: [3, 4, 5, 6, null, 6, 7, 8],
      fontWeight: 'body',
      pr: [0, null, null, null, null, '100px', 1, '15px'],
      mb: ['15px', null, null, null, '20px', null, null, 2],
    },
    modalTitle: {
      color: 'secondary',
      fontSize: ['30px', '32px', '30px', '38px', '42px', '50px', '50px'],
      lineHeight: 1.2,
      fontWeight: 900,
      mb: [2, null, null, null, '20px'],
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137',
    },
    lead: {
      fontSize: 20,
      fontFamily: 'Montserrat',
      textDecorationLine: 'underline',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px',
    },
  },
  profileImage: {
    border: '4px solid #252734',
    boxSizing: 'border-box',
    borderRadius: '8px',
  },
  links: {
    default: {
      cursor: 'pointer',
    },
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal',
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
    },
    logo: {
      display: 'flex',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none'],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '8px',
      fontSize: ['16px', 1, 2, 2, 3],
      letterSpacings: ['-0.5px', null, null, null, '-0.15px'],
      padding: ['11px 20px 10px', null, null, null, '13px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 800,
      '&:focus': {
        outline: 0,
      },
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
      },
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px',
      },
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'secondary',
      color: '#252734',
      '&:hover': {
        bg: 'white',
        color: 'heading_secondary',
      },
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      svg: {
        fontSize: [4, 6],
        mr: 2,
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};
