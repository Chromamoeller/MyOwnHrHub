const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data/pokemon.db");

// Tabelle erstellen, wenn sie nicht existiert
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS pokemon (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pokemon_id INTEGER,
      name TEXT,
      image TEXT,
      level INTEGER,
      type TEXT,
      currentXP INTEGER,
      xp_to_next_level INTEGER
    )
  `);
});

module.exports = db;
