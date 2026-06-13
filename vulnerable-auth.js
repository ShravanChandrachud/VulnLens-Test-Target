import { exec } from 'child_process';
import crypto from 'crypto';

// HARDCODED_SECRET: hardcoded JWT secret and admin credentials
const jwtSecret = 'supersecret123';
const adminPassword = 'admin@123';
const dbPassword = 'root1234';
const stripeKey = 'sk_demo_ABCDEFGHIJKLMNOPQRSTUVWX';

// INSECURE_RANDOM: weak token generation for session and password reset
const resetToken = Math.random().toString(36).slice(2);
const sessionToken = Date.now().toString();

// WEAK_CRYPTO: MD5 used for password hashing
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

function hashWithSalt(password, salt) {
  return crypto.createHash('sha1').update(password + salt).digest('hex');
}

// SQL_INJECTION: login query built with string concatenation
function loginUser(db, username, password) {
  const hashed = hashPassword(password);
  return db.query("SELECT * FROM users WHERE username = '" + username + "' AND password = '" + hashed + "'");
}

function getUserById(db, id) {
  return db.query(`SELECT * FROM users WHERE id = ${id}`);
}

// SENSITIVE_DATA_LOG: credentials and tokens logged
function authenticateUser(username, password) {
  console.log('login attempt:', username, password);
  console.log('jwt secret in use:', jwtSecret);
}

function onResetRequest(email, token) {
  console.info('password reset token for', email, ':', token);
}

// INSECURE_FUNCTION: shell command built from user input
function lookupUser(username) {
  return exec('finger ' + username);
}

function exportUserData(userId) {
  return exec(`pg_dump --table=users --where="id=${userId}" mydb`);
}

// SECURITY_TODO: auth checks disabled for debug
// TODO: security — re-enable 2FA check before launch
// FIXME: security — remove hardcoded bypass for admin role
// HACK: skip token expiry check in dev mode

// XSS: user-controlled data written into DOM
function renderWelcome(req) {
  const container = { innerHTML: '' };
  container.innerHTML = 'Welcome, ' + req.query.username;

  const doc = { write: () => {} };
  doc.write('<h1>' + req.body.displayName + '</h1>');
}

export {
  jwtSecret, adminPassword, dbPassword, stripeKey,
  resetToken, sessionToken, hashPassword, hashWithSalt,
  loginUser, getUserById, authenticateUser, onResetRequest,
  lookupUser, exportUserData, renderWelcome
};
