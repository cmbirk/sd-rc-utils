import winston from 'winston'
import config from 'config'

let level = 'error'

if (config.LOG_LEVEL) {
  level = config.LOG_LEVEL
}

const prettyJson = winston.format.printf((info) => {
  let { message } = info

  if (message && message.constructor === Object) {
    message = JSON.stringify(info.message, null, 4)
  }

  return `${info.level}: \n\n${message}`
})

const logger = winston.createLogger({
  level,
  transports: [
    new winston.transports.Console({
      level: 'silly',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.prettyPrint(),
        winston.format.splat(),
        winston.format.simple(),
        prettyJson,
      ),
    }),
  ],
})

export default logger
