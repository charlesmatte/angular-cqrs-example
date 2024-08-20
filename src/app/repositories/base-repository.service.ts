import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIClient } from '../api/api-client.base';

@Injectable()
export abstract class BaseRepository<T> {
  abstract apiClient: APIClient;

  abstract getAll(...queryParams: string[]): Observable<T[]>;

  abstract create(item: T): Observable<T>;
}
