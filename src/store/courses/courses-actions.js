import axios from 'axios'

// getting all courses from the   ---> api/
export const getCourses = (
  perPageParam = 1,
  currPageParam = 1,
  searchQueryParam = '',
  filtersParam = [],
  orderByParam = {
    field: 'name',
    direction: 'desc',
  },
) => async (dispatch) => {
  try {
    dispatch({
      type: 'ALL_COURSES_REQUEST',
    })
    let dataLink = {
      perPage: perPageParam,
      page: currPageParam,
      searchQuery: searchQueryParam,
      filters: filtersParam,
      orderBy: orderByParam,
    }
    const { data } = await axios.post(
      'https://stag.api.student.gateway.eduact.me/api/course/fetch',
      dataLink,
    )
    dispatch({
      type: 'ALL_COURSES_SUCCESS',
      payload: data.data,
    })
    console.log(data.data)

} catch (err) {
    console.log(err)
    dispatch({
      type: 'ALL_COURSES_FAIL',
      payload: err,
    })
  }
}

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: 'CLEAR_ERRORS',
  })
}
