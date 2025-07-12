const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Alle Arbeitszeiten abrufen
app.get("/api/times", (req, res) => {
  db.all("SELECT * FROM times ORDER BY date DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Neue Arbeitszeit eintragen
app.post("/api/times", (req, res) => {
  const { date, start, end, breakMinutes, note } = req.body;
  const sql = `INSERT INTO times (date, start, end, breakMinutes, note) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [date, start, end, breakMinutes, note], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});
app.delete("/api/times", (req, res) => {
  db.serialize(() => {
    db.run("DELETE FROM times");
    db.run("DELETE FROM sqlite_sequence WHERE name='times'");
    res.json({
      success: true,
      message: "Alle Einträge gelöscht, IDs zurückgesetzt.",
    });
  });
});

// Eine Arbeitszeit löschen
app.delete("/api/times/:id", (req, res) => {
  db.run("DELETE FROM times WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// Arbeitszeit aktualisieren
app.put("/api/times/:id", (req, res) => {
  const { date, start, end, breakMinutes, note } = req.body;
  const sql = `UPDATE times SET date = ?, start = ?, end = ?, breakMinutes = ?, note = ? WHERE id = ?`;
  db.run(
    sql,
    [date, start, end, breakMinutes, note, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

app.listen(PORT, () => {
  console.log(`HR-Hub-API läuft auf http://localhost:${PORT}`);
});
