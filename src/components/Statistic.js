import React from "react";
import PropTypes from "prop-types";
//import statistics from './statistical-data.json';
import "./Statistic.css";

const Statistic = ({ title, stats }) => {
  return (
    <section className="section">
      <h2 className="Title">{title}</h2>

      <ul className="Statlist">
        {stats.map((statItem) => (
          <li key={statItem.id} className="stat-item">
            <span className="label">{statItem.label}</span>
            <span className="percentage">{statItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.defaultProps = {
  title: "title",
};

Statistic.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistic;
