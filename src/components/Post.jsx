import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.scss";

export default function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src="https://picsum.photos/300" />
          <div className={styles.authorInfo}>
            <strong>Filipe Franchini</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="Feb 10 2024 " dateTime="2024-02-10 12:00:00">
          Published 1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          excepturi. <a href="">click here</a>
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          excepturi.
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Say something!</strong>
        <textarea placeholder="Hooray!" />

        <button type="submit">Send</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
