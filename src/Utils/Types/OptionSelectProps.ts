import { Dispatch } from "react";

export type OptionSelectProps = {
	typeValue: Dispatch<
		React.SetStateAction<string>
	>;
	value: string;
};
