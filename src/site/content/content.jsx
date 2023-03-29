import { useState } from "react";
import Menu from "../menu/menu";
function Content() {
  const [post, newPost] = useState([]);
  return (
    <div>
      <Menu />
      <textarea id="tekst" placeholder="Wprowadź treść postu" />
      <br />
      <button
        className="buttonPost"
        onClick={() => {
          let co = document.getElementById("tekst").value;
          newPost([
            {
              title: co,
            },
            ...post,
          ]);
        }}
      >
        Stwórz post
      </button>

      <div className="posts">
        {post.map((e) => (
          <div>
            <div className="postSolo">{e.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
