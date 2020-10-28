export class Cell {
    private alive = false;
    row: number;
    column:number;
    
    constructor(row:number, column:number){
        this.row = row;
        this.column = column;
    }

    getRow(){
        return this.row;
    }
    
    getColumn(){
        return this.column;
    }

    changeState(){
        this.alive = !this.alive;
    }

    isAlive(){
        return this.alive;
    }

    kill(){
        this.alive = false;
    }
}
