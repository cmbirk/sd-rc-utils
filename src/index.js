import logger from './logger'
import { getProductionHash } from './ops'

const main = async () => {
  const productionHash = await getProductionHash()

  logger.debug(productionHash)

  return productionHash
}

main()
  .then((res) => {
    logger.info(res)
  }).catch((err) => {
    console.error(err)
  })
