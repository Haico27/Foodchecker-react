export const ADD_FOODITEM = 'ADD_FOODITEM'

export default (newFoodItem) => {
  return {
    type: ADD_FOODITEM,
    payload: newFoodItem
  }
}
