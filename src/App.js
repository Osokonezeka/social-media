//import Login from "./login/login.jsx";
import Content from "./site/content/content"
import "./style/_index.scss";

function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;

/// sudo sysctl -w fs.inotify.max_user_watches=524288
