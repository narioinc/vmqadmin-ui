import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { User } from '../../models/user-model';


@Component({
  selector: 'app-setup-admin',
  templateUrl: './setup-admin.component.html',
  styleUrls: ['./setup-admin.component.css']
})
export class SetupAdminComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService : UserService
    
  ) { }
  adminForm = this.fb.group({});
  apikey = new FormControl('');
  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.apikey.value);
    var user = {
      userID: "admin",
      apikey: this.apikey.value,
      firstName: "admin",
      lastName: "admin"
    };
    this.userService.createAdmin(user).subscribe(adminUser => {
    });
  }



}
