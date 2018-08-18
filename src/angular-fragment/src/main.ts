import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AngularFragmentModule } from './angular-fragment.module';
require('common');

platformBrowserDynamic().bootstrapModule(AngularFragmentModule);
