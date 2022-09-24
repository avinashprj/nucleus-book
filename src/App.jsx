import { Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Login, Signup } from "./features";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Temporary path for login */}
        <Route
          path="/"
          element={
            <h1>
              HELLO WORLD{" "}
              <strong>
                <Link to="/login">login</Link>
              </strong>
            </h1>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer
        theme="light"
        position="bottom-right"
        autoClose={800}
        draggable
      />
    </div>
  );
}

export default App;
