import { history } from '../../store'
import API from '../../api'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'


const api = new API()

export default(user) => {

  console.log(user)
  return (dispatch) => {

    api.authenticate(user)
      .then((user) => {
        console.log('User succesfully authenticated!', user)

        api.app.set('user', user)

        history.replace('/')

        dispatch({
          type: USER_SIGNED_IN,
          payload: user
        })
        console.log('user.data in sign-in action: ', user)
      })
      .catch((error) => {
        console.log('Error authenticating user!', error.message)
      })
  }

}
