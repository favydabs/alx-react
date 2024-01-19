import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const Notification = ({ displayDrawer }) => {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      {displayDrawer ? (
        <div className="'flex-area'">
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          <div className="notifications-box">
            <button
              style={{ float: "right" }}
              aria-label="Close"
              onClick={handleButtonClick}
            >
              X
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
          </div>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </>
  );
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notification.defaultProps = {
  displayDrawer: false,
};

export default Notification;
