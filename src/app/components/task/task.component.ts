import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ITask} from '../../utils/ITask';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: ITask;
  @Output() complete = new EventEmitter<string>();


  onClickedTask(){
    this.complete.emit(this.task.id);
  }
}
