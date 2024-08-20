import { Observable } from "rxjs";
import { ICommandFacade } from "../../interfaces/facade.interface";
import { BaseFacade } from "./base-facade.service";

export abstract class CommandFacade<T> extends BaseFacade<T> implements ICommandFacade<T> {
  abstract command(data?: T): Observable<T>;

  executeCommand(data?: T) {
    this._loading.next(true);
    return this.command(data).pipe(this.getPipeOperators.bind(this));
  }
}
