import winston from 'winston'

const prettyJson = winston.format.printf((info) => {
  let { message } = info

  if (info.message.constructor === Object) {
    message = JSON.stringify(info.message, null, 4)
  }
  return `${info.level}: ${message}`
})

const logger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
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
