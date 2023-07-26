import React from 'react';

const YoutubeEmbed = ({ url }: any) => (
  <div className="video-responsive relative overflow-hidden pt-[56%]">
    <iframe
      className="absolute left-0 top-0 w-full h-full pb-7"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
