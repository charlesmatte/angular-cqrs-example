import { BaseRepository } from "../repositories/base-repository.service";

export interface IFacade<T> {
  _repository: BaseRepository<T>;
}

export interface IQueryFacade<T> extends IFacade<T> {
  query(): void;
  executeQuery(): void;
  callback(data: T | T[]): void;
}

export interface ICommandFacade<T> extends IFacade<T> {
  command(): void;
  executeCommand(): void;
  callback(data: T | T[]): void;
}
