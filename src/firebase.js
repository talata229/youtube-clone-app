import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDNPtj0FB3PkV8ZCVZr8aVFupPhV8T3WDA',
//   authDomain: 'clone-app-737eb.firebaseapp.com',
//   projectId: 'clone-app-737eb',
//   storageBucket: 'clone-app-737eb.appspot.com',
//   messagingSenderId: '1062530964298',
//   appId: '1:1062530964298:web:3a1410233cd81a8ddcbfb3',
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxraKPBlrMcBQT2Wwaj5W82uBlON4xtA4',
  authDomain: 'clone-app-v2.firebaseapp.com',
  projectId: 'youtube-clone-app-v2',
  storageBucket: 'youtube-clone-app-v2.appspot.com',
  messagingSenderId: '577515920607',
  appId: '1:577515920607:web:7c5af5fabb8319c4a85d6a',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
