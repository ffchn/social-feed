import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.scss";
import Avatar from "./Avatar";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://picsum.photos/200" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <div className={styles.commentInfo}>
              <strong>Filipe F</strong>
              <time title="Feb 10 2024 " dateTime="2024-02-10 12:00:00">
                1 hour ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={styles.commentActions}>
          <button>
            <ThumbsUp /> <span>Support</span>
          </button>
        </div>
      </div>
    </div>
  );
}
