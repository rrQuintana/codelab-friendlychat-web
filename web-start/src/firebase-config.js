/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
  PASO 1:   */
const config = {
  apiKey: "AIzaSyAR5KATUL4JwKsz4UJpTeS_cXx-NZYdohc",
  authDomain: "friendlychat-b41c2.firebaseapp.com",
  projectId: "friendlychat-b41c2",
  storageBucket: "friendlychat-b41c2.appspot.com",
  messagingSenderId: "229018035876",
  appId: "1:229018035876:web:0255aac7dcc118df13a831"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}