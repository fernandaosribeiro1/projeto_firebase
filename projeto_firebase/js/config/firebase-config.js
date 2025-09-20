// configuração
const firebaseConfig = {
  apiKey: "AIzaSyAbQ36xpl3Vb4wxqAcL5xa34gxUUoK8voI",
  authDomain: "loja-de-make.firebaseapp.com",
  projectId: "loja-de-make",
  storageBucket: "loja-de-make.appspot.com", // cuidado que tinha erro no seu, eu já arrumei
  messagingSenderId: "40254038563",
  appId: "1:40254038563:web:a30d309fdae363a2950796",
  measurementId: "G-DF3LDRGQD8"
};

// inicialização
firebase.initializeApp(firebaseConfig);

// referência do bd
const db = firebase.firestore();
