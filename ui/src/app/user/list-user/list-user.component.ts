import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../../models/user-model'
import { UserService } from 'src/app/services/users/user.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: MatTableDataSource<User>;
  displayedColumns: string[] = ['User ID', 'First Name', 'Last Name', 'Action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users = new MatTableDataSource([])
    this.users.sort = this.sort;
    this.users.paginator = this.paginator;
    this.getUser();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.users.filter = filterValue;
  }

  getUser(): void{
    this.userService.getUsers().subscribe(
      response => {
        console.log(response);
        this.users.data = response;
        this.users.sort = this.sort;       
      },
      error => {}
    )
  }

  deleteUser(user: User): void{
    console.log(user);
    this.userService.deleteUser(user.userID).subscribe(
      response => {
        console.log("deleted user" + user.userID);
        this.ngOnInit();
      },
      error => {}
    )
  }

  editUser(user: User): void{

  }

}
