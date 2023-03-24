const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "messages",
  password: "",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database -- OK");
  }
});

class authController {
  getMessages(req, res) {
    conn.query("SELECT * FROM messages", (err, res1) => {
      res.json(res1);
    });
  }

  sendMessage(req, res) {
    const { nameGetter, nameSender, theme, message } = req.body;
    conn.query(
      `INSERT INTO messages(name_getter, name_sender, theme, message, date_send) VALUES("${nameSender}", "${nameGetter}", "${theme}", "${message}", now())`
    );
    res.json("Отправлено");
  }
}

module.exports = new authController();
