import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BaseService } from '../base.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  private localAPIUrl = environment.localAPIHost + ":" + environment.localAPIPort + "/users"  // URL to web api
  private vmqUrl = "http://localhost:4200/api/v1";
  constructor(private http: HttpClient) { 
    super();
  }

createAdmin(adminUser: User): Observable<User[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.post<User[]>(this.localAPIUrl + "/addAdmin", adminUser, httpOptions).pipe(
    catchError(this.handleError)
  );
}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.localAPIUrl).pipe(
    catchError(this.handleError)
  );
}

getAdmin(): Observable<User> {
  return this.http.get<User>(this.localAPIUrl + "/admin").pipe(
    catchError(this.handleError)
  );
}

checkAdmin(apikey: string): Observable<Object> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(apikey + ':')
    })
  };
  return this.http.get(this.vmqUrl + "/cluster/show").pipe(
    catchError(this.handleError)
  );
}
}
