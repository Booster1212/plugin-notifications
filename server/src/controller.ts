import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import { Notification } from '@AthenaPlugins/plugin-notifications/shared/interface.js';
import { NotifyEvents } from '@AthenaPlugins/plugin-notifications/shared/events.js';
import { NotificationConfig } from '@AthenaPlugins/plugin-notifications/shared/config.js';

export class NotifyController {
    static addNotification(player: alt.Player, notification: Notification) {
        if (!notification.duration) {
            notification.duration = 5000;
        }

        Athena.webview.emit(player, NotifyEvents.CREATE_NOTIFICATION, notification);
    }

    static debug(msg: string) {
        if (NotificationConfig.debugMode) {
            console.log(`[Notification-DEBUG]: ${msg}`);
        }
    }
}
