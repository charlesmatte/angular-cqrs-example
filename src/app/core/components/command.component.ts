import { Component } from '@angular/core';
import { ICommandComponent } from '../../interfaces/command-component.interface';
import { CommandFacade } from '../services/command-facade.service';

@Component({
  template: '',
})
export abstract class CommandComponent<T> implements ICommandComponent<T> {
  abstract facade: CommandFacade<T>;
}
