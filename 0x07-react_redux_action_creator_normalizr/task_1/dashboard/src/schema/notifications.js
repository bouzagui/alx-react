import * as notifications from '../../../../notifications.json'
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

const normalizedData = normalize(notifications.default, [notification]);


export default function getAllotificationsByUser(userId) {
    const allNotifications = notifications.default.filter((notification) => notification.author.id === userId);
    return allNotifications.map((notification => notification.context));
}
