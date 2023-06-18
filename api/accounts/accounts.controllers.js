let accounts = require("../../accounts");

exports.accountGet = (req, res) => {
  res.status(200).json(accounts);
};

exports.createAccount = (req, res) => {
  const id = accounts[accounts.length - 1].id + 1;
  // let newAccounts= req.body
  // newAccounts ={ ...newAccounts,id:newID}
  let newAccounts = { id, ...req.body };
  accounts.push(newAccounts);
  res.json(newAccounts);
  return res.status(201).json({ body: accounts });
};

exports.deleteAccount = (req, res) => {
  const { accountId } = req.params;
  // Check if the account exists

  //   const account = accounts.find((account) => account.id !== accountId);

  //   if (!account) {
  //     return res.status(404).json({ message: "Account not found" });
  //   }

  accounts = accounts.filter((account) => account.id != accountId);

  console.log("accounts", accounts);

  return res.status(204).jason({ msg: "deleted!!" });
};
exports.updateAccount = (req, res) => {
  const { accountId } = req.params;

  const account = accounts.find((account) => account.id == accountId);

  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  }

  //   if (updateAccount) {
  account.username = req.body.username ? req.body.username : account.username;
  account.funds = req.body.funds ? req.body.funds : account.funds;

  return res.status(201).json(accounts);
};
