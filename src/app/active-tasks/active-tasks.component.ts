import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.css']
})
export class ActiveTasksComponent implements OnInit {


  @Input()
  taskList = [];

  @Output()
  emiterRemove = new EventEmitter();
  @Output()
  emiterDone = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  
  removeTask(task){
    this.emiterRemove.emit(task);
  }

  doneTask(task){
    this.emiterDone.emit(task);
  }

}
