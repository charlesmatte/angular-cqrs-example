import { catchError, finalize, map, Observable, of } from 'rxjs';
import { ICommandFacade } from '../../interfaces/facade.interface';
import { BaseFacade } from './base-facade.service';

export abstract class CommandFacade<T>
  extends BaseFacade<T>
  implements ICommandFacade<T>
{
  abstract command(item?: T): Observable<T>;

  executeCommand(item?: T) {
    this._loading.next(true);
    return this.command(item).pipe(
      map((data) => ({ success: true, message: 'Success', data })),
      catchError((err) => {
        console.error('err', err.toString());
        return of({ success: false, message: 'Error', data: null });
      }),
      finalize(() => this._loading.next(false))
    );
  }
}
