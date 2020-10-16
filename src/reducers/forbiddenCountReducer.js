/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD_FORBIDDEN':
      return state += 1;

    case 'REMOVE_FORBIDDEN':
      return state -= 1;

    case 'SET_FORBIDDEN':
      return state = action.payload;

    default:
      return state
  }
}
