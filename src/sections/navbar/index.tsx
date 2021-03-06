import { useEffect, useState } from "react";
import { ReactComponent as IcSearch } from "../../assets/icons/search.svg";
import logoWhite from "../../assets/logo/logo-white.png";
import Button from "../../components/button";
import { createClassName } from "../../helpers";
import styles from "./Navbar.module.css";

const classNames = createClassName(styles);

const menus = [
  { key: "home", title: "Beranda" },
  { key: "about", title: "Tentang" },
  { key: "gallery", title: "Galeri" },
  { key: "blog", title: "Blog" },
];

export interface IMenu {
  menu?: string;
  onChangeMenu?: (menu: string) => void;
}

const Navbar = ({ menu = "home", onChangeMenu = () => {} }: IMenu) => {
  const [active, setActive] = useState(menu);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (menu !== active) {
      setActive(menu);
    }
  }, [active, menu]);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else setScrolled(false);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={classNames({
        navbarContainer: true,
        scrolled: scrolled,
      })}
    >
      <img className={styles.logoSection} src={logoWhite} alt="Logo White" />
      <div className={styles.menuSection}>
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
      <div className={styles.actionSection}>
        <Button
          className={styles.searchButton}
          variant="ghost"
          onClick={() => {}}
        >
          <IcSearch />
        </Button>
        <Button variant="ghost" onClick={() => {}}>
          Customer Service
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
