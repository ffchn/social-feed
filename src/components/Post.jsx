import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.scss";
import { format, formatDistanceToNow } from "date-fns";
import { useState } from "react";

export default function Post({ author, content, publishedAt }) {
  const formattedPublishedDate = format(publishedAt, "MMMM d, yyyy @ hh:MMa");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt);

  const [commentList, setCommentList] = useState([]);
  const [textarea, setTextarea] = useState("");

  const currentUser = {
    avatarUrl: "https://github.com/ffchn.png",
    name: "Filipe Franchini",
  };

  function handlePushNewComment(e) {
    e.preventDefault();
    if (textarea.length <= 2) {
      return;
    }

    const newCommentObject = {
      id: commentList.length + 1,
      author: currentUser,
      content: textarea,
      publishedAt: new Date(),
    };
    setCommentList([...commentList, newCommentObject]);
    setTextarea("");
  }

  function handleTextAreaInput(e) {
    setTextarea(e.target.value);
  }

  function deleteComment(commentId) {
    const newCommentArray = commentList.filter(
      (comment) => comment.id !== commentId
    );
    setCommentList(newCommentArray);
  }

  const isTextAreaEmpty = textarea.length <= 3;

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

      <form className={styles.commentForm} onSubmit={handlePushNewComment}>
        <strong>Say something!</strong>
        <textarea
          placeholder="Hooray!"
          name="comment"
          required
          value={textarea}
          onChange={handleTextAreaInput}
        />

        <button type="submit" disabled={isTextAreaEmpty}>
          Send
        </button>
      </form>

      {commentList.length >= 1 && (
        <div className={styles.commentList}>
          {commentList.map(({ id, content, author }) => (
            <Comment
              id={id}
              key={id}
              content={content}
              author={author}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      )}
    </article>
  );
}
