import API from '../../api'

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
