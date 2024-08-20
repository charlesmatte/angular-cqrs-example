import { BehaviorSubject } from 'rxjs';
import { IFacade } from '../../interfaces/facade.interface';
import { BaseRepository } from '../../repositories/base-repository.service';

export abstract class BaseFacade<T> implements IFacade<T> {
  abstract _repository: BaseRepository<T>;

  protected readonly _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();
}
