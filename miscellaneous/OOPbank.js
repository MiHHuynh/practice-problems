//You will create 2 classes, a Bank class and an Account class
function Bank() {
  this.accounts = [];
}

Bank.prototype.createAccount = function(name, secret, initialDeposit) {
  var newAccount = new Account(name, secret, initialDeposit);
  this.accounts.push(newAccount);
  return newAccount;
}

Bank.prototype.lookupAccount = function(accountID) {
  for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].accountID === accountID) {
      return this.accounts[i];
    }
  }
  return null;
}

Bank.prototype.deposit = function(accountID, amount) {
  // find the account, add to the balance, then return new balance
  return this.lookupAccount(accountID).deposit(amount);
  // for (var i = 0; i < this.accounts.length; i++) {
  //   if (this.accounts[i].accountID === accountID) {
  //     return this.accounts[i].deposit(amount);
  //   }
  // }
  // // if account was not found
  // return null;
}

Bank.prototype.withdraw = function(accountID, secret, amount) {
  return this.lookupAccount(accountID).withdraw(secret, amount);
  // for (var i = 0; i < this.accounts.length; i++) {
  //   if (this.accounts[i].accountID === accountID) {
  //     return this.accounts[i].withdraw(secret, amount);
  //   }
  // }
}

function Account(name, secret, initialDeposit=0) {
  this.name = name;
  this.secret = secret;
  this.balance = initialDeposit;
  this.accountID = Math.floor(Math.random()*10000000);
}

Account.prototype.deposit = function(amount) {
  this.balance += amount;
  return this.balance;
}

Account.prototype.accountID = function() {
  return this.accountID;
}

Account.prototype.withdraw = function(secret, amount) {
  if (this.secret === secret && this.balance >= amount) {
    this.balance -= amount;
    return amount;
  }
  return null;
}

var chaseBank = new Bank();
chaseBank.createAccount("account1", "secret", 5000);
console.log(chaseBank.accounts[0].name);
console.log(chaseBank.accounts[0].secret);
console.log(chaseBank.accounts[0].accountID);
console.log(chaseBank.accounts[0].balance);
console.log("the account is "+ chaseBank.lookupAccount(chaseBank.accounts[0].accountID));
console.log(chaseBank.deposit(chaseBank.accounts[0].accountID, 1000000));
console.log(chaseBank.withdraw(chaseBank.accounts[0].accountID, chaseBank.accounts[0].secret, 1));
