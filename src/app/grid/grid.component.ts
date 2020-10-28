import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../_models/cell';
import { GameService } from '../_services/game.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() board: Cell[][] = [];

  private subscibedEvents: Subscription;

  constructor(private game: GameService) { }

  ngOnInit() {

  }

}
