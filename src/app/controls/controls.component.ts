import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  
  private started: boolean;
  private runNumber: number;
  private running: boolean;
  //boardSize: number = 5;
  sizeForm: FormGroup;
  @Output() eventOutput = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private game: GameService) { 
    this.running = false;
    this.runNumber = 0;
    this.started = false;
  }

  ngOnInit() {
    this.sizeForm = this.formBuilder.group({
      size: ['', Validators.required]
    });
  }

  get fields() { return this.sizeForm.controls; }

  start(){
    if (this.sizeForm.invalid) {
      return;
    }
    var valueToFix = this.fields.size.value;
    //this.fields.size.setValue(parseInt(valueToFix));
    //this.started = true;

    this.game.createGame(valueToFix, valueToFix);
    console.log(valueToFix)
    this.eventOutput.emit(this.game);
  }
  next(){
    this.game.nextRun();
    this.runNumber = this.game.getRunNumber();
  }
  reset(){
    this.game.resetGame();
    this.runNumber = 0;
    this.running = false;
    this.started = false;
  }
}
