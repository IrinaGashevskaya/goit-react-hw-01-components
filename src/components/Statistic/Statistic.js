import React from "react";
import PropTypes from "prop-types";

import "./Statistic.css";

const Statistic = ({ title, stats }) => {
  return (
    <section className="section">
      {title && <h2 className="Title">{title}</h2>}

      <ul className="Statlist">
        {stats.map((stat) => (
          <li key={stat.id} className="stat-item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistic;
