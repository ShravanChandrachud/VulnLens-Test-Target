import { exec } from 'child_process';
import crypto from 'crypto';

const apiSecret = 'hardcoded-api-secret-do-not-share';
const internalToken = 'Bearer abc123xyz987token';

// SQL_INJECTION: user input directly in query
function getUser(db, userId) {
  return db.query(`SELECT * FROM users WHERE id = ${userId}`);
}

function searchProducts(db, keyword) {
  return db.query("SELECT * FROM products WHERE name LIKE '%" + keyword + "%'");
}

// INSECURE_FUNCTION: command built from request param
function pingHost(req) {
  return exec('ping ' + req.query.host);
}

// WEAK_CRYPTO: MD5 for API request signing
function signRequest(payload) {
  return crypto.createHash('md5').update(payload + apiSecret).digest('hex');
}

// SENSITIVE_DATA_LOG: logging auth headers
function handleRequest(req) {
  console.log('Authorization header:', req.headers.authorization);
  console.log('API secret:', apiSecret);
}

// XSS: reflecting user input into response
function renderError(req, res) {
  res.send('<p>Error for user: ' + req.query.username + '</p>');
}

// SECURITY_TODO
// FIXME: security — validate all inputs before processing
// TODO: security — replace MD5 signing with HMAC-SHA256

export { getUser, searchProducts, pingHost, signRequest, handleRequest, renderError };
