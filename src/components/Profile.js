import React from "react";

//import user from './components/user.json';
import PropTypes from "prop-types";
import "./Profile.css";
const Profile = ({
  avatar,
  name,
  tag,
  location,
  statsFollowers,
  statsViews,
  statsLikes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={name} width="150" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="Stats">
        <li className="StatItem">
          <span className="label">Followers</span>
          <span className="quantity">{statsFollowers}</span>
        </li>
        <li className="StatItem">
          <span className="label">Views</span>
          <span className="quantity">{statsViews}</span>
        </li>
        <li className="StatItem">
          <span className="label">Likes</span>
          <span className="quantity">{statsLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statsFollowers: PropTypes.number.isRequired,
  statsViews: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired,
};

export default Profile;
