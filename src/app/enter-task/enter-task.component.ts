import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.css']
})
export class EnterTaskComponent implements OnInit {

  @Output()
  emiter = new EventEmitter();

  taskContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.emiter.emit(this.taskContent);
    this.taskContent = '';
  }
}
