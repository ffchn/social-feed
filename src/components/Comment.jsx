import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.scss";
import Avatar from "./Avatar";

export default function Comment({ content, author, publishedAt }) {
  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <div className={styles.commentInfo}>
              <strong>{author.name}</strong>
              <time title="Feb 10 2024 " dateTime="2024-02-10 12:00:00">
                1 hour ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </div>
          <p>{content}</p>
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
