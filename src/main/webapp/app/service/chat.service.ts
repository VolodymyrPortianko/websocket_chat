import {Injectable} from "@angular/core";
import {ChatMessage} from "../model/chat_message.model";
import {Subject} from "rxjs/Rx";

declare var SockJS: any;
declare var Stomp: any;

@Injectable()
export class ChatService {

    client: any;

    chatMessagesSubject = new Subject();
    chatMessagesObservable = this.chatMessagesSubject.asObservable();

    messageIds: number[] = [];

    getMessages() {
        let chatConnection = new SockJS("/chat");
        this.client = Stomp.over(chatConnection);
        this.client.connect({},() => {
            this.client.subscribe("/topic/message", (data) => {
                let message = JSON.parse(data.body)
                let out:ChatMessage = new ChatMessage();
                out.text = message.message;
                out.time = new Date(message.time);
                if (this.messageIds.includes(message.id)) {
                    out.self = true;
                    this.messageIds.splice(this.messageIds.indexOf(message.id), 1);
                }
                this.chatMessagesSubject.next(out);
            })
        });
        return this.chatMessagesObservable;
    }

    sendMessage(message: string) {
        var id = Math.floor(Math.random() * 1000000);
        this.client.send("/app/chat", {
            priority: 9
        }, JSON.stringify({
            message: message,
            id: id
        }));
        this.messageIds.push(id);
    }
}