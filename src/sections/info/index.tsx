import styles from "./Info.module.css";
import photo from "../../assets/visual/rounded.png";
import Button from "../../components/button";

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.leftInfo}>
        <span>Layanan Berkualitas Tinggi untuk Masyarakat Indonesia</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <div className={styles.infoButton}>
          <Button size="xl">Kontak Kami</Button>
          <Button variant="secondary" size="xl">
            Konsultasi
          </Button>
        </div>
      </div>
      <div className={styles.rightInfo}>
        <img src={photo} alt="info" />
      </div>
    </div>
  );
};

export default Info;
