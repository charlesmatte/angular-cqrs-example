import { ICommandFacade } from "./facade.interface";

export interface ICommandComponent<T> {
  facade: ICommandFacade<T>;
}
