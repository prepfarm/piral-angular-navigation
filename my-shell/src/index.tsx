import 'core-js/proposals/reflect-metadata';
import 'zone.js';
import "@angular/compiler";
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createInstance, Piral, createStandardApi, ExtensionSlot } from 'piral';
import { layout, errors } from './layout';
import { createAppApi } from './plugins/app';
import { Link } from 'react-router-dom';

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors
  },
  plugins: [...createStandardApi(), createAppApi()],
  requestPilets() {
    return Promise.resolve([])
  },
});

instance.root.registerPage('/test-1', () => <h1>Test 1</h1>)
instance.root.registerPage('/test-2', () => <h1>Test 2</h1>)

const root = createRoot(document.querySelector('#app'));

root.render(<Piral instance={instance} />);
