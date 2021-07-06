import React from "react";
import FriendsListItem from "./FriendsListItem";
import "./FriendList.css";
const FriendList = ({ friendsMany }) => {
  return (
    <ul className="FriendList">
      {friendsMany.map((friend) => (
        <FriendsListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};

export default FriendList;
