import { Component, Input, Output, EventEmitter } from '@angular/core';
import {IUser} from '../../utils/IUser';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required: true}) user!: IUser;
  @Input({required: true}) selected!: boolean;
  @Output() selectedUser = new EventEmitter();
  

 

  get imgPath (){
    return 'assets/users/' + this.user?.avatar;
  }

  onClickedUser(){
    this.selectedUser.emit(this.user);
  }

}
