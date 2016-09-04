import { Component } from '@angular/core';

@Component({
    selector: "welcome",
    template: `
        <h1 class="text-primary text-center">Добро пожаловать в современный чат на Вебсокетах</h1>  
        <div class="col-sm-4 col-sm-offset-4" style="padding-top: 50px">
            <div class="form-group">
                <label for="name">Назовите себя:</label>
                <input type="text" class="form-control" id="name">
            </div>
            <button type="button" class="btn btn-primary">Войти в чат</button>
        </div>
    `
})
export class WelcomeComponent {
    
}