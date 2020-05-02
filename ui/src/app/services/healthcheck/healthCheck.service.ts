import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class HealthCheckService extends BaseService {
 
  constructor(private http: HttpClient) { 
    super();
  }

  checkHealth(): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<Object>(this.vmqURL + "/health").pipe(
      catchError(this.handleError)
    );
  }
}
