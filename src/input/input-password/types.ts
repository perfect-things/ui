import type { InputProps } from '../types';


export interface InputPasswordProps extends InputProps {
	strength?: boolean;
}

interface ZxcvbnResult {
	score: number;
	feedback: {
		warning: string;
		suggestions: string[];
	};
}

export interface ZxcvbnLib {
	(password: string): ZxcvbnResult;
}
