package vvp.entity;

/**
 * Created by Vova on 11.07.2016.
 */
public class Message {

    private String message;
    private int id;

    public Message() {

    }

    public Message(int id, String message) {
        this.id = id;
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
