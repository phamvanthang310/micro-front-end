import * as webcomponent from '@webcomponents/custom-elements/src/native-shim';
import * as bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {MyFirebase} from "./authen/my-firebase";
import * as FireBaseUI from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const fireBase = new MyFirebase();
export { fireBase };
export { webcomponent };
export { bootstrap };
export { FireBaseUI };
