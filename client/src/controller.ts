import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api/index.js';

import { Notification } from '@AthenaPlugins/plugin-notifications/shared/interface.js';
import { NotifyEvents } from '@AthenaPlugins/plugin-notifications/shared/events.js';
import { VehicleData } from '@AthenaShared/information/vehicles.js';

export class NotifyController {
    static addNotification(notification: Notification) {
        if (!notification.duration) {
            notification.duration = 5000;
        }

        AthenaClient.webview.emit(NotifyEvents.CREATE_NOTIFICATION, notification);

        if (notification.oggFile) {
            AthenaClient.systems.sound.play2d(`@plugins/sounds/plugin-notifications/${notification.oggFile}`, 0.15);
        }
    }
}

alt.on('enteredVehicle', (veh: alt.Vehicle, seat: number) => {
    const currentVeh = VehicleData.find((x) => x.hash === veh.model);
    NotifyController.addNotification({
        title: 'Vehicle Entered',
        subTitle: 'Success',
        message: `You've entered vehicle: ${currentVeh.displayName}!`,
        icon: 'ℹ️',
        oggFile: 'notification.ogg',
    });
});
