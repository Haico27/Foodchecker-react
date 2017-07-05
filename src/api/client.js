import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import hooks from 'feathers-hooks'
import io from 'socket.io-client/dist/socket.io'

const host = process.env.API_HOST || 'https://foodchecker-api.herokuapp.com'

const socket = io(host, {
  transports: ['websocket']
})

const feathersClient = feathers()
  .configure(hooks())
  .configure(socketio(socket))

export default feathersClient
