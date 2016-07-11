package vvp.entity;

import java.util.Date;

/**
 * Created by Vova on 11.07.2016.
 */
public class OutputMessage extends Message {

    private Date time;

    public OutputMessage(Message original, Date time) {
        super(original.getId(), original.getMessage());
        this.time = time;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
