import styles from "./Reason.module.css";
import { ReactComponent as IcCertified } from "../../assets/icons/certified.svg";
import { ReactComponent as IcTime } from "../../assets/icons/time.svg";
import { ReactComponent as IcHeadphone } from "../../assets/icons/headphone.svg";

const reasons = [
  { title: "Professional", icon: <IcCertified /> },
  { title: "24H Non-Stop", icon: <IcTime /> },
  { title: "Full Support", icon: <IcHeadphone /> },
];

const Reason = () => {
  return (
    <div className={styles.reason}>
      <div className={styles.reasonTitle}>
        <span>Kenapa Memilih Kami?</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
      <div className={styles.reasonItems}>
        {reasons.map((d) => {
          return (
            <div className={styles.reasonItem}>
              <div className={styles.circle}>{d.icon}</div>
              <div>{d.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reason;
