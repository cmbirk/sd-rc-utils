import yaml from 'js-yaml'

export const parseYaml = (yamlString) => {
  return yaml.safeLoad(yamlString)
}
