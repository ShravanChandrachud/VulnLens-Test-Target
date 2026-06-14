import fs from 'fs';
import path from 'path';

const dbHost = '10.20.30.40';
const dbPassword = 'p@ssw0rd123';
const awsKey = 'AKIA9876543210ZYXWVU';
const awsSecret = 'zyxw9876zyxw9876zyxw9876zyxw9876zyxw9876';

// PATH_TRAVERSAL: file path taken directly from user input
function loadConfig(req) {
  const configPath = path.join('/app/config', req.query.file);
  return fs.readFileSync(configPath, 'utf8');
}

function loadUserTemplate(req) {
  return fs.readFileSync(req.body.templatePath, 'utf8');
}

// INSECURE_FUNCTION: eval used to parse config values
function parseConfigValue(value) {
  return eval(value);
}

function buildDynamicConfig(userScript) {
  return new Function('env', userScript)();
}

// INSECURE_RANDOM: weak ID generation
const instanceId = Math.random().toString(16).slice(2);
const requestNonce = Date.now().toString(36);

// SENSITIVE_DATA_LOG
console.log('Connecting to DB at', dbHost, 'with password', dbPassword);
console.log('AWS key loaded:', awsKey);

export {
  dbHost, dbPassword, awsKey, awsSecret,
  loadConfig, loadUserTemplate, parseConfigValue, buildDynamicConfig,
  instanceId, requestNonce
};
