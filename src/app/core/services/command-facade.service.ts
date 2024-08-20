import { map, Observable, of, tap } from "rxjs";
import { ICommandFacade } from "../../interfaces/facade.interface";
import { BaseFacade } from "./base-facade.service";

export abstract class CommandFacade<T> extends BaseFacade<T> implements ICommandFacade<T> {
  abstract command(data?: T): Observable<T>;
  abstract commandCallback(result: T): void;

  executeCommand(data?: T) {
    this._loading.next(true);
    return this.command(data).pipe(
      tap(this.handleAsyncCommandResult(this.commandCallback.bind(this))),
      map((result) => ({ success: true, message: "Success", data: result }))
    );
  }

  private handleAsyncCommandResult(callback: (response: T) => void) {
    return {
      next: (data: T) => {
        callback(data);
      },
      error: (err: any) => {
        console.error("err", err.toString());
        return of({ success: false, message: "Error", data: null });
      },
      complete: () => {
        this._loading.next(false);
      },
    };
  }
}
