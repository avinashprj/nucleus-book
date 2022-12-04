import React from "react";
import { Header } from "../../../components/Header/Header";
import { ProfileDetails } from "./ProfileDetails";

export const Profile = () => {
  console.log("HELO");
  return (
    <div className="w-full sm:w-600 h-screen">
      <Header />
      <ProfileDetails />
      {/* <AddPost /> */}
      {/* Timeline */}
      {/* {postStatus === "pending" ? (
        <Loader />
      ) : followingPosts.length > 0 ? (
        followingPosts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h1>No Posts to Display!</h1>
      )} */}
    </div>
  );
};
