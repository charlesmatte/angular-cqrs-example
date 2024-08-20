import { Component, inject } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ICommandComponent } from "../../interfaces/command-component.interface";
import { CommandFacade } from "../services/command-facade.service";

@Component({
  template: "",
})
export abstract class CommandComponent<T> implements ICommandComponent<T> {
  abstract facade: CommandFacade<T>;
  protected toastr = inject(ToastrService);
}
