import { Component } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { TimerWidgetComponent } from './timer-widget.component';

@Component({
  selector: 'pomodoro-timer',
  template: '<router-outlet></router-outlet>'
})

export class TimerComponent {}

export const timerRoutes: Routes = [
  { path: ':id',
    component: TimerWidgetComponent,
  }, {
    path: '',
    component: TimerWidgetComponent,
  }
]
