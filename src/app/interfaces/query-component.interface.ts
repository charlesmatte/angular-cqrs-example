import { OnInit } from '@angular/core';
import { IQueryFacade } from './facade.interface';

export interface IQueryComponent<T> extends OnInit {
  facade: IQueryFacade<T>;
}
