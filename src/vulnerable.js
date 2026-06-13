const mysql = require('mysql');
const API_KEY = "hardcoded-secret-123";

function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  db.query(query);
}
// updated Sat, Jun 13, 2026  6:21:19 PM
const SECRET = 'hardcoded-password-123';
