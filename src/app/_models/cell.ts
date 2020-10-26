export class Cell {
    private alive = false;
    
    constructor(){

    }

    changeState(){
        this.alive = !this.alive;
    }
    isAlive(){
        return this.alive;
    }
}
