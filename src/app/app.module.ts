import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { EnterTaskComponent } from './enter-task/enter-task.component';
import { ActiveTasksComponent } from './active-tasks/active-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    DoneTasksComponent,
    EnterTaskComponent,
    ActiveTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
