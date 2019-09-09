require('dotenv-safe').config()

export default {
  GH_PATH: process.env.GH_PATH,
  GH_REPO: process.env.GH_REPO,
  GH_TOKEN: process.env.GH_TOKEN,
  GH_OWNER: process.env.GH_OWNER,
}
