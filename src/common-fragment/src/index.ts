import * as webcomponent from '@webcomponents/custom-elements/src/native-shim';
import { MyFirebase } from './authen/my-firebase';
import * as FireBaseUI from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const fireBase = new MyFirebase();
const bootstrap = require('bootstrap/dist/css/bootstrap.min.css');

export { fireBase };
export { webcomponent };
export { bootstrap };
export { FireBaseUI };
