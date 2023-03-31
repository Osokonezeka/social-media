import Login from "./login/login.jsx";
import Content from "./site/content/content";
import Register from "./register/register.jsx";
import "./style/_index.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/content" element={<Content />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

/// sudo sysctl -w fs.inotify.max_user_watches=524288
