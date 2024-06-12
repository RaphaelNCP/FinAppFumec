import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
	getReactNativePersistence,
	initializeAuth,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

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
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth };
