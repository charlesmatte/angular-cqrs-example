import { Component, OnInit } from "@angular/core";
import { IQueryComponent } from "../../interfaces/query-component.interface";
import { QueryFacade } from "../services/query-facade.service";

@Component({
  template: "",
})
export abstract class QueryComponent<T> implements IQueryComponent<T>, OnInit {
  abstract facade: QueryFacade<T>;

  ngOnInit(): void {
    this.facade.executeQuery().subscribe();
  }
}
