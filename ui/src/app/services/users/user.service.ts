import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private vmqURL = environment.localAPIHost + ":" + environment.localAPIPort + "/users"  // URL to web api
  constructor(private http: HttpClient) { }

createAdmin(adminUser: User): Observable<User[]> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.post<User[]>(this.vmqURL + "/addAdmin", adminUser, httpOptions).pipe(
    catchError(this.handleError)
  );
}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.vmqURL).pipe(
    catchError(this.handleError)
  );
}

getAdmin(): Observable<User> {
  return this.http.get<User>(this.vmqURL + "/admin").pipe(
    catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};


}
