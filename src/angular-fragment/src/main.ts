import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AngularFragmentModule } from './angular-fragment.module';
import 'bootstrap/dist/css/bootstrap.min.css';
require('common');

platformBrowserDynamic().bootstrapModule(AngularFragmentModule);
