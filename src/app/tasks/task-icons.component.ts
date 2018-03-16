import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { Task} from '../shared/shared';


@Component({
  selector: 'pomodoro-task-icons',
  template: `<img *ngFor="let icon of icons"
                  src="/assets/img/pomodoro.png"
                  width="{{size}}">`
})
export class TaskIconsComponent implements OnInit {
  @Input() task: Task;
  icons: Object[] = [];
  @Input() size : number;

  ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({ name: this.task.name });
  }
}
