import API from '../api'

export const SUBSCRIBED_TO_FOODITEMS_SERVICE = 'SUBSCRIBED_TO_FOODITEMS_SERVICE'
export const FOODITEM_CREATED = 'FOODITEM_CREATED'
export const FOODITEM_REMOVED = 'FOODITEM_REMOVED'

const api = new API()
const fooditems = api.service('fooditems')

export default () => {
  return (dispatch) => {
    fooditems.on('created', (fooditem) => {
      dispatch(createdFooditem(fooditem))
    })
    fooditems.on('removed', (fooditem) => {
      dispatch(removedFooditem(fooditem))
    })

    dispatch({ type: SUBSCRIBED_TO_FOODITEMS_SERVICE })
  }
}

const createdFooditem = (fooditem) => {
  return {
    type: FOODITEM_CREATED,
    payload: fooditem
  }
}

const removedFooditem = (fooditem) => {
  return {
    type: FOODITEM_REMOVED,
    payload: fooditem
  }
}
