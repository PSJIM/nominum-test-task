/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD_APPROVED':
      return state += 1;

    case 'REMOVE_APPROVED':
      return state -= 1;

    case 'SET_APPROVED':
      return action.payload;

    default:
      return state
  }
}
