import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import ENV from "lib/utils/env";

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKE,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const initializeFirebaseApp = () => {
  getAnalytics(app);
  getAuth(app);
};

export default initializeFirebaseApp;
