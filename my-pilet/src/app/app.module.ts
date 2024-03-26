import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'piral-ng/common';

import { PageComponent } from './page.component';

export const routes: Routes = [
    {
        path: '',
        children: [{ path: 'sample', component: PageComponent }],
    },
];

@NgModule({
    bootstrap: [],
    declarations: [PageComponent],
    exports: [PageComponent],
    imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes)],
})
export class AppModule {}
