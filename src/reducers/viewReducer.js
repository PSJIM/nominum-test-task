/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
export default (state = '', action) => {
  switch (action.type) {
    case 'SET_VIEW_ALL':
      return 'all';

    case 'SET_VIEW_APPROVED':
      return 'approved';

    case 'SET_VIEW_FORBIDDEN':
      return 'forbidden';

    default:
      return state;
  }
}
