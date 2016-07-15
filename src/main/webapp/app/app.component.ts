import { Component } from '@angular/core';

import {WelcomeComponent} from "./welcome.component";

@Component({
    selector: 'my-app',
    template: `
        <welcome></welcome>
    `,
    directives: [WelcomeComponent]
})
export class AppComponent { }