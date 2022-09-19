import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./features";

function App() {
  console.log("EHLLO");
  return (
    <div className="App">
      <Routes>
        {/* Temporary path for login */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
