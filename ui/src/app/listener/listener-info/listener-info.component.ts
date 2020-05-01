import { Component, OnInit } from '@angular/core';
import { Listener } from 'src/app/models/listener-model';
import { ListenerService } from 'src/app/services/listener/listener.service';

@Component({
  selector: 'app-listener-info',
  templateUrl: './listener-info.component.html',
  styleUrls: ['./listener-info.component.css']
})
export class ListenerInfoComponent implements OnInit {
  listeners: Listener[];
  displayedColumns: string[] = ['Type', 'Running Status', 'IP', 'Port', "Mountpoint", "Max Connections", "Actions"];
  constructor(
    private listenerService: ListenerService
  ) { }

  ngOnInit(): void {
    this.getListeners();
  }

  getListeners(): void{
    this.listenerService.getListeners().subscribe(
      response =>{
        this.listeners = response["table"];
      },
      error => {}
    )
  }
}
