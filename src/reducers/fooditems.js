import { ADD_FOODITEM } from '../actions/addFoodItem'
import { FETCHED_FOODITEMS } from '../actions/fetch'


export default ( state = [], { type, payload } = {} ) => {
  switch(type) {
    case ADD_FOODITEM :
      return [Object.assign({}, payload)].concat(state)

    case FETCHED_FOODITEMS :
      return [].concat(payload)

    default :
      return state
  }
}
