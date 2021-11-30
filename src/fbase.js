import firebase from "firebase/app";

// 인증키는 .env파일에 숨겨두고 github에 공개되지 않도록 설정해야한다.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "adin-e.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "adin-e.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

// export default를 사용하면 하나의 모듈만 남겨준다.
export default firebase.initializeApp(firebaseConfig);
