import { BaseRepository } from '../repositories/base-repository.service';

export interface IFacade<T> {
  _repository: BaseRepository<T>;
}

export interface IQueryFacade<T> extends IFacade<T> {
  query(): void;
  queryCallback(value: any): void;
  executeQuery(): void;
}

export interface ICommandFacade<T> extends IFacade<T> {
  command(): void;
  executeCommand(): void;
}
