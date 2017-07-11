import API from '../../api'

export const USER_SIGNED_UP = 'USER_SIGNED_UP'

const api = new API()

export default(user) => {
  return (dispatch) => {
    const backend = api.service('users')

    backend.create(user)
    .then((result) => {
      console.log('User created in the database!', result)
    })
    .catch((error) => {
      console.error('Error', error)
    })
  }
}
