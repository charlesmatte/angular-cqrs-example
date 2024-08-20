import { Component, inject, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IQueryComponent } from '../../interfaces/query-component.interface';
import { QueryFacade } from '../services/query-facade.service';

@Component({
  template: '',
})
export abstract class QueryComponent<T> implements IQueryComponent<T>, OnInit {
  abstract facade: QueryFacade<T>;
  spinnerService = inject(NgxSpinnerService);

  ngOnInit(): void {
    this.registerSpinner();
    this.facade.executeQuery();
  }

  private registerSpinner(): void {
    this.facade.loading$.subscribe((loading) => {
      if (loading) {
        this.spinnerService.show();
      } else {
        this.spinnerService.hide();
      }
    });
  }
}
