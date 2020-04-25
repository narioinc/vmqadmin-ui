import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
  private route: ActivatedRoute;

  ngOnInit(): void {
    console.log("routing now");
    this.router.navigate(['main', 'dashboard', 'health'], { relativeTo: this.route });
  }

}
