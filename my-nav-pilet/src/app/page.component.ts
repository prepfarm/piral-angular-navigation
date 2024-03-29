import { Component, Inject } from '@angular/core';
import { ComponentContext } from 'my-shell';

@Component({
    styleUrls: ['./page.component.css'],
    templateUrl: './page.component.html',
})
export class PageComponent {
    constructor(@Inject('Context') public context: ComponentContext) {}
}
