import yaml from 'js-yaml'

export const parseYaml = (yamlString) => yaml.safeLoad(yamlString)
