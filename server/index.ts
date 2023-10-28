import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api/index.js';
import { NotifyController } from './src/controller.js';

import './src/api.js';

Athena.systems.plugins.registerPlugin('Notify', () => {});
Athena.player.events.on('selected-character', (player: alt.Player) => {
    const data = Athena.document.character.get(player);
    setTimeout(() => {
        NotifyController.addNotification(player, {
            title: 'Selected-Character',
            message: `Welcome to our Server, ${data.name}!`,
            icon: '😍',
        });
    }, 250);
});
