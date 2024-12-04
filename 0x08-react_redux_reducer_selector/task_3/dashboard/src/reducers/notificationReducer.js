import * as action from '../actions/notificationActionTypes'

export default function NotificationsReducer(state=InitialState, action={type: null}) {
    switch(action.type) {
        case actions.FETCH_NOTIFICATIONS_SUCCESS:
            return {
                filter: action.NotificationTypeFilters["DEFAULT"],
                notifications: action.data.map((item) => {
                    if (item.id === action.index) {
                        return {...item, isRead: true}
                    } else {
                        return {...item}
                    }
                })
            }
        case actions.MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map((item) => {
                    if (item.id === action.index) {
                        return {...item, isRead: true}
                    } else {
                        return {...item}
                    }
                })
            }
        case actions.SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state;
    }
}
