import '@angular/compiler';
import { defineNgModule, fromNg } from 'piral-ng/convert';
import { AppModule } from './app/app.module';
import { PageComponent } from './app/page.component';
import type { PiletApi } from 'my-shell';

export function setup(app: PiletApi) {
  defineNgModule(AppModule);

  app.registerExtension('sample-second-extension', fromNg(PageComponent));

  app.registerPage('/sample-2', fromNg(PageComponent));
}
