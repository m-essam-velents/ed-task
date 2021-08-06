import { combineReducers } from 'redux'
import CoursesReducer from './courses/courses-reducer'

const rootReducer = combineReducers({
  courses: CoursesReducer,
})

export default rootReducer
