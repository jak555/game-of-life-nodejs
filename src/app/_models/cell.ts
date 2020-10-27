export class Cell {
    private alive = false;
    row: number;
    column:number;
    
    constructor(row:number, column:number){
        row = row;
        column = column;
    }

    changeState(){
        this.alive = !this.alive;
    }
    isAlive(){
        return this.alive;
    }
    resetAlive(){
        this.alive = false;
    }
}
