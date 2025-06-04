export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

export type PartialRequired<T, K extends keyof T> = Required<Pick<T, K>> &
	Omit<T, K>;
