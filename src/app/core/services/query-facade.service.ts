import { Observable } from 'rxjs';
import { IQueryFacade } from '../../interfaces/facade.interface';
import { BaseFacade } from './base-facade.service';

export abstract class QueryFacade<T>
  extends BaseFacade<T>
  implements IQueryFacade<T>
{
  abstract query(): Observable<any>;
  abstract queryCallback(value: any): void;

  public executeQuery(): void {
    this._loading.next(true);
    this.query().subscribe(
      this.handleAsyncQueryResult(this.queryCallback.bind(this))
    );
  }

  private handleAsyncQueryResult(callback: (value: any) => void) {
    return {
      next: callback,
      error: (err: any) => {
        console.error('err', err.toString());
      },
      complete: () => {
        this._loading.next(false);
      },
    };
  }
}
