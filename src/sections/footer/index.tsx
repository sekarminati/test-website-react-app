import styles from "./Footer.module.css";
import logo from "../../assets/logo/full-logo-white.png";
import SocialMedia from "../../components/social-media";
import { IMenu } from "../navbar";
import { createClassName } from "../../helpers";
import { useEffect, useState } from "react";
import { ReactComponent as IcLocation } from "../../assets/icons/location.svg";
import { ReactComponent as IcWa } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as IcEmail } from "../../assets/icons/email.svg";

const classNames = createClassName(styles);

const menus = [
  { key: "home", title: "Home" },
  { key: "about", title: "Tentang Kami" },
  { key: "blog", title: "Blog" },
  { key: "career", title: "Karir" },
  { key: "gallery", title: "Galeri" },
];

const Footer = ({ menu = "home", onChangeMenu = () => {} }: IMenu) => {
  const [active, setActive] = useState(menu);

  useEffect(() => {
    if (menu !== active) {
      setActive(menu);
    }
  }, [active, menu]);

  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.brand}>
          <img src={logo} alt="" />
          <p>
            PDAM Purwa Tirta Dharma Menyediakan air bersih yang sehat yang mampu
            memberikan kontribusi PAD pada kabupaten Grobogan
          </p>
          <SocialMedia />
        </div>
        <div className={styles.navigation}>
          <span className={styles.footerSections}>NAVIGASI</span>
          {menus.map((d) => {
            return (
              <button
                className={classNames({
                  menu: true,
                  active: d.key === active,
                })}
                onClick={() => {
                  setActive(d.key);
                  onChangeMenu(d.key);
                }}
              >
                {d.title}
              </button>
            );
          })}
        </div>
        <div className={styles.contact}>
          <span className={styles.footerSections}>KONTAK</span>
          <div className={styles.contactItem}>
            <IcLocation />
            <span>
              Jl. Gajah Mada No.3, Jetis Selatan, Purwodadi, Kec. Purwodadi,
              Kabupaten Grobogan, Jawa Tengah 58111
            </span>
          </div>
          <div className={styles.contactItem}>
            <IcWa />
            <span>+62 896 666 666</span>
          </div>
          <div className={styles.contactItem}>
            <IcEmail />
            <span>hallo@purwatirtadharma.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
