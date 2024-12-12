import * as actions from '../actions/uiActionCreators';
import { Map } from 'immutable';

const initial = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null, // Set initial user as null
};

export default function uiReducer(state = initial, action) {
    switch (action.type) {
        case actions.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);

        case actions.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case actions.LOGIN_SUCCESS:
            // Update the user and set login status to true when LOGIN_SUCCESS action is dispatched
            return state.set('isUserLoggedIn', true)
                        .set('user', action.user);  // Assuming action contains user data

        case actions.LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false)
                        .set('user', null);  // Optionally set user to null on login failure

        case actions.LOGOUT:
            // Set user to null and isUserLoggedIn to false when LOGOUT action is dispatched
            return state.set('isUserLoggedIn', false)
                        .set('user', null);

        default:
            return state;
    }
}
