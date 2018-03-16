import { Component } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Task, TaskService } from '../shared/shared';

import { Injectable }    from '@angular/core';
import { Observable }    from 'rxjs/Observable';
 
export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
 
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}


@Component({
  selector: 'pomodoro-tasks-editor',
  templateUrl: 'task-editor.component.html'
})

export class TaskEditorComponent {
  task: Task;
  changesSaved: boolean;

  constructor(private title: Title, private router: Router, private taskService: TaskService) {
    // instantiate a task based on the Task interface defintion.
    this.task = <Task>{};
   }

   saveTask() {
     this.task.deadline = new Date(this.task.deadline.toString());
     this.taskService.addTask(this.task);
     this.changesSaved = true;
     this.router.navigate(['']);
   }

   canDeactivate(): Promise<boolean> | boolean {
    if (this.changesSaved) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return confirm('Discard changes?');
  }

}
