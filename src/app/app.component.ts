import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskList: Array<string> = ['Task1', 'Task2'];
  doneList: Array<string> = [];

  addTask(event) {
    if (event !== '') {
      this.taskList.push(event);
    } else { alert('"Content can not be empty."'); }
  }

  removeTask(taks){
    //this.taskList = this.taskList.filter(x => x !== taks)
    let x = this.taskList.indexOf(taks);
    this.taskList.splice(x , 1);
  }

  doneTask(task){
    this.doneList.push(task);
    this.removeTask(task);
  }
}