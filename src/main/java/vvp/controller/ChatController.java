package vvp.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import vvp.entity.Message;
import vvp.entity.OutputMessage;

import java.util.Date;

/**
 * Created by Vova on 11.07.2016.
 */
@Controller
@RequestMapping("/")
public class ChatController {


    @MessageMapping("/chat")
    @SendTo("/topic/message")
    public OutputMessage sendMessage(Message message) {
        return new OutputMessage(message, new Date());
    }
}
