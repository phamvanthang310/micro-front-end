import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { HeaderComponent2 } from './components/header-2/header.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [HeaderComponent2],
  entryComponents: [HeaderComponent2]
})
export class LazyLoadingModule {
  constructor(private injector: Injector) {
    const header2 = createCustomElement(HeaderComponent2, {injector});
    customElements.define('angular-header-2', header2);
  }

  ngDoBootstrap() {
  }
}
