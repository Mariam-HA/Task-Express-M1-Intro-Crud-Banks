const express = require("express");
const app = express();
let accounts = require("./accounts");
const PORT = 8000;
const accountsRoutes = require("./api/accounts/accounts.routes");

app.use(express.json());
app.use("/api/accounts", accountsRoutes);

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});

// get one account

// try to slove it

// create accounts
