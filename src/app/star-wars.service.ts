import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class StarWarsService {
  private baseUrl = 'https://swapi.co/api';
  constructor(private http: HttpClient) {
  }

  public listCast(page?: number): Observable<any> {
    let getRequestUrl = `${this.baseUrl}/people`;

    if (page != null && !isNaN(page)) {
      getRequestUrl = getRequestUrl.concat(`?page=${page}`);
    }

    return this.http.get(getRequestUrl)
    .pipe(
      map(data => {
      return data;
    }),
    catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    // const errorMsg = error.message || `Houve um problema ao tentar se conectar com o servidor.`;
    return Observable.throw('Houve um problema ao tentar se conectar com o servidor'); // <= B
  }

  public cast(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/people/${id}`)
    .pipe(
      map(data => {
      return data;
    }),
    catchError(this.handleError));
  }
}
