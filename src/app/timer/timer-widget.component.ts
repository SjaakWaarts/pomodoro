import { Component } from '@angular/core';
import { Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TaskService } from '../shared/shared'


@Component ({
    selector: 'pomodoro-timer-widget',
    templateUrl : 'timer-widget.component.html',
    styleUrls: ['timer-widget.component.css']
})


export class TimerWidgetComponent {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabel : string;
    taskObservable: Observable<string>; 
    taskIndex : number;
    taskName: string;
        
    constructor (
        private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
    }

    ngOnInit() : void {
        this.taskObservable = this.route.paramMap
        .switchMap((params: ParamMap) => {
                let id = params.get('id');
                if (id == null) {
                    id = ' ';
                    this.taskName ='Timer';
                } else {
                    this.taskIndex = parseInt(id);
                    this.taskName = this.taskService.taskStore[this.taskIndex].name;
                }            
                return id;
            });
        this.taskObservable.subscribe(id => {
                let a = 10;
                // this.taskIndex = parseInt(id);
                // this.taskName = this.taskService.taskStore[this.taskIndex].name;
            });        
        this.resetPomodoro();
        setInterval(() => this.tick(), 1000);
    }

    resetPomodoro() : void {
        this.isPaused = true;
        this.minutes = 1;
        this.seconds = 25;
        this.buttonLabel = 'start';
    }


    private tick() : void {
        if (!this.isPaused) {
            this.buttonLabel = 'pause';
            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.resetPomodoro();
                }
            }
        }      
    }

    togglePause() : void {
        this.isPaused = !this.isPaused;
        if (this.minutes < 1 || this.seconds < 25) {
            this.buttonLabel = this.isPaused ? 'resume' : 'pause';
        }
    }
}