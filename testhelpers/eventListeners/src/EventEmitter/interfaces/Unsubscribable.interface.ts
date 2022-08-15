import { SubScriber } from "../../types";

	export interface Unsubscribable {
		unsubscribe: (subscribee: SubScriber) => void;
	}

