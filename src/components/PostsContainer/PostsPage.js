//Complete the necessary code in this file
// import useState
import useState from "react"
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 



const PostsPage = (props) => {
  // set up state for your data

  const {posts} = props

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map((event, index)  => {
        return <Post key={index} post={event}/>}
      )}
    </div>
  );
};

export default PostsPage;
