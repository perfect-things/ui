

export type ApiProp = {
	name: string;
	type?: string;
	default?: string;
	required?: boolean;
	description?: string;
};


export interface ApiTableProps {
	title?: string;
	description?: string;
	props?: ApiProp[];
}
