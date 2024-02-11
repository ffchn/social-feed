import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.scss";
import Avatar from "./Avatar";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

interface CommentProps {
  id: number;
  content: string;
  author: {
    avatarUrl: string;
    name: string;
    role?: string;
  };
  publishedAt: Date;
  onDeleteComment: (commentId: Number) => void;
}

export default function Comment({
  id,
  content,
  author,
  publishedAt,
  onDeleteComment,
}: CommentProps) {
  const formattedPublishedDate = format(publishedAt, "MMMM d, yyyy @ hh:MMa");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt);

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeClicked() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.commentHeader}>
            <div className={styles.commentInfo}>
              <strong>{author.name}</strong>
              <time
                title={formattedPublishedDate}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow} ago
              </time>
            </div>

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </div>
          <p>{content}</p>
        </div>

        <div className={styles.commentActions}>
          <button onClick={handleLikeClicked}>
            <ThumbsUp /> <span>Support</span>
            {likeCount}
          </button>
        </div>
      </div>
    </div>
  );
}
