const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/hrhub.db");

// Tabelle erstellen, wenn sie nicht existiert
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS times (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      date TEXT,
      start TEXT,
      end TEXT,
      breakMinutes TEXT,
      workplace TEXT
    )
  `);
  db.run(`
    create table if not exists users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      password TEXT
    )
    `);
});

module.exports = db;
