import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

// thunk success
export function loadAuthorsSuccess(authors) {
	return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// course api thunk
export function loadAuthors() {
	return function (dispatch) {
		return authorApi
			.getAuthors()
			.then((authors) => {
				dispatch(loadAuthorsSuccess(authors));
			})
			.catch((err) => {
				throw err;
			});
	};
}
