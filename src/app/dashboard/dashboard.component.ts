import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../_services/game.service';
import { ControlsComponent } from '../controls/controls.component';
import { Cell } from '../_models/cell';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventsChild: Subject<void> = new Subject<void>();
  board: Cell[][];

  constructor(private game: GameService) { }

  ngOnInit() {
    
  }
  handleButtons(event){
    this.board = this.game.getBoard()
    this.eventsChild.next();
  }
  
}
