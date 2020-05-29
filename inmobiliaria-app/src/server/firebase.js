import app from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0wwWSwt2-NJSFhbDxp__pkLVNDe2DzVg",
  authDomain: "home-43dce.firebaseapp.com",
  databaseURL: "https://home-43dce.firebaseio.com",
  projectId: "home-43dce",
  storageBucket: "home-43dce.appspot.com",
  messagingSenderId: "437957221495",
  appId: "1:437957221495:web:9963dafb7c210d3be83a72",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }
}

export default Firebase;
