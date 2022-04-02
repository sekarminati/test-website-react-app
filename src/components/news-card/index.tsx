import { createClassName } from "../../helpers";
import Button from "../button";
import styles from "./NewsCard.module.css";

const classNames = createClassName(styles);

export interface INewsCard {
  type: "news" | "announcement";
  image: string;
  title: string;
  detailHandler?: () => void;
}

const NewsCard = ({
  type,
  image,
  title,
  detailHandler = () => {},
}: INewsCard) => {
  return (
    <div className={styles.newsCard}>
      <div className={classNames({ label: true, [`${type}`]: type })}>
        {type === "news" ? "Berita Terbaru" : "Pengumuman"}
      </div>
      <div className={styles.card}>
        <img src={image} alt="" />
        <span>{title}</span>
        <Button variant="secondary">Lebih Lanjut</Button>
      </div>
    </div>
  );
};

export default NewsCard;
