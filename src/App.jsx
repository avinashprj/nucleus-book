import { Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Login, Profile, Signup } from "./features";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar, SharedLayout } from "./components";
import { HomeContent } from "./features/home/components/HomeContent/HomeContent";
import { SharedHomeLayout } from "./components/Shared/SharedHomeLayout";
import { Explore } from "./features/explore/Explore";
import { Likes } from "./features/likes/Likes";
import { Bookmark } from "./features/bookmarks/Bookmarks";
import { PrivateRoute } from "./features/authentication/components/PrivateRoute";
import { SinglePost } from "./features/home/components/SinglePost/SinglePost";
import { getPosts } from "./features/home/postsSlice";
import { getUsers } from "./features/home/usersSlice";

function App() {
  const { authToken } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [authToken, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedHomeLayout />}>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<HomeContent />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/bookmarks" element={<Bookmark />} />
            <Route path="/post/:postId" element={<SinglePost />} />
            <Route path="/profile/:username" element={<Profile />} />
          </Route>
        </Route>
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
