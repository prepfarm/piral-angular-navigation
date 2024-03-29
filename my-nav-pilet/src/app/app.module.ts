import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'piral-ng/common';

import { PageComponent } from './page.component';

@NgModule({
    bootstrap: [],
    declarations: [PageComponent],
    exports: [PageComponent],
    imports: [BrowserModule, SharedModule],
})
export class AppModule {}
