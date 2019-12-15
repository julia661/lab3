import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-unactive-users',
  templateUrl: './unactive-users.component.html',
  styleUrls: ['./unactive-users.component.css']
})
export class UnactiveUserComponent {

  constructor(private userService: UserService) { }

}
