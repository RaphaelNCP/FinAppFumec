import { User } from "firebase/auth";
import { Dispatch } from "react";

export type AuthType = {
	setUser: Dispatch<React.SetStateAction<User | undefined>>;
};
