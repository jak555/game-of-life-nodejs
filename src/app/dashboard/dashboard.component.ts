import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../_services/game.service';
import { ControlsComponent } from '../controls/controls.component';
import { Cell } from '../_models/cell';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //@ViewChild(ControlsComponent, {read: true, static:true}) controls:ControlsComponent;
  board: Cell[][];
  constructor(private game: GameService) {
    
  }

  ngOnInit() {
    this.board = this.game.grtBoard();
  }
  
}
