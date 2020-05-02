import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ListenerService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  getListeners(): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/api/v1/listener/show",  httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  stopListeners(IPAddress: string, port: string): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/api/v1/listener/stop?address=" + IPAddress + "&port=" + port,  httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  restartListeners(IPAddress: string, port: string): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/api/v1/listener/restart?address=" + IPAddress + "&port=" + port,  httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteListeners(IPAddress: string, port: string): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/api/v1/listener/delete?address=" + IPAddress + "&port=" + port,  httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
