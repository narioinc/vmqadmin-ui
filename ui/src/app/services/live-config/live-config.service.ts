import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { BaseService } from '../base.service';
import {LiveConfig} from '../../models/liveconfig-model';

@Injectable({
  providedIn: 'root'
})
export class LiveConfigService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  getLiveConfig(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.get(this.localAPIUrl + "/liveConfig", httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  setLiveConfigSingle(liveConfig: LiveConfig, val: string): Observable<any>{
    let config = {config_name: liveConfig.config_name, value: val}
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(this.vmqAdminApiKey + ':')
      })
    };
    return this.http.patch(this.localAPIUrl + "/liveConfig/set", config, httpOptions).pipe(
      catchError(this.handleError)
    )
  }
}
