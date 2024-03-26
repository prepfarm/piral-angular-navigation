import 'core-js/proposals/reflect-metadata';
import '@angular/compiler';
import { defineNgModule, fromNg } from 'piral-ng/convert';
import { AppModule } from './app/app.module';
import { PageComponent } from './app/page.component';
import type { PiletApi } from 'my-shell';
import * as React from 'react';
import { Link } from "react-router-dom";

export function setup(app: PiletApi) {
  defineNgModule(AppModule, {
    // remove the following if you actually want to enable zone.js
    ngZone: 'noop',
  });

  app.registerExtension('sample-extension', fromNg(PageComponent));
  app.registerPage('/sample', fromNg(PageComponent));
  app.registerMenu(() =>
    <Link to="/sample">Sample</Link>
  );
  app.registerMenu(() =>
    <Link to="/sample2">Sample 2</Link>
  );
}
