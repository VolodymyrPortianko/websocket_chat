import {Component, OnInit} from "@angular/core";
import {ChatMessage} from "../../model/chat_message.model";
import {ChatService} from "../../service/chat.service";


@Component({
    "selector" : "chat",
    "styleUrls": [
        "http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700",
        "app/component/chat/chat.component.css"
    ],
    "template" : `
    <div class="container">
      <div class="form">
        <input type="text" placeholder="Compose a new message..." [(ngModel)]="messageText" />
        <div class="info">
          <span class="count" [ngClass]="{danger: message?.text?.length > max}">140</span>
          <button [disabled]="message?.length > max || messageText?.length == 0" (click)="addMessage()">Send</button>
        </div>
      </div>
      <hr />
      <p *ngFor="let message of messages " class="message">
        <span class="time">{{message.time | date:'HH:mm'}}</span>
        <span [ngClass]="{self: message.self}">{{message.text}}</span>
      </p>
    </div>
    `
})
export class ChatComponent implements OnInit {
    messages: ChatMessage[];
    messageText: string = "";
    max = 140;

    constructor(private _chatService: ChatService) {
    }

    ngOnInit():void {
        this.messages = [{
            text: "Simple text",
            time: new Date(1),
            self: false
        },{
            text: "Simple text2",
            time: new Date(100),
            self: true
        },];
        this._chatService.getMessages().subscribe((message) => {
            this.messages.push(message);
        });
    }

    addMessage() {
        this._chatService.sendMessage(this.messageText);
    }

}