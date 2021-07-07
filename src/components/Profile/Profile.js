import React from "react";

import PropTypes from "prop-types";
import "./Profile.css";
const Profile = ({ avatar, name, tag, location, stats }) => {
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
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="StatItem">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="StatItem">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Profile;
