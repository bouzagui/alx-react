import React, { Component } from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

export default class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};
