const express = require("express");
const app= express()
const { Router } = require ("express");
const router = Router();
const Metodos = require("../metodos/metodos");

router.get("/", (req, res) => {
  res.send(Metodos.todosLosProductos());
});

router.get("/:id", (req, res) => {
  const {id} = req.params;
  res.send(Metodos.productoPorId(id));
});

router.post("/", (req, res) => {
  res.send(Metodos.agregar(req.body));
});

router.put("/:id", (req, res) => {
  const {id} = req.params
  const body = req.body
  res.send(Metodos.agregaPorId(id, body));
});

router.delete("/:id", (req, res) => {
  res.send(Metodos.elimina(req.params.id));
})


module.exports = router;