import { Map } from 'immutable';

export default function filterTypeSelector(state) {
    return state.get('filter');
}

export default function getNotifications(state) {
    return Map(state.get('notifications'));
}

export default function getUnreadNotifications(state) {
    return Map(state.get('notifications')).filter((item => !item.get('isRead')));
}
