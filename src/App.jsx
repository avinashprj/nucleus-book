import { Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Login, Signup } from "./features";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar, SharedLayout } from "./components";
import { HomeContent } from "./features/home/components/HomeContent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
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
