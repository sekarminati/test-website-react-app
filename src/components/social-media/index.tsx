import styles from "./SocialMedia.module.css";
import { ReactComponent as IcFacebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as IcTwitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as IcInstagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as IcYoutube } from "../../assets/icons/youtube.svg";

interface ISocialMedia {
  direction?: "vertical" | "horizontal";
  gap?: number;
}

const SocialMedia = ({ direction = "vertical", gap = 51 }: ISocialMedia) => {
  return (
    <div
      className={styles.socialMedia}
      style={{
        flexDirection: direction === "vertical" ? "row" : "column",
        gap: gap,
      }}
    >
      <IcFacebook onClick={() => window.open("https://www.facebook.com/")} />
      <IcInstagram onClick={() => window.open("https://www.instagram.com/")} />
      <IcTwitter onClick={() => window.open("https://www.twitter.com/")} />
      <IcYoutube onClick={() => window.open("https://www.youtube.com/")} />
    </div>
  );
};

export default SocialMedia;
