import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import styles from "./index.css";

/**
 * elements/EventColor: Specified Event color
 * @returns {HTMLElement} return EventColor node
 */
const EventColor = ({ size, shape, style, color, className, prefixClass}) => {
  
  const sizeCls = classNames({
    [`${prefixClass}--lg`]: size === 'large', 
    [`${prefixClass}--sm`]: size === 'small',
    [`${prefixClass}--md`]: size === 'medium',
    [`${prefixClass}--default`]: size === 'default'
  });

  const classString = classNames(prefixClass, className, sizeCls, {
    [`${prefixClass}--${shape}`]: shape,
    [`${prefixClass}--${color}`]: color,
  });

  return <span className={classString} styles={style}></span>;
};

EventColor.defaultProps = {
  size: "small",
  shape: "circle",
  style: "",
  color: "default",
  className: "eventColor",
  prefixClass: "eventColor"
};

export default EventColor;
