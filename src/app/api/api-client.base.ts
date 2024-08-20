import { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class APIClient {
  abstract url: string;
  protected http: HttpClient = inject(HttpClient);

  get<T>(
    endpoint: string,
    itemId?: string,
    params?: HttpParams
  ): Observable<T> {
    const url = itemId
      ? `${this.url}/${endpoint}/${itemId}`
      : `${this.url}/${endpoint}`;
    return this.http.get<T>(url, {
      params,
    });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    const headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };
    return this.http.post<T>(`${this.url}/${endpoint}`, body, { headers });
  }
}
