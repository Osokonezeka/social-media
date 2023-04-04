import { useState, useEffect } from "react";
import Menu from "../menu/menu";
import axios from "axios";

function Content() {
  const [post, newPost] = useState("");
  const [title, updateTitle] = useState("");
  const [text, updateText] = useState("");

  const makeAPost = {
    title: "",
    text: "",
    category_id: "3c696bef-97aa-40f9-8010-ae4928696808",
  };

  function createPost(e) {
    e.preventDefault(); 
    axios
      .post("http://192.168.5.22:8000/posts/", makeAPost)
      .then((response) => {
      });
  }

  return (
    <div>
      <Menu />
      <textarea id="postTitle" className="postTitle" placeholder="Wprowadź tytuł postu" required/>
      <textarea id="postContent" placeholder="Wprowadź treść postu" required/>
      <br />

      <button className="buttonPost" onClick={createPost}>
        Stwórz post
      </button>

      <div className="posts">
        <div className="profilePost">
          <div className="postInformation">.</div>
          <div className="postSolo">.</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
