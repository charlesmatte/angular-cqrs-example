import { BaseRepository } from "../repositories/base-repository.service";

export interface IFacade<T> {
  _repository: BaseRepository<T>;
}

export interface IQueryFacade<T> extends IFacade<T> {
  query(): void;
  queryCallback(data: T | T[]): void;
  executeQuery(): void;
}

export interface ICommandFacade<T> extends IFacade<T> {
  command(): void;
  commandCallback(data: T): void;
  executeCommand(): void;
}
