import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-usertab',
  templateUrl: './usertab.component.html',
  styleUrls: ['./usertab.component.css']
})
export class UsertabComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
  }

}
