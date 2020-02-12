// Importing Action Creators
// import Actions, { addCart, removeCart } from './Actions'
// import { addCart, removeCart } from './Actions'


// Importing Store Objects
// import { defaultState } from './Store'


const defaultState = {
  count: 0,
  itemName: 'Pastry'
}

// Action Reducers
const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'ADD':
      return state + 1
    case 'REMOVE':
      return state - 1
    default:
      return state
  }
}

export default reducer
