import styles from "./Slides.module.css";
import Carousel, { CarouselItem } from "../../components/carousel";
import photo from "../../assets/logo/logo-blue.png";

const Slides = () => {
  return (
    <div className={styles.slides}>
      <Carousel>
        {Array.from(Array(4)).map(() => {
          return (
            <CarouselItem>
              <img src={photo} alt="" />
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slides;
