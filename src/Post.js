import React from "react";
import "./Post.css";

function Post() {
  return (
    <div>
      <h3>Username</h3>
      {/* header -> avatar + username */}
      {/* image */}
      <img
        className="post_image"
        src="https://webtrainingguides.com/wp-content/uploads/2019/11/frontend-masters.jpg"
      />
      {/* username + caption */}
      <h4 className="post_text">
        <strong>abhisahugm007:</strong> I ma love clever Programming
      </h4>
    </div>
  );
}

export default Post;
