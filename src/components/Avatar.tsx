import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.scss";

export default function Avatar(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} className={styles.avatar} />;
}
