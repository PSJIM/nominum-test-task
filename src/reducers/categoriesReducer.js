/* eslint-disable no-case-declarations */
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return action.payload;

    case 'CHANGE_STATUS':
      const categoryIndex = state.findIndex((category) => category.name === action.payload);
      const modified = [...state]
      if (modified[categoryIndex].isAllowed) {
        modified[categoryIndex].isAllowed = false
      } else {
        modified[categoryIndex].isAllowed = true
      }
      return modified;

    case 'FORBID_ALL':
      return state.map((category) => ({ ...category, isAllowed: false }));

    case 'APPROVE_ALL':
      return state.map((category) => ({ ...category, isAllowed: true }))

    default:
      return state;
  }
}
