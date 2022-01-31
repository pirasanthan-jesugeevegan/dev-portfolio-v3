import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-QLQ045WDTM');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
