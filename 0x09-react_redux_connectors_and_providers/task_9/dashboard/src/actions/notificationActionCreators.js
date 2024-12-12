import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_NOTIFICATIONS
} from "./notificationActionTypes";

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export const setLoadingState = (isLoading) => {
  return {
    type: SET_LOADING_STATE,
    isLoading,
  };
};

export const setNotifications = (data) => {
  return {
    type: SET_NOTIFICATIONS,
    data,
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch("./notifications.json")
      .then((res) => res.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((error) => {})
      .finally(() => dispatch(setLoadingState(false)));
  };
};
