import { Component, Input, inject } from '@angular/core';
import {ITask} from '../../utils/ITask';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';


@Component({ 
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input({required: true}) task!: ITask;
  private tasksService = inject(TasksService);


  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
