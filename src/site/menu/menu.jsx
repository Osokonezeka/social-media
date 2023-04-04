import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menuContaier">
      <div className="menuBox">
        <div className="test">
          <Link to="/content">
            <div className="menuTile">Stwórz post</div>
          </Link>
          <Link to="/posts">
          <div className="menuTile">Posty</div>
          </Link>
          <div className="menuTile">Tablica</div>
          <Link to="/register">
            <div className="menuTile">Stwórz profil</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
