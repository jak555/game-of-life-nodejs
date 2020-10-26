import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  
  private runing: boolean;
  private runNumber: number;

  constructor() { 
    this.runing = false;
    this.runNumber = 0;
  }

  ngOnInit() {
  }

  start(){

  }
  stop(){
    
  }

}
