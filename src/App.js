import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCourses } from './store/courses/courses-actions'

function App() {
  const { courses, error, loading } = useSelector((state) => state.courses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourses())
  },[])

  return (
    <div>
      <h1>{JSON.stringify(courses)}</h1>
    </div>
  )
}

export default App
