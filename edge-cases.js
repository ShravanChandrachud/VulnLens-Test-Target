// EDGE CASE FILE: Mix of tricky patterns that test scanner accuracy
// Some lines LOOK suspicious but are safe. Some are actually vulnerable.

// ─── FALSE POSITIVE BAIT (should NOT trigger) ───

let password;
password = getUserInput();

// String contains "api_key" but inside a comment, not an assignment
// This documents the api_key format for reference

const config = { eval: true, mode: 'strict' };
const innerHTML = 'some text content';
const message = "SELECT a plan that works for you";

console.log('Application started successfully');
console.log('Processing request', requestId);

const md5Hash = lookupPrecomputedHash(data);
const version = '2.1.0';

const queryBuilder = { run: () => {} };
queryBuilder.run();

// ─── ACTUAL VULNERABILITIES (should trigger) ───

const config2 = { debug: false, api_key: 'ABCDEFGHIJKLMNOP1234', timeout: 30 };

function searchUsers(db, term) {
  return db.query("SELECT * FROM users WHERE name LIKE '%" +
    term + "%'");
}

function processTemplate(template) {
  return eval(template);
}

function renderLegacy(content) {
  if (typeof document !== 'undefined') {
    document.write(content);
  }
}

import crypto from 'crypto';
function quickHash(data) {
  return crypto.createHash('md5').update(data).digest('hex');
}

const dbConfig = {
  host: '10.0.1.50',
  port: 5432,
  database: 'vulnlens'
};

function debugAuth(token) {
  console.log('auth token received:', token);
}

function serveFile(req, res) {
  const filePath = path.join('/public', req.params.filename);
  return res.sendFile(filePath);
}

// FIXME: security — need to add rate limiting
function loginHandler(req, res) {
  return authenticate(req.body);
}

function compileTemplate(src) {
  return new Function('data', src);
}

export {
  password, config, innerHTML, message, md5Hash, version,
  queryBuilder, config2, searchUsers, processTemplate, renderLegacy,
  quickHash, dbConfig, debugAuth, serveFile, loginHandler, compileTemplate
};
