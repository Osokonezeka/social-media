import "bootstrap-icons/font/bootstrap-icons.css";

function Login() {
  return (
    <div className="container">
      <div className="loginBox">
        <div className="loginHeader">LOGOWANIE</div>
        <hr />
        <div className="loginBody">
          <input
            type="text"
            id="login"
            name="login"
            placeholder="Login"
            maxLength="25"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Hasło"
            maxLength="32"
          />
          <button
            onClick={() => {
              alert("das");
            }}
          >
            ZALOGUJ SIĘ
          </button>
        </div>
        <hr />
        <div className="loginFooter">
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

export default Login;
