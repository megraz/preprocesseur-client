

export class Compteur {
    constructor(private compte:number=0) {}

    increment() {
        this.compte++;
    }

    showCount() {
        return this.compte;
    }
}