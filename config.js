// إعدادات الربط مع Firebase — عدّل القيم دي مرة واحدة بس.
// 1) ownerEmail: إيميل Google بتاعك (صاحب النظام، له كل الصلاحيات).
// 2) firebase: الصق هنا firebaseConfig من Firebase Console → Project settings → Your apps → Web app.
window.EZZ_CONFIG = {
  ownerEmail: "PASTE_YOUR_GOOGLE_EMAIL@gmail.com",
  firebase: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_PROJECT_ID.appspot.com",
    messagingSenderId: "PASTE_SENDER_ID",
    appId: "PASTE_APP_ID"
  }
};
