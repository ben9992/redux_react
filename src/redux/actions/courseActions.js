import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
export function createCourse(course) {
	return { type: types.CREATE_COURSE, course };
}

// thunk success
export function loadCoursesSuccess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// course api thunk
export function loadCourses() {
	return function (dispatch) {
		return courseApi
			.getCourses()
			.then((courses) => {
				dispatch(loadCoursesSuccess(courses));
			})
			.catch((err) => {
				throw err;
			});
	};
}
