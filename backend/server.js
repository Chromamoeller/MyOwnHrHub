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

// Neue volltändige Arbeitszeit eintragen
app.post("/api/times", (req, res) => {
  const { user_id, date, start, end, breakMinutes, workplace } = req.body;
  const sql = `INSERT INTO times (user_id, date, start, end, breakMinutes, workplace) VALUES (?,?, ?, ?, ?, ?)`;
  db.run(
    sql,
    [user_id, date, start, end, breakMinutes, workplace],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

app.post("/api/times/start", (req, res) => {
  const { user_id, date, start, end, breakMinutes, workplace } = req.body;
  const sql = `INSERT INTO times (user_id, date, start, end, breakMinutes, workplace) VALUES (?, ?, ?, ?, ?, ?)`;
  db.run(
    sql,
    [user_id, date, start, end, breakMinutes, workplace],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});
app.put("/api/times/:id/end", (req, res) => {
  const { end } = req.body;
  const { id } = req.params;

  const sql = `UPDATE times SET end = ? WHERE id = ?`;
  db.run(sql, [end, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    if (this.changes === 0) {
      return res.status(404).json({ message: "Eintrag nicht gefunden" });
    }

    res.json({ message: "Arbeitsende gespeichert", id: id, end: end });
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
  const { user_id, date, start, end, breakMinutes, workplace } = req.body;
  const sql = `UPDATE times SET user_id = ?, date = ?, start = ?, end = ?, breakMinutes = ?, workplace = ? WHERE id = ?`;
  db.run(
    sql,
    [user_id, date, start, end, breakMinutes, workplace, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true });
    }
  );
});

app.listen(PORT, () => {
  console.log(`HR-Hub-API läuft auf http://localhost:${PORT}`);
});
