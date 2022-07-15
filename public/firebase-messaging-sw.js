// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBoa5PXUmJqq4P_34nDco0v6ylmObRBnSA",
  authDomain: "office-talk-teton.firebaseapp.com",
  projectId: "office-talk-teton",
  storageBucket: "office-talk-teton.appspot.com",
  messagingSenderId: "672360034822",
  appId: "1:672360034822:web:1a59ba0f448bd40d43c987"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});