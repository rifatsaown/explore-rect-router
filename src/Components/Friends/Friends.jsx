import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const friends = useLoaderData();
  return (
    <div>
        <h1>Friends : {friends.length}</h1>
      <div className="friends-data">
        {friends.length ? (
          friends.map((friend) => (
            <Friend friend={friend} key={friend.id}></Friend>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Friends;
