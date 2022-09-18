import { Login, Signup } from "./features";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Temporary path for login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
