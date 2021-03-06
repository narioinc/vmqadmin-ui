import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class MetricsService extends BaseService{

  constructor(private http: HttpClient) {
    super();
  }

  getMetrics(): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/metrics", httpOptions).pipe(
      catchError(this.handleError)
    )
  }

}
