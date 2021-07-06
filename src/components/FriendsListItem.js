import React from "react";
import Brightness1Icon from "@material-ui/icons/Brightness1";
const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span className={isOnline > 0 ? "greenCircle" : "redCircle"}>
        <Brightness1Icon></Brightness1Icon>
      </span>
      <img className="Avatar" src={avatar} alt={name} width="150" />
      <p>{name}</p>
    </li>
  );
};
export default FriendListItem;
