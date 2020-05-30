import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, LOAD_MORE_POSTS_SUCCESS, LOAD_MORE_POSTS_REQUEST } from 'src/store/actions/actionTypes';

const initialState = {
	data: null,
	isLoading: false
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS_REQUEST: 
		case LOAD_MORE_POSTS_REQUEST: {
			return {
				...state,
				isLoading: true
			};
		}
		case GET_POSTS_SUCCESS: {
			return {
				isLoading: false,
				data: action.payload
			};
		}
		case LOAD_MORE_POSTS_SUCCESS: {
			const {data} = state || {};
			const {data: posts} = data || {};
			const listPosts = [...posts, ...action.payload.data]
			return {
				...state,
				isLoading: false,
				data: {...action.payload, data: listPosts}
			};
		}
		default:
			return state;
	}
};

export default reducer;
