import API from '../api'

const api = new API()

export default(fooditemId) => {
  return (dispatch) => {

    const backend = api.service('fooditems')

    backend.remove(fooditemId)
      .then((result) => {
        console.log('fooditem successfully removed from database!', fooditemId)
      })
      .catch((error) => {
        console.error('this is the error given by the remove action: ', error)
      })
  }
}
