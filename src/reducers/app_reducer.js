export default function(state = {}, action) {
	// Reducers have two arguments-- the current state and the action.
  // Reducers will always return the next state.
	switch(action.type) {

		case 'FETCH_DATA':
			const newState = Object.assign({}, ...state, action.payload.data)
			return newState;

		default:
			return state;
	}

}
