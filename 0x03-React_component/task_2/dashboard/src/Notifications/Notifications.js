import React, { Component } from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape'



class Notification extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
      <div className="menuItem">
              <p>Your notifications</p>
            </div>
        {this.props.displayDrawer ? (
            <div className="notifications-box">
              <button
                style={{ float: "right" }}
                aria-label="Close"
                onClick={this.handleButtonClick}
              >
                X
              </button>
              {
                this.props.listNotifications.length != 0 ?
                  <p>Here is the list of notifications</p>
                : null
              }
              <ul>
                {
                  this.props.listNotifications.length == 0 ?
                    <NotificationItem type="default" value="No new notification for now" />
                  : null
                }
                {
                  this.props.listNotifications.map((val, idx)=> {
                    return <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                  })
                }
              </ul>
              </div>
        )
          :
            null
        }

      </>
    );
  }
}


Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notification.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notification;
