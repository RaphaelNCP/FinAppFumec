import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBVoeQ7tRe161bXq5qwjKxEpwKGIgnZxBA",
	authDomain: "finappfumec.firebaseapp.com",
	projectId: "finappfumec",
	storageBucket: "finappfumec.appspot.com",
	messagingSenderId: "1049949566568",
	appId: "1:1049949566568:web:93dab9e6bf9e970ac52ddd",
	measurementId: "G-DNFY1G5R7M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
