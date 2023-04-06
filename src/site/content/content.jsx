import { useState } from "react";
import Menu from "../menu/menu";
import axios from "axios";

function Content() {
  const AUTH_TOKEN = localStorage.getItem("token");
  const [title, updateTitle] = useState("");
  const [text, updateText] = useState("");

  function createPost(e) {
    const makeAPost = {
      title: title,
      text: text,
      image_url: "string",
      category_id: "1a2996e6-98d5-49c4-8619-397f95645325",
      disabled: false,
    };
    e.preventDefault();
    axios.defaults.headers.common["Authorization"] = "Bearer " + AUTH_TOKEN;
    axios
      .post("http://192.168.5.22:8000/posts/", makeAPost)
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <div>
      <Menu />
      <textarea
        id="postTitle"
        className="postTitle"
        placeholder="Wprowadź tytuł postu"
        required
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <textarea
        id="postContent"
        placeholder="Wprowadź treść postu"
        required
        value={text}
        onChange={(e) => updateText(e.target.value)}
      />
      <br />

      <button className="buttonPost" onClick={createPost}>
        Stwórz post
      </button>
    </div>
  );
}

export default Content;
