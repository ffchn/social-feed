import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.scss";
import { format, formatDistanceToNow } from "date-fns";

export default function Post({ author, content, publishedAt }) {
  const formattedPublishedDate = format(publishedAt, "MMMM d, yyyy @ hh:MMa");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt);

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={formattedPublishedDate}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow} ago
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
