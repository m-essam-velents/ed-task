const INITIAL_STATE = {
  courses: [],
}

const CoursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ALL_COURSES_REQUEST':
      return {
        loading: true,
        courses: [],
      }
    case 'ALL_COURSES_SUCCESS':
      return {
        loading: false,
        courses:action.payload
      }
    case 'ALL_COURSES_FAIL':
      return {
        loading: false,
        error: action.payload,
      }
    case 'CLEAR_ERRORS':
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default CoursesReducer
