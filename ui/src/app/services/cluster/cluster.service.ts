import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ClusterService extends BaseService{

  constructor(private http: HttpClient) { 
    super()
  }

  getClusterInfo(): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/cluster/show",  httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  leaveCluster(nodeIP: string): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/cluster/leave?node=" + nodeIP,  httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  joinCluster(discoverNodeIP: string): Observable<object>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.vmqURL + "/cluster/join?discovery-node=" + discoverNodeIP,  httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
