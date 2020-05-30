import axios from 'src/axios';
import queryString from 'query-string';

import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_ERRORS,
	LOAD_MORE_POSTS_REQUEST,
	LOAD_MORE_POSTS_SUCCESS
} from 'src/store/actions/actionTypes';

export const getPosts = (params) => dispatch => {
	const queryParams = queryString.stringify(params);
	dispatch({
		type: GET_POSTS_REQUEST
	});
	axios
		.get(`https://reqres.in/api/users?${queryParams}`)
		.then(res => {
			dispatch({
				type: GET_POSTS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response
			});
		});
};

export const loadMorePosts = (params) => dispatch => {
	const queryParams = queryString.stringify(params);
	dispatch({
		type: LOAD_MORE_POSTS_REQUEST
	});
	axios
		.get(`https://reqres.in/api/users?${queryParams}`)
		.then(res => {
			dispatch({
				type: LOAD_MORE_POSTS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response
			});
		});
};
