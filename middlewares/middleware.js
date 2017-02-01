export const promiseMiddleware = () => {
	return (next) => (action) => {
		
		const { promise, types, ...rest } = action;
		console.log("*************NOT FETCH response received");	

		if (!promise) {
			return next(action);
		}
console.log("*************NOT FETCH response received");	
		const [REQUEST, SUCCESS, FAILURE] = types;

		next({ ...rest, type: REQUEST });

		return promise()
		.then(
			(payload) => {
				next({ ...rest, payload, type: SUCCESS })
			}
			)
		.fail(
			(error) => {
				next({ ...rest, error, type: FAILURE })
			}
			)
	}
};


