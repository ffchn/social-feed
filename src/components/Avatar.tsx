import styles from "./Avatar.module.scss";

interface AvatarProps {
  src: string;
}

export default function Avatar({ src }: AvatarProps) {
  return <img src={src} alt="" className={styles.avatar} />;
}
