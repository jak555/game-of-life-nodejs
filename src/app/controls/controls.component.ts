import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
  
  private started: boolean;
  private runNumber: number;
  private running: boolean;
  sizeForm: FormGroup;

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
    var valueToFix:number = parseInt(this.fields.size.value, 10);
    this.fields.size.setValue(valueToFix);
    this.game.createGame(valueToFix, valueToFix);
    this.started = true;
    this.buttonClicked.emit();
  }
  next(){
    this.game.nextRun();
    this.runNumber = this.game.getRunNumber();
    this.buttonClicked.emit();
  }
  reset(){
    this.game.resetGame();
    this.runNumber = 0;
    this.running = false;
    this.started = false;
    this.buttonClicked.emit();
  }
}
