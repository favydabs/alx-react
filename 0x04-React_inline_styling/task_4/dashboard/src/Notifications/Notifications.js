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
        <div className={css(notificationStyles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className={css(notificationStyles.notifications)}>
            <button
              style={{ float: "right" }}
              aria-label="Close"
              className={css(notificationStyles.button)}
              onClick={(e) => {
                console.log('Close button has been clicked');
              }}
            >
              X
            </button>
            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul className={css(notificationStyles.ul)}>
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

const notificationStyles = StyleSheet.create({
	notifications: {
    border: '3px dotted var(--holberton-red)',
    padding: '6px 12px',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '12px',
    zIndex: '100',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: 20,
      position: 'relative',
      right: 0,
      left: 0,
      border: 'none',
    }
	},
  menuItem: {
    textAlign: 'right',
    float: 'right', 
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    transition: 'opacity 1s, transform 0.5s',
    ':hover': {
      animation: 'bounceAndFade 1s 3',
    },
    '@keyframes bounceAndFade': {
      '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0)', 
      },
      '40%': {
        transform: 'translateY(-5px)',
      },
      '60%': {
        transform: 'translateY(5px)',
      },
    },
  },
  ul: {
    '@media (max-width: 900px)': {
      padding: 0
    }
  },
  button: {
    '@media (max-width: 900px)': {
      position: 'relative',
      float: 'right',
    }
  }
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
