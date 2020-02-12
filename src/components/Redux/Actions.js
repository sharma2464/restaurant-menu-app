// Action Creator Names
// export const ADD = 'ADD'
// export const REMOVE = 'REMOVE'

// Action Creator function
const addCart = payloadName => {
  return {
    type: 'ADD',
    payloadName
  }
}
const removeCart = payloadName => {
  return {
    type: 'REMOVE',
    payloadName
  }
}

export default { addCart, removeCart }
