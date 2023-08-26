export interface CustomFetchOptions {
	method?: Methods
	headers?: Record<string, string>
	body?: any
	signal?: AbortSignal
}

export type Methods =
	| 'GET'
	| 'POST'
	| 'PUT'
	| 'DELETE'
	| 'PATCH'
	| 'HEAD'
	| 'OPTIONS'

export interface CustomFetchResponse {
	err: boolean
	status: string | number
	statusText: string
}