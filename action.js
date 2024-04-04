const mysql = require("mysql");
const { nanoid } = require("nanoid");
const db = require("./connection");

exports.main = function (req, res) {
  res.status(200).json({
    success: true,
    message: "welcome to CC-24 API",
  });
};

exports.addBook = function (req, res) {
  const id = nanoid(7);
  const add = {
    id,
    nama_buku: req.body.nama_buku,
    penulis: req.body.penulis,
  };
  db.query("INSERT INTO book SET ?", add, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Data berhasil ditambahkan",
        add,
      });
    }
  });
};

exports.getAllBook = function (req, res) {
  db.query("SELECT * FROM book", (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data berhasil ditampilkan",
        data: result,
      });
    }
  });
};
