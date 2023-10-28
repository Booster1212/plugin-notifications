import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';

import { Notification } from '@AthenaPlugins/plugin-notifications/shared/interface.js';
import { NotifyController } from './controller.js';

async function addNotification(player: alt.Player, notification: Notification) {
    return NotifyController.addNotification(player, notification);
}

const NotificationFuncs = {
    addNotification,
};

Athena.systems.plugins.addAPI('notification-api', NotificationFuncs);

declare global {
    export interface ServerPluginAPI {
        ['notification-api']: typeof NotificationFuncs;
    }
}
