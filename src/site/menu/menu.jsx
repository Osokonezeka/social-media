import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menuContaier">
      <div className="menuBox">
        <div className="test">
          <Link to="/content">
            <div className="menuTile">Strona główna</div>
          </Link>
          <div className="menuTile">Komentarze</div>
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
