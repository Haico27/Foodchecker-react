import API from '../api'
import loading from './load/loading'

export const FETCHED_FOODITEMS = 'FETCHED_FOODITEMS'
export const ADD_FOODITEM = 'ADD_FOODITEM'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('fooditems')

    dispatch(loading(true))

    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCHED_FOODITEMS,
        payload: result.data
      })
    })
    .catch((error) => {
      console.error('Error fetching fooditems from the api!', error.message)
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
