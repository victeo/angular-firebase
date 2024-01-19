import firebase from 'firebase/app';
import 'firebase/storage';
import { environment } from '../../../environments/environment';

firebase.initializeApp(environment.firebase);

export default firebase;