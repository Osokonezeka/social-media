import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [username, updateUsername] = useState("");
  const [name, updateName] = useState("");
  const [surname, updateSurname] = useState("");
  const [password, updatePassword] = useState("");
  const accountDetails = {
    username: username,
    name: name,
    surname: surname,
    password: password,
    avatar_url: "",
    description: "",
  };

  function sendCreationRequest(e) {
    e.preventDefault();
    axios
      .post("http://192.168.5.27:8000/users/", accountDetails)
      .then((response) => {
        console.log(response);
        window.location = "/";
      });
  }
  return (
    <div className="container">
      <div className="registerBox">
        <div className="registerHeader">REJESTRACJA</div>
        <hr />
        <div className="registerBody">
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => updateUsername(e.target.value)}
            placeholder="Nazwa użytkownika"
            maxLength={20}
          />
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => updateName(e.target.value)}
            maxLength={20}
            placeholder="Imię"
          />
          <input
            name="surname"
            type="text"
            value={surname}
            onChange={(e) => updateSurname(e.target.value)}
            maxLength={20}
            placeholder="Nazwisko"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
            maxLength={20}
            placeholder="Hasło"
          />
          <button onClick={sendCreationRequest}>STWÓRZ KONTO</button>
        </div>
        <hr />
        <a className="test">
          Masz już konto? <Link to="/"> Zaloguj się!</Link>
        </a>
        <div className="registerFooter">
          <label className="icons">
            <i className="bi bi-facebook" onClick={() => console.log("fb")} />
          </label>
          <label className="icons">
            <i class="bi bi-discord" onClick={() => console.log("dc")} />
          </label>
          <label className="icons">
            <i class="bi bi-google" onClick={() => console.log("ggl")} />
          </label>
          <label className="icons">
            <i class="bi bi-twitter" onClick={() => console.log("tw")} />
          </label>
          <label className="icons">
            <i class="bi bi-tiktok" onClick={() => console.log("tt")} />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Register;
