import { Observable } from "rxjs";
import { IQueryFacade } from "../../interfaces/facade.interface";
import { BaseFacade } from "./base-facade.service";

export abstract class QueryFacade<T> extends BaseFacade<T> implements IQueryFacade<T> {
  abstract query(): Observable<T | T[]>;

  public executeQuery() {
    this._loading.next(true);
    return this.query().pipe(this.getPipeOperators.bind(this));
  }
}
