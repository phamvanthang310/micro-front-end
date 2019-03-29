import { Injectable, Injector, NgModuleFactoryLoader, NgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyloadService {
  constructor(private loader: NgModuleFactoryLoader, private injector: Injector) {
  }

  private moduleRef: NgModuleRef<any>;

  load(): Promise<void> {

    if (this.moduleRef) {
      return Promise.resolve();
    }

    const path = 'src/angular-fragment/src/lazy-module/lazy-loading.module#LazyLoadingModule';

    return this
      .loader
      .load(path)
      .then(moduleFactory => {
        this.moduleRef = moduleFactory.create(this.injector).instance;
        console.debug('moduleRef', this.moduleRef);
      })
      .catch(err => {
        console.error('error loading module', err);
      });
  }

}
