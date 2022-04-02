import { ReactComponent as IcPhone } from "../../assets/icons/phone.svg";
import landingPhoto from "../../assets/visual/landing.png";
import Button from "../../components/button";
import styles from "./Landing.module.css";
import SocialMedia from "../../components/social-media";

const Landing = () => {
  return (
    <div id="home" className={styles.container}>
      <img className={styles.landingPhoto} src={landingPhoto} alt="Landing" />
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <span>Menjadi Perusahaan Air Minum Modern</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <Button variant="ghost" size="lg">
            <IcPhone style={{ paddingRight: 25 }} />
            Hubungi Kami
          </Button>
        </div>
        <div className={styles.rightContent}>
          <span>Social Media</span>
          <SocialMedia direction="horizontal" gap={39} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
