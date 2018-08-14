import 'zone.js/dist/zone';

import '@webcomponents/custom-elements/src/native-shim';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularFragmentModule } from './src/angular-fragment.module';

platformBrowserDynamic().bootstrapModule(AngularFragmentModule);
