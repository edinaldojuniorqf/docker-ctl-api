const container = require('./docker/container')

const timeout = parseInt(process.env.timeout)
let images = process.env.images.split(',')

container.stop(timeout, images)
