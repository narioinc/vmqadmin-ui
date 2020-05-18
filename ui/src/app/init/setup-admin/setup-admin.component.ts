import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setup-admin',
  templateUrl: './setup-admin.component.html',
  styleUrls: ['./setup-admin.component.css']
})
export class SetupAdminComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService : UserService,
    private router: Router    
  ) { }
  adminForm = this.fb.group({});
  apikey = new FormControl('');
  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.userService.checkApikey(this.apikey.value).subscribe(
      response =>{
        console.log("admin credentials are valid");
        this.createAdmin(this.apikey.value);
      },
      error => {
        console.log("admin credentials are invalid");
      }
    )
  }

  createAdmin(apikey: string): void{
    var user = {
      userID: "admin",
      apikey: apikey,
      firstName: "admin",
      lastName: "admin"
    };
    this.userService.createAdmin(user).subscribe(
    response => { 
      this.router.navigate(['/main']);
    },
    error => {console.log(error)}
    );
  }



}
