import { getProductionContents } from './github'

export const getProductionHash = async () => {
  const contentsObject = await getProductionContents()

  return contentsObject.spec.values.image.tag
}
