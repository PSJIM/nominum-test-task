/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import axios from 'axios'

// categories

export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/categories')

  const result = response.data.sort((a, b) => {
    if (a.name < b.name) { return -1 }
    if (a.name > b.name) { return 1 }
    return 0
  })

  result.forEach((category) => category.isAllowed = true)

  dispatch({ type: 'FETCH_CATEGORIES', payload: result })
  dispatch({ type: 'SET_APPROVED', payload: result.length })
  dispatch({ type: 'SET_VIEW_ALL' })
}

export const forbidAll = (n) => (dispatch) => {
  dispatch({ type: 'FORBID_ALL' })
  dispatch({ type: 'SET_FORBIDDEN', payload: n })
  dispatch({ type: 'SET_APPROVED', payload: 0 })
  dispatch({ type: 'SET_VIEW_ALL' })
}

export const approveAll = (n) => (dispatch) => {
  dispatch({ type: 'APPROVE_ALL' })
  dispatch({ type: 'SET_APPROVED', payload: n })
  dispatch({ type: 'SET_FORBIDDEN', payload: 0 })
  dispatch({ type: 'SET_VIEW_ALL' })
}
