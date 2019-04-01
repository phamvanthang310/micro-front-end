import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import * as components from './component';

@NgModule({
  declarations: [
    AppComponent,
    components.HeaderComponent,
    components.ProductListComponent,
    components.ProductDetailsComponent,
    components.ProductItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    AppComponent,
    components.HeaderComponent,
    components.ProductListComponent,
    components.ProductDetailsComponent,
    components.ProductItemComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const header = createCustomElement(components.HeaderComponent, {injector: this.injector});
    customElements.define('product-header', header);

    const productList = createCustomElement(components.ProductListComponent, {injector: this.injector});
    customElements.define('product-list', productList);

    const productItem = createCustomElement(components.ProductItemComponent, {injector: this.injector});
    customElements.define('product-item', productItem);

    const product = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('product-main', product);
  }
}
