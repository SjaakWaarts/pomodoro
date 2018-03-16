import {  Routes, RouterModule } from '@angular/router';
import { TasksComponent, TaskEditorComponent, CanDeactivateGuard } from './tasks/tasks';
import { TimerComponent } from './timer/timer';
import { timerRoutes } from './timer/timer.component';



// Route config let's you map routes to components
const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'tasks/editor',
    component: TaskEditorComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'timer',
    component: TimerComponent,
    children: timerRoutes
  }
];

export const routing = RouterModule.forRoot(routes);