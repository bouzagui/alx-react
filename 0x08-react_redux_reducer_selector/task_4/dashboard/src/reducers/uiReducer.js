import * as actions from '../actions/uiActionCreators';
import { Map } from 'immutable';

const initial = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

export default function uiReducer(state = initial, action) {
    switch (action.type) {
        case actions.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);

        case actions.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case actions.LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);

        case actions.LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);

        case actions.LOGOUT:
            return state.set('isUserLoggedIn', false);

        default:
            return state;
    }
}