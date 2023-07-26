import { Icon } from '@iconify/react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

function ShareLogo({ post }: any) {
  return (
    <div className="flex items-center justify-end">
      <div className="icons-title m-2 text-large hidden md:block">Share</div>
      <div className="icons mx-1 text-2xl hover:text-yellow-500">
        <FacebookShareButton
          url={`https://pirasanth.com/blog/${post.slug.current}`}
          quote={post.description}
          hashtag={post.keyword}
        >
          <Icon icon="akar-icons:facebook-fill" />
        </FacebookShareButton>
      </div>
      <div className="icons mx-1 text-2xl hover:text-yellow-500">
        <TwitterShareButton
          url={`https://pirasanth.com/blog/${post.slug.current}`}
          title={post.title}
          hashtags={[post.keyword]}
        >
          <Icon icon="ant-design:twitter-circle-filled" />
        </TwitterShareButton>
      </div>
      <div className="icons mx-1 text-2xl hover:text-yellow-500">
        <LinkedinShareButton
          url={`https://pirasanth.com/blog/${post.slug.current}`}
          title={post.title}
          summary={post.description}
          source={`https://pirasanth.com/blog/${post.slug.current}`}
        >
          <Icon icon="entypo-social:linkedin-with-circle" />
        </LinkedinShareButton>
      </div>
      <div className="icons mx-1 text-2xl hover:text-yellow-500">
        <WhatsappShareButton
          url={`https://pirasanth.com/blog/${post.slug.current}`}
          title={post.title}
          separator=":: "
        >
          <Icon icon="akar-icons:whatsapp-fill" />
        </WhatsappShareButton>
      </div>
      <div className="icons mx-1 text-2xl hover:text-yellow-500">
        <EmailShareButton
          url={`https://pirasanth.com/blog/${post.slug.current}`}
          subject={post.title}
          resource={`https://pirasanth.com/blog/${post.slug.current}`}
        >
          <Icon icon="clarity:email-solid" />
        </EmailShareButton>
      </div>
    </div>
  );
}
export default ShareLogo;
