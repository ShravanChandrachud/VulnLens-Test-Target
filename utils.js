import crypto from 'crypto';
import path from 'path';
import fs from 'fs';

// Safe: secure random ID generation
function generateId() {
  return crypto.randomUUID();
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Safe: strong hashing
function hashData(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

// Safe: validated file path
function readAsset(baseDir, filename) {
  const resolved = path.resolve(baseDir, filename);
  if (!resolved.startsWith(path.resolve(baseDir))) {
    throw new Error('Invalid path');
  }
  return fs.readFileSync(resolved, 'utf8');
}

// Safe: parameterized queries
function findById(db, table, id) {
  return db.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
}

// Safe: no sensitive data logged
function logRequest(method, route, statusCode) {
  console.log(`${method} ${route} → ${statusCode}`);
}

export { generateId, generateToken, hashData, readAsset, findById, logRequest };
