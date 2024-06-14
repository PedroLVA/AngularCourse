import { Component, Input, Output, EventEmitter } from '@angular/core';
import {IUser} from '../../utils/IUser';
import { CardComponent } from "../../shared/card/card.component";


@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
    imports: [CardComponent]
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
