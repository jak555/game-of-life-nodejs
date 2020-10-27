import { Injectable } from '@angular/core';
import { Cell } from '../_models/cell';

@Injectable({
  providedIn: 'root'
})
export class GameService { // this would be actually the board
  private cells: Cell[][];
  private rows: number;
  private columns: number;
  private runNumber: number;

  constructor() {
    this.runNumber = 0;
  }

  createGame(rows: number, columns: number){
    this.rows = rows;
    this.columns = columns;

    var grid: Cell[][] = [];

    for(var i = 0; i < rows; i++){
      let row: Array<Cell> = new Array();
      for(var j = 0; j < columns; j++){
        //this.cells[i][j] = new Cell({row: i, column: j});
        row.push(new Cell(i, j));
      }
      grid.push(row);
    }

    this.cells = grid;
    this.randomizeBoard();
  }

  resetGame(){
    this.cells.forEach(cellRow => {
      cellRow.forEach(cell => {
        if(cell.isAlive()){
          cell.changeState();
        }
      });
    });
    this.randomizeBoard();
  }
  randomizeBoard(){
    this.cells.forEach(cellRow => {
      cellRow.forEach(cell => {
        if(Math.random() >= 0.5){
          cell.changeState();
        }
      });
    });
  }
  nextRun(){
    this.cells.forEach(row => {
      row.forEach(cell => {
        var cellNeighbours = this.getNeighbours({row: cell.row, column: cell.column});

        if(cell.isAlive){
          if(cellNeighbours.length < 2 || cellNeighbours.length > 3){
            cell.changeState();
          }
        }
        else{
          if(cellNeighbours.length == 3){
            cell.changeState();
          }
        }
      });
    });
    this.runNumber++;
  }
  getNeighbours(position): Cell[]{
    var neighbours = [];
    var elementsToSearch = [
      {row: position.row, column: position.column - 1},
      {row: position.row, column: position.column + 1},
      {row: position.row + 1, column: position.column},
      {row: position.row + 1, column: position.column - 1},
      {row: position.row + 1, column: position.column + 1},
      {row: position.row - 1, column: position.column},
      {row: position.row - 1, column: position.column - 1},
      {row: position.row - 1, column: position.column + 1},
    ];
    //var arr = [].concat(...this.cells);

    this.cells.forEach(row => {
      row.forEach(cell => {
        if(elementsToSearch.includes({row: cell.row, column: cell.column}) && cell.isAlive()){
          neighbours.push(cell);
        }
      });
    });
    
   
    return neighbours;
  }
  getRunNumber(){
    return this.runNumber;
  }
  grtBoard(){
    return this.cells;
  }
}
