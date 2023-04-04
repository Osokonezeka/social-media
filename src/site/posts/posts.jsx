import axios from "axios";
import { useState, useEffect } from "react";
import Menu from "../menu/menu"
function Posts() {
  const AUTH_TOKEN = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
  const [posts, getPosts] = useState([]);
  const params = {
    category: "3c696bef-97aa-40f9-8010-ae4928696808",
    page: 1,
    size: 50,
  };
  function loadPosts() {
    axios.get("http://192.168.5.22:8000/posts", params).then((response) => {
      console.log(response.data.items);
      getPosts(response.data.items);
    });
  }

  useEffect(loadPosts, []);

  return (
    <>
    <Menu/>
      <div className="posts">
        {posts.map((post) => (
          <div className="profilePost" key={post.id}>
            <div className="postInformation">
              <div>
                {post.author.name} {post.author.surname} napisał:
              </div>
              {post.title}
            </div>
            <div className="postSolo">{post.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Posts;
