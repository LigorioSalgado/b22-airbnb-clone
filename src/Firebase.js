import * as firebase from 'firebase';


const  config = {
    apiKey: "AIzaSyD1jhpSV6E8xRMhOX1mdM2x8_4hLO_DNIc",
    authDomain: "todo-c1655.firebaseapp.com",
    databaseURL: "https://todo-c1655.firebaseio.com",
    projectId: "todo-c1655",
    storageBucket: "todo-c1655.appspot.com",
    messagingSenderId: "375493701966"
  };

export default firebase.initializeApp(config)