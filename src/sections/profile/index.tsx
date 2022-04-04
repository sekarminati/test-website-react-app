import styles from "./Profile.module.css";
import photo from "../../assets/visual/profile.png";
import { ReactComponent as IcQuote } from "../../assets/icons/quotes.svg";
import Button from "../../components/button";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <IcQuote />
      <div className={styles.profileTitle}>
        Mari Kenali Kami dan Perjalanan Kami
      </div>
      <div className={styles.profileContent}>
        <div id="profileText" className={styles.profileText}>
          “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore “.
        </div>
        <div className={styles.rightProfile}>
          <img src={photo} alt="profile" />
          <div className={styles.profileIdentity}>
            <span>Ir.H.Ady Setiawan.SH</span>
            <br />
            <span>President of PDAM Purwa Tirta Dharma</span>
          </div>
        </div>
      </div>
      <Button variant="secondary" size="md">
        Lebih Lengkap
      </Button>
    </div>
  );
};

export default Profile;
