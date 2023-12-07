import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBmmleCZoV6i_gDAG5hWydyBoAVcmA_U40',
  authDomain: 'all-things-ga.firebaseapp.com',
  databaseURL:
    'https://all-things-ga-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'all-things-ga',
  storageBucket: 'all-things-ga.appspot.com',
  messagingSenderId: '406008504083',
  appId: '1:406008504083:web:3740d3fb97d7a1d20a04e6',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
