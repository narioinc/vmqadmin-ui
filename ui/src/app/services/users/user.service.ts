import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { BaseService } from '../base.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
    
  constructor(private http: HttpClient) { 
    super();
  }

createAdmin(adminUser: User): Observable<User[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.post<User[]>(this.localAPIUrl + "/users/addAdmin", adminUser, httpOptions).pipe(
    catchError(this.handleError)
  );
}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.localAPIUrl + "/users").pipe(
    catchError(this.handleError)
  );
}

getAdmin(): Observable<User> {
  return this.http.get<User>(this.localAPIUrl + "/users/admin").pipe(
    catchError(this.handleError)
  );
}

deleteUser(userID: string): Observable<object> {
  return this.http.delete(this.localAPIUrl + "/users/" + userID).pipe(
    catchError(this.handleError)
  );
}

updateUser(user: User): Observable<object> {
  return this.http.patch(this.localAPIUrl+ "/users/update", user).pipe(
    catchError(this.handleError)
  )
}

checkApikey(apikey: string): Observable<Object> {
  console.log(this.vmqURL + "/api/v1/cluster/show");
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(apikey + ':')
    })
  };
  return this.http.get(this.vmqURL + "/api/v1/cluster/show", httpOptions).pipe(
    catchError(this.handleError)
  );
}
}
