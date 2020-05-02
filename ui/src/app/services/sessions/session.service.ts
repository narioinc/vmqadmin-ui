import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BaseService } from '../base.service';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService extends BaseService{

  constructor(private http: HttpClient) { 
    super()
  }

  getSessions(): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/api/v1/session/show",  httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  disconnectSession(clientID: string): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/api/v1/session/disconnect/?client-id=" + clientID, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  reauthorizeSession(username: string, clientID: string): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/api/v1/session/reauthorize/?username="+username + "&client-id=" + clientID,  httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
