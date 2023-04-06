import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function getToken(e) {
    e.preventDefault();
    const loginInfo = new URLSearchParams();
    loginInfo.append("username", username);
    loginInfo.append("password", password);

    axios
      .post("http://192.168.5.22:8000/token/", loginInfo)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        console.log(localStorage.getItem("token"));
        console.log(response.data.access_token);
        window.location = "/content";
      });
  }
  return (
    <div className="container">
      <div className="loginBox">
        <div className="loginHeader">LOGOWANIE</div>
        <hr />
        <div className="loginBody">
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Login"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={getToken}>ZALOGUJ SIĘ</button>
        </div>
        <hr />

        <div className="test">
          Nie masz konta? <Link to="/register"> Zarejestruj się!</Link>
        </div>
        <div className="loginFooter">
          <label className="icons">
            <i className="bi bi-facebook" />
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

export default Login;
