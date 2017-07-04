import API from '../api'
import loading from './load/loading'
import loadError from './load/load-error'
import loadSuccess from './load/load-success'

export const FETCHED_FOODITEMS = 'FETCHED_FOODITEMS'
export const ADD_FOODITEM = 'ADD_FOODITEM'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('fooditems')

    dispatch(loading(true))


      setTimeout(() => {
        backend.find()
        .then((result) => {

          dispatch(loadSuccess())
          console.log(result)
          dispatch({
            type: FETCHED_FOODITEMS,
            payload: result.data
          })
        })
        .catch((error) => {
          dispatch(loadError(error))
          console.error('Error fetching fooditems from the api!', error.message)
        })
        .then(() => {
          dispatch(loading(false))
        })
      }, 1000) //setTimeout doesn't work yet

  }
}
