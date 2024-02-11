import styles from "./Avatar.module.scss";

export default function Avatar({ src }) {
  return <img src={src} alt="" className={styles.avatar} />;
}
