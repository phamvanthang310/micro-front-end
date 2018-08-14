import 'zone.js/dist/zone';

import '@webcomponents/custom-elements/src/native-shim';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularFragmentModule } from './src/angular-fragment.module';
import 'bootstrap/dist/css/bootstrap.min.css';

platformBrowserDynamic().bootstrapModule(AngularFragmentModule);
