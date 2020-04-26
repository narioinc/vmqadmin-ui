import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users/user.service'
import { User } from '../../models/user-model'
import { InitRouterModule } from '../init-routing'
import { Router, ActivatedRoute } from '@angular/router';
import { HealthCheckService } from '../../services/healthcheck/healthCheck.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private adminUser: User;
  private route: ActivatedRoute;
  constructor(
    private userService: UserService,
    private healthCheckService : HealthCheckService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkVmqHealth();
  }

  getAdmin(): void {
    this.userService.getAdmin()
    .subscribe(
    adminUser =>{ 
      this.adminUser = adminUser;
      localStorage.setItem("admin", JSON.stringify(adminUser));
      this.router.navigate(['/main']);
    },
    error => {
      console.log("Admin user not found")
      this.router.navigate(['setup-admin'], { relativeTo: this.route});
    }
    );
  }

  checkVmqHealth(): void {
    this.healthCheckService.checkHealth().subscribe(
      result => {
        console.log("service is running");
        this.getAdmin();
      },
      error => {
        console.log("vmq service is down");
        //show dialog to setup config
      }
    );
  }

}
