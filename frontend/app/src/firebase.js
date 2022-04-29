import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
        apiKey: "AIzaSyCnPW-C8Ymx4FCJ6_5kJVBB9aD4wHiHXQE",
        authDomain: "slackdb-d4066.firebaseapp.com",
        projectId: "slackdb-d4066",
        storageBucket: "slackdb-d4066.appspot.com",
        messagingSenderId: "161471380230",
        appId: "1:161471380230:web:1c12b403384454eecafc87",
        measurementId: "G-V087G23WSC"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;




