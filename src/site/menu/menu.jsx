import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menuContaier">
      <div className="menuBox">
        <div className="test">
          <Link to="/content">
            <div className="menuTile1">Stwórz post</div>
          </Link>
          <Link to="/posts">
            <div className="menuTile2">Posty</div>
          </Link>
          <Link to="/register">
            <div className="menuTile3">Stwórz profil</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
