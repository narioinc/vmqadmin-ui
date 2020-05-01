import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(private router:Router) { }
  events: string[] = [];
  opened: boolean;
  private route: ActivatedRoute;

  ngOnInit(): void {
    this.opened = false;
  }
}
