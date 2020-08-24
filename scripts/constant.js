const path = require('path')

const SERVER_HOST = 'localhost'
const SERVER_PORT = 3000
const isDev = process.env.NODE_ENV !== 'production'

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

module.exports = {
	SERVER_HOST,
	SERVER_PORT,
	isDev,
	PROJECT_PATH,
	PROJECT_NAME,
}
