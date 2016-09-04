import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {WelcomeComponent} from "./component/welcome/welcome.component";
import {ChatComponent} from "./component/chat/chat.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, WelcomeComponent, ChatComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }