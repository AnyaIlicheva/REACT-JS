import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const deleteComment = (commentId) => {
    let newComments = [...comments];
    const updatedComments = newComments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };
  return (
    <ul className="commentList">
      {comments.map((comment) => (
        <li className="comment" key={comment.id} id={comment.id}>
          {comment.text}
          <button
            id={comment.id}
            className="deleteButton"
            onClick={() => deleteComment(comment.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
