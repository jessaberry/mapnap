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

//  NOT FUNCTIONAL
const SocialButtons = () => {
  return (
    <div className="socials">
      <FacebookShareButton
        url={"https://www.example.com"}
        quote={"Dummy text!"}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={"https://www.example.com"}
        quote={"Dummy text!"}
        hashtag="#muo"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <RedditShareButton
        url={"https://www.example.com"}
        quote={"Dummy text!"}
        hashtag="#muo"
      >
        <RedditIcon size={32} round />
      </RedditShareButton>

      <EmailShareButton
        url={"https://www.example.com"}
        quote={"Dummy text!"}
        hashtag="#muo"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>

      <WhatsappShareButton
        url={"https://www.example.com"}
        quote={"Dummy text!"}
        hashtag="#muo"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialButtons;
