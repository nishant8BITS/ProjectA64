import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import styles from "./index.css";
import { DateTimeFormatter } from "../../utils";

/**
 * elements/EventColor: Specified Event color
 * @returns {HTMLElement} return EventColor node
 */
const Time = ({ dateTime, format }) => {
  const formatedDateTime = DateTimeFormatter.formatInTo({ dateTime, format });

  return <span>{formatedDateTime}</span>;
};

Time.defaultProps = {
  dateTime: new Date(),
  format: ""
};

export default Time;
