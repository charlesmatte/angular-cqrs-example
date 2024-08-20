import { BehaviorSubject, catchError, finalize, map, Observable, of, tap } from "rxjs";
import { IFacade } from "../../interfaces/facade.interface";
import { BaseRepository } from "../../repositories/base-repository.service";

export abstract class BaseFacade<T> implements IFacade<T> {
  abstract _repository: BaseRepository<T>;

  protected readonly _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  abstract callback(result: T | T[]): void;

  protected getPipeOperators(source: Observable<T | T[]>) {
    return source.pipe(
      tap(this.callback.bind(this)),
      map((result) => ({ success: true, message: "Success", data: result })),
      catchError((error) => {
        console.error("err", error.toString());
        return of({ success: false, message: "Error", data: null });
      }),
      finalize(() => {
        this._loading.next(false);
      })
    );
  }
}
