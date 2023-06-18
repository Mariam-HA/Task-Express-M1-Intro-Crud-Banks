const express = require("express");
const router = express.Router();
let accounts = require("../../accounts");
const {
  accountGet,
  createAccount,
  deleteAccount,
  updateAccount,
} = require("./accounts.controllers");

router.get("/", accountGet);

router.post("/", createAccount);

router.delete("/:accountId", deleteAccount);

router.put("/:accountId", updateAccount);

module.exports = router;
