import * as AthenaClient from '@AthenaClient/api/index.js';
import { onTicksStart } from '@AthenaClient/events/onTicksStart.js';

import './src/controller.js';

const PAGE_NAME = 'Notify';

const Internal = {
    init() {
        const _page = new AthenaClient.webview.Page({
            name: PAGE_NAME,
            callbacks: {
                onReady: async () => {},
                onClose: () => {},
            },
        });

        AthenaClient.webview.registerPersistentPage(PAGE_NAME);
    },
};

onTicksStart.add(Internal.init);
