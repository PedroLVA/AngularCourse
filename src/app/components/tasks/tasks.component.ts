import { Component, Input } from '@angular/core';
import { IUser } from '../../utils/IUser';
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { newTaskData } from '../../utils/ITask';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) user?: IUser
  addingTaskVisibe = false;
  

  constructor(private tasksService: TasksService) {
  
  }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user!.id)

  }




  onStartAddTask() {
    this.addingTaskVisibe = true;
  }

  onCancelDialog() {
    this.addingTaskVisibe = false;
  }

  
}
