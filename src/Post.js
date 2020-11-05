import Avatar from "@material-ui/core/Avatar";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Post.css";

function Post({ postId, username, caption, ImageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt="AbhishekSahu"
          src="/static/images/avatar/1.jpg    "
        />
        <h3>{username}</h3>
      </div>

      <img className="post_image" src={ImageUrl} alt="" />
      {/* username + caption */}
      <h4 className="post_text">
        <strong>{username}:</strong>
        {caption}
      </h4>
      <form>
        <input
          className="post_input"
          type="text"
          placeholder="Add comments...."
          value={comment}
          onChange={(e) => setComments(e.target.value)}
        />
        <button></button>
      </form>
    </div>
  );
}

export default Post;
