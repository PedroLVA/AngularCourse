import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";
import {DUMMY_USERS} from "./DUMMY_USERS";
import { TasksComponent } from "./components/tasks/tasks.component";
import {IUser} from '../app/utils/IUser';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, UserComponent, NgFor, TasksComponent, NgIf]
})
export class AppComponent {
  title = 'learn-angular';
  users = DUMMY_USERS;
  selectedUser?: IUser;


  onSelectUser(user: IUser){
    this.selectedUser = user;
  }
}
