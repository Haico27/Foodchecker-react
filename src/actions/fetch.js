import API from '../api'

export const FETCHED_FOODITEMS = 'FETCHED_FOODITEMS'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('fooditems')
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
  }
}
