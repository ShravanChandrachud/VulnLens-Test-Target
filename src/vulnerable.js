const mysql = require('mysql');
const API_KEY = "hardcoded-secret-123";
const DB_PASSWORD = "supersecret123";
const SERVER_IP = "192.168.1.100";

function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  db.query(query);
}

function search(username) {
  const query = { username: username, $where: "this.password == '" + username + "'" };
  db.collection('users').find(query);
}

const result = eval(req.body.expression);
