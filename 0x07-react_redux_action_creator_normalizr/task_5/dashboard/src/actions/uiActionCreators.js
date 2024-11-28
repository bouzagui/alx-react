import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export default function Login(email, password) {
    return {
        type: LOGIN,
        user: {
            email,
            password,
        },
    };
}

export const logout = () => {{ type: LOGOUT }};

export const dispayNotificationDrawer = () => {{
    type: DISPLAY_NOTIFICATION_DRAWER
}}

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});
