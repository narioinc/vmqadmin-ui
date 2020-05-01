import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/session-model';
import { SessionService } from 'src/app/services/sessions/session.service';

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.css']
})
export class SessionInfoComponent implements OnInit {
  sessions: Session[];
  displayedColumns: string[] = ['Client ID', 'Online Status', 'Mountpoint', 'Peer Host','Peer Port','User', 'Actions'];
  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getSessions();
  }

  getSessions(): void{
    this.sessionService.getSessions().subscribe(
      response => {
        this.sessions = response["table"];
      },
      error => {}
    )
  }

}
