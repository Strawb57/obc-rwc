   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
   import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyApOHpySPvUEyWF3Rh2VUHX11nAd-n8iyA",
     authDomain: "obc-rwc2023.firebaseapp.com",
     projectId: "obc-rwc2023",
     storageBucket: "obc-rwc2023.appspot.com",
     messagingSenderId: "268324751628",
     appId: "1:268324751628:web:c5aa26805603f719f16129"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

  console.log(app);
  console.log(auth);