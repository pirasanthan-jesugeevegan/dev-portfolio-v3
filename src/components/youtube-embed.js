import React from 'react';
import { Box } from 'theme-ui';
const YoutubeEmbed = ({ url }) => (
  <Box className="video-responsive" sx={styles.videoResponsive}>
    <iframe
      style={styles.iframe}
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Box>
);
const styles = {
  videoResponsive: {
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: 0,
  },
  iframe: {
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
};
export default YoutubeEmbed;
