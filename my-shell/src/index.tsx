import 'core-js/es/reflect';
import 'core-js/stable/reflect';
import 'core-js/features/reflect';
import 'zone.js';
import "@angular/compiler";
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi, ExtensionSlot } from 'piral';
import { layout, errors } from './layout';
import { createNgApi } from 'piral-ng';


// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'http://localhost:9000/api/v1/pilet';

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
    routes: {
      '/predefined': () => <>
        <h1>Predefined route with extension</h1>
        <ExtensionSlot name="sample-extension" />
      </>
    }
  },
  plugins: [...createStandardApi(), createNgApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector('#app'));

root.render(<Piral instance={instance} />);
