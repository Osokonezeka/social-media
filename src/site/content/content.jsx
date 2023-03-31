import { useState } from "react";
import Menu from "../menu/menu";
function Content() {
  const [post, newPost] = useState([])
  return (
    <div>
      <Menu />
      <textarea id="postCont" placeholder="Wprowadź treść postu" />
      <br />
      <button
        className="buttonPost"
        onClick={() => {
          let cont = document.getElementById("postCont").value;
          newPost([
            {
              title: "napisał:",
              cont: cont,
            },
            ...post,
          ]);
        }}
      >
        Stwórz post
      </button>
      <div className="posts">
        {post.map((e) => (
          <div className="profilePost">
            <div className="profileInformation">{e.title}</div>
            
            <div className="postSolo">{e.cont}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
