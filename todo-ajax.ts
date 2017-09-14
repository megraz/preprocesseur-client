//appel ajax vers le serveur
import * as $ from 'jquery'; // je vais chercher jquery

export class TodoAjax {
    private urlApi:string = 'http://localhost:3000/todo';

    getAllTodos():Promise<string[]> { //notre promise renvoie un tab d'1 chaîne de caractères
        return $.ajax({ //requête ajax
            url: this.urlApi
        });

    }
}