import photo1 from "../../assets/visual/unsplash1.png";
import photo2 from "../../assets/visual/unsplash2.png";
import photo3 from "../../assets/visual/unsplash3.png";
import NewsCard, { INewsCard } from "../../components/news-card";
import styles from "./Bulletin.module.css";

const bulletinItems: INewsCard[] = [
  {
    type: "announcement",
    image: photo1,
    title:
      "Pemberhentian Air Mengalir Sementara Pada Daerah Pemberhentian Air Mengalir Sementara Pada Daerah",
  },
  {
    type: "news",
    image: photo2,
    title:
      "PDAM Purwa Tirta Dharma memberikan bantuan PDAM Purwa Tirta Dharma memberikan bantuan",
  },
  {
    type: "announcement",
    image: photo3,
    title:
      "Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal Tarif per-Bulan Naik Menjadi 10% Dari Tarif Normal",
  },
];

const Bulletin = () => {
  return (
    <div className={styles.bulletin}>
      <div className={styles.bulletinTitle}>
        <span>Ikuti Pengumuman Terbaru Kami</span>
        <p>Jangan sampai ketinggalan pengumuman hingga berita terbaru kami</p>
      </div>
      <div className={styles.bulletinItems}>
        {bulletinItems.map((d) => {
          console.log(d.title.split(" ").length);
          return <NewsCard type={d.type} image={d.image} title={d.title} />;
        })}
      </div>
    </div>
  );
};

export default Bulletin;
