import * as notifications from '../../../../notifications.json'

export default function getAllotificationsByUser(userId) {
    const allNotifications = notifications.default.filter((notification) => notification.author.id === userId);
    return allNotifications.map((notification => notification.context));
}
