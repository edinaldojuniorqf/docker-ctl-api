const Docker = require('dockerode')
const moment = require('moment')

let docker = new Docker()

function stop(timeout = 10, ancestor, logs = true) {
  let filters = { ancestor }
  docker.listContainers({ filters }, (err, containers) => {
    if (err) throw err
    
    containers.forEach(containerInfo => {
      let container = docker.getContainer(containerInfo.Id)
      container.inspect((err, data) => {
        if (err) throw err
        let startedAt = moment(data.State.StartedAt)
        let now = moment()
        let seconds = now.diff(startedAt, 'seconds')

        if (seconds >= timeout) {
          if (logs) {
            console.log(`STOP container: ${containerInfo.Id}, Image: ${containerInfo.Image}, Iniciado em: ${startedAt.format('DD/MM/YYYY HH:mm:ss')}`)
          }
          container.stop()
        }
      })
    })
  })
}

module.exports = {
  stop
}
