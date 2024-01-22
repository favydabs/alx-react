import React, { Component } from "react";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from "aphrodite";


class Notification extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the new listNotifications has a longer list than the previous one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(styles.Notifications)}>
            <button
              style={{ float: "right" }}
              aria-label="Close"
              onClick={this.handleButtonClick}
            >
              X
            </button>
            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {this.props.listNotifications.map((val, idx) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={this.markAsRead}
                  id={val.id}
                />
              ))}
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}
const styles = StyleSheet.create({
  Notifications: {
    padding: "1em",
    border: "2px dashed red",
    position: "absolute",
    top: "1.8em",
    right: "0",
  },

  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },

  menuItem: {
    textAlign: "right",
  },

  '[data-notification-type="default"]': {
    color: "blue",
  },

  "[data-urgent]": {
    color: "red",
  },

  '[data-notification-type="urgent"]': {
    color: "red",
  },
});

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notification;
