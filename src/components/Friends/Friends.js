import React from "react";
import "./Friends.css";
import FriendsListItem from "../FriendListItems/FriendListItem";
import PropTypes from "prop-types";
const FriendList = ({ friends }) => {
  return (
    <ul className="FriendList">
      {friends.map((friend) => (
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
