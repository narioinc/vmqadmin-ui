import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-model'
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['User ID', 'First Name', 'Last Name', 'Action'];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.userService.getUsers().subscribe(
      response => {this.users = response},
      error => {}
    )
  }

}
