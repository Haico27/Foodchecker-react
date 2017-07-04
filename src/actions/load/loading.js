
export const APP_LOADING = 'APP_LOADING'
export const APP_DONE_LOADING = 'APP_DONE_LOADING'


//action takes the boolean 'loading' as an argument and returns the action type depending on its value of true or false
export default (loading) => {
  const type = loading ? APP_LOADING : APP_DONE_LOADING

  return { type }
}
