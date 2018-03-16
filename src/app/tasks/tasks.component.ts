import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskIconsComponent } from './task-icons.component';
import { TaskTooltipDirective } from './task-tooltip.directive';
import {TaskService, Task, SHARED_PIPES} from '../shared/shared';

@Component ({
    selector: 'pomodoro-tasks',
    styleUrls : ['tasks.component.css'],
    templateUrl : 'tasks.component.html',
})
export class TasksComponent implements OnInit {
    today : Date;
    tasks : Task[];
    queuedPomodoros : number;
    timerMinutes: number;
    queueHeaderMapping : any = {
      '=0' : 'No pomodoros',
      '=1' : 'One pomodoro',
      'other' : '# pomodoros',            
    }

    ngOnInit() : void {
      this.updateQueuedPomodoros();
    }

    constructor (private taskService : TaskService, private router: Router) {
      this.tasks = this.taskService.taskStore;
      this.today = new Date();
      this.timerMinutes = 1;
    }

    toggleTask(task:Task) : void {
      task.queued = !task.queued;
      this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros(): void {
      this.queuedPomodoros = this.tasks
        .filter((task: Task) => task.queued)
        .reduce((pomodoros: number, queuedTask: Task) => {
          return pomodoros + queuedTask.pomodorosRequired;
        }, 0);
    }

    workOn(index: number) : void {
      this.router.navigate(['timer', index]);
    }
}