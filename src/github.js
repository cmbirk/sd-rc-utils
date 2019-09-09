import Octokit from '@octokit/rest'

import config from './config'
import { parseYaml } from './utils'

const {
  GH_PATH,
  GH_REPO,
  GH_TOKEN,
  GH_OWNER,
} = config

const octokit = Octokit({
  auth: GH_TOKEN,
})

export const getProductionContents = async () => {
  const productionReleases = await octokit.repos.getContents({
    owner: GH_OWNER,
    repo: GH_REPO,
    path: GH_PATH,
  })

  const { data: { content } } = productionReleases
  const buffer = Buffer.from(content, 'base64')

  const parsedContent = parseYaml(buffer.toString('ascii'))

  return parsedContent
}
