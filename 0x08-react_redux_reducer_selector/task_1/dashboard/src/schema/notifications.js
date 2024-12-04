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
    const output = [];
    const notifications = normalizedData.entities.notifications;
    const messages = normalizedData.entities.messages;

    for (const id in notifications) {
        if (notifications[id].author === userId) {
            output.push(message[notifications[id].context]);
        }
    }
    return output;
}

export { normalizedData };
