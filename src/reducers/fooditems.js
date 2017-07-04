
import { FETCHED_FOODITEMS } from '../actions/fetch'

import { FOODITEM_CREATED, FOODITEM_REMOVED } from '../actions/subscribe'


export default ( state = [], { type, payload } = {} ) => {
  switch(type) {

    case FETCHED_FOODITEMS :
      return [].concat(payload)

    case FOODITEM_CREATED :
      const newFoodItem = { ...payload }
      return [newFoodItem].concat(state)

    case FOODITEM_REMOVED :
      return state.filter((fooditem) => (fooditem._id !== payload._id))

    default :
      return state
  }
}
