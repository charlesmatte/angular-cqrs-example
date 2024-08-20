import { BaseRepository } from "../repositories/base-repository.service";

export interface IFacade<T> {
  _repository: BaseRepository<T>;
  callback(data: T | T[]): void;
}

export interface IQueryFacade<T> extends IFacade<T> {
  query(): void;
  executeQuery(): void;
}

export interface ICommandFacade<T> extends IFacade<T> {
  command(): void;
  executeCommand(): void;
}
