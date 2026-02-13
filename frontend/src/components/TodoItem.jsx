import "../App.css";
import { useState } from "react";

function TodoItem({todo, toggleDone, deleteTodo, addNewComment}) {
  const [newComment, setNewComment] = useState("");   
  
  return (
          <li>
            <span className={todo.done ? "done" : ""}>{todo.title}</span>
            <button onClick={() => toggleDone(todo.id)}>Toggle</button>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>

            <p>{todo.comments ? todo.comments.length : 0} comments</p>

            {todo.comments && todo.comments.length > 0 && (
              <>
                <br />
                <b>Comments:</b>
                <ul>
                  {todo.comments.map((comment) => (
                    <li key={comment.id}>{comment.message}</li>
                  ))}
                </ul>
              </>
            )}
            {todo.comments && todo.comments.length === 0 && (
              <p>No comments</p>
            )}

            <div className="new-comment-forms">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => {
                    const value = e.target.value;
                    setNewComment(value);
                    console.log(newComment)
                }}
              />
              <button onClick={() => {
                addNewComment(todo.id, newComment);
                setNewComment("");
              }}>
                Add Comment
              </button>
            </div>
            <hr />
          </li>
  )
}

export default TodoItem;