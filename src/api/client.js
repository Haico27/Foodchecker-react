import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import hooks from 'feathers-hooks'
import superagent from 'superagent'

const host = 'http://localhost:3030'

const feathersClient = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks())

export default feathersClient
