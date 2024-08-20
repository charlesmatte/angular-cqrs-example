import { map, Observable, tap } from "rxjs";
import { IQueryFacade } from "../../interfaces/facade.interface";
import { BaseFacade } from "./base-facade.service";

export abstract class QueryFacade<T> extends BaseFacade<T> implements IQueryFacade<T> {
  abstract query(): Observable<T | T[]>;
  abstract queryCallback(result: T | T[]): void;

  public executeQuery() {
    this._loading.next(true);
    return this.query().pipe(
      tap(this.handleAsyncQueryResult(this.queryCallback.bind(this))),
      map((result) => ({ success: true, message: "Success", data: result }))
    );
  }

  private handleAsyncQueryResult(callback: (result: T | T[]) => void) {
    return {
      next: callback,
      error: (err: any) => {
        console.error("err", err.toString());
      },
      complete: () => {
        this._loading.next(false);
      },
    };
  }
}
