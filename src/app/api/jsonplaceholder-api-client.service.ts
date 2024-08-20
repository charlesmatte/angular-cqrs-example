import { Injectable } from '@angular/core';
import { APIClient } from './api-client.base';

@Injectable({
  providedIn: 'root',
})
export class JSONPlaceholderAPIClient extends APIClient {
  override url: string = 'https://jsonplaceholder.typicode.com';
}
