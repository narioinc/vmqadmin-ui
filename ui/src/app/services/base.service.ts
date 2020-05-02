import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
import { environment } from 'src/environments/environment';

export class BaseService {
  public vmqURL = environment.vmqAPIHost + ":" + environment.vmqAPIPort
  public localAPIUrl = environment.localAPIHost + ":" + environment.localAPIPort  // URL to web api
  public vmqAdmin;
  public vmqAdminApiKey: string;

constructor(){
  this.vmqAdmin = JSON.parse(localStorage.getItem("admin"))
  if(this.vmqAdmin){
    this.vmqAdminApiKey = this.vmqAdmin[0].apikey;
  }
}
public handleError(error: HttpErrorResponse) {
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