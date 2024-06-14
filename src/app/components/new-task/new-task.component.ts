import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../../utils/ITask';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Output() cancelDialog = new EventEmitter();
  @Output() add = new EventEmitter<newTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onDialogClose(){
    this.cancelDialog.emit();
  }

  onSubmit(){
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredTitle,
      date:this.enteredTitle,
    });
  }
}
