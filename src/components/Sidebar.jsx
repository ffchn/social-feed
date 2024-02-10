import styles from "./Sidebar.module.scss";
import { PencilLine } from "phosphor-react";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1707588884167-c482104c6e4b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className={styles.profile}>
        <img
          src="https://github.com/ffchn.png"
          alt=""
          className={styles.avatar}
        />
        <strong>Filipe Franchini</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={15} /> Edit your profile
        </a>
      </footer>
    </aside>
  );
}
