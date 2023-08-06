import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SocialButtons = () => {
  return (
    <div className="socials">
      <FacebookShareButton
        url={"https://mapnap.onrender.com/"}
        quote={"Plan your trips with me at Mapnap!"}
        hashtag="#mapnap"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={"https://mapnap.onrender.com/"}
        quote={"Plan your trips with me at Mapnap!"}
        hashtag="#mapnap"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <RedditShareButton
        url={"https://mapnap.onrender.com/"}
        quote={"Plan your trips with me at Mapnap!"}
        hashtag="#mapnap"
      >
        <RedditIcon size={32} round />
      </RedditShareButton>

      <EmailShareButton
        url={"https://mapnap.onrender.com/"}
        quote={"Plan your trips with me at Mapnap!"}
        hashtag="#mapnap"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>

      <WhatsappShareButton
        url={"https://mapnap.onrender.com/"}
        quote={"Plan your trips with me at Mapnap!"}
        hashtag="#mapnap"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialButtons;
