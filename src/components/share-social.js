/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import { Icon } from '@iconify/react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

export default function ShareLogo({ data }) {
  return (
    <Flex>
      <Box sx={styles.icons_title}>Share</Box>
      <Box sx={styles.icons}>
        <FacebookShareButton
          url={`https://pirasanth.com/blog/${data.slug.current}`}
          quote={data.description}
          hashtag={data.keyword}
        >
          <Icon icon="akar-icons:facebook-fill" />
        </FacebookShareButton>
      </Box>
      <Box sx={styles.icons}>
        <TwitterShareButton
          url={`https://pirasanth.com/blog/${data.slug.current}`}
          title={data.title}
          hashtag={data.keyword}
        >
          <Icon icon="ant-design:twitter-circle-filled" />
        </TwitterShareButton>
      </Box>
      <Box sx={styles.icons}>
        <LinkedinShareButton
          url={`https://pirasanth.com/blog/${data.slug.current}`}
          title={data.title}
          summary={data.description}
          source={`https://pirasanth.com/blog/${data.slug.current}`}
        >
          <Icon icon="entypo-social:linkedin-with-circle" />
        </LinkedinShareButton>
      </Box>
      <Box sx={styles.icons}>
        <WhatsappShareButton
          url={`https://pirasanth.com/blog/${data.slug.current}`}
          title={data.title}
          source={`https://pirasanth.com/blog/${data.slug.current}`}
        >
          <Icon icon="akar-icons:whatsapp-fill" />
        </WhatsappShareButton>
      </Box>
      <Box sx={styles.icons}>
        <EmailShareButton
          url={`https://pirasanth.com/blog/${data.slug.current}`}
          subject={data.title}
          source={`https://pirasanth.com/blog/${data.slug.current}`}
        >
          <Icon icon="clarity:email-solid" />
        </EmailShareButton>
      </Box>
    </Flex>
  );
}
const styles = {
  icons_title: { paddingRight: '10px', margin: '2px', fontSize: 'large' },
  icons: {
    margin: '3px',
    fontSize: 'x-large',
    '&:hover': {
      color: '#ffc35b',
    },
  },
};
