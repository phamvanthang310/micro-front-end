import * as webcomponent from '@webcomponents/custom-elements/src/native-shim';
import { MyFirebase } from './authen/my-firebase';
import * as FireBaseUI from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { AwsCognito } from './authen/aws-cognito';

const fireBase = new MyFirebase();
const awsCognito = new AwsCognito();
const bootstrap = require('bootstrap/dist/css/bootstrap.min.css');

export { fireBase, webcomponent, bootstrap, FireBaseUI, awsCognito };
