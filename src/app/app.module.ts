import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {SHARED_PROVIDERS} from './shared/shared';
import {SHARED_PIPES} from './shared/shared';
import {TIMER_DIRECTIVES} from './timer/timer';
import {TASKS_DIRECTIVES} from './tasks/tasks';
import {TASKS_PROVIDERS} from './tasks/tasks';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TIMER_DIRECTIVES,
    TASKS_DIRECTIVES,
    SHARED_PIPES
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule,
    routing
  ],
  providers: [
    SHARED_PROVIDERS,
    TASKS_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
