import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  getApiBaseUrl(): string {
    return environment.apiBaseUrl;
  }

  errorHandler<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error occured: `, error);
      return of(result as T);
    };
  }

  catchError<T>(result?: (err: string) => void) {
    return (error: any): Observable<T> => {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
        result && result(error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `,
          error.error
        );
        result && result(error.error.message);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        () => new Error('Something bad happened; please try again later.')
      );
    };
  }
}
