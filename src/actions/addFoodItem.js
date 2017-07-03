import API from '../api'

export const ADD_FOODITEM = 'ADD_FOODITEM'

const api = new API()


export default (newFoodItem) => {
  return (dispatch) => {
    const backend = api.service('fooditems')

    backend.create(newFoodItem)
    .then((result) => {
      console.log('Fooditem created in the database!', result)
    }).catch((error) => {
      console.error('Error', error)
    })

  }
  return {
    type: ADD_FOODITEM
  }
}
