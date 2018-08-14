import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HeaderComponent } from './components/header.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [HeaderComponent],
  entryComponents: [HeaderComponent]
})
export class AngularFragmentModule {
  constructor(private injector: Injector) {
    const header = createCustomElement(HeaderComponent, { injector });
    customElements.define('angular-header', header);
  }

  ngDoBootstrap() {}
}