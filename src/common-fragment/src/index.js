import { FireBase } from './authen/firebase';
import * as webcomponent from '@webcomponents/custom-elements/src/native-shim';
import * as bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import * as FireBaseUI from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const fireBase = new FireBase();
export { fireBase };
export { webcomponent };
export { bootstrap };
export { FireBaseUI };
