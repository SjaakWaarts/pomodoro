import { TasksComponent } from './tasks.component';
import { TaskEditorComponent, CanDeactivateGuard } from './task-editor.component';
import { TaskTooltipDirective } from './task-tooltip.directive';
import { TaskIconsComponent } from './task-icons.component';

const TASKS_DIRECTIVES: any[] = [
    TasksComponent,
    TaskEditorComponent,
    TaskTooltipDirective,
    TaskIconsComponent
];

const TASKS_PROVIDERS: any[] = [
    CanDeactivateGuard
]

export {
    TASKS_DIRECTIVES,
    TasksComponent,
    TaskEditorComponent,
    TaskTooltipDirective,
    TaskIconsComponent,

    TASKS_PROVIDERS,
    CanDeactivateGuard
}