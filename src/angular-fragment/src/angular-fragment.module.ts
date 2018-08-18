import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { components } from './components';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [BrowserModule],
  declarations: components,
  entryComponents: components
})
export class AngularFragmentModule {
  constructor(private injector: Injector) {
    const header = createCustomElement(HeaderComponent, {injector});
    customElements.define('angular-header', header);
  }

  ngDoBootstrap() {
  }
}