
import { FETCHED_FOODITEMS } from '../actions/fetch'

import { FOODITEM_CREATED } from '../actions/subscribe'


export default ( state = [], { type, payload } = {} ) => {
  switch(type) {

    case FETCHED_FOODITEMS :
      return [].concat(payload)

    case FOODITEM_CREATED :
      const newFoodItem = { ...payload }
      return [newFoodItem].concat(state)

    default :
      return state
  }
}
