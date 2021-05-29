//const fs = require("fs");
//
//const Verifier = artifacts.require("Verifier");
//
//const proof = JSON.parse(fs.readFileSync("proof.json"))
//
//describe("verfifier", function () {
//  let v, accounts;
//
//  beforeEach(async () => {
//    accounts = await web3.eth.getAccounts();
//    v = await Verifier.new();
//    console.log(`[*] Accounts: (${accounts.length})`);
//  });
//
//  it("default", async () => {
//    await v.verifyTx(proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs)
//
//    cheat = [...proof.inputs]
//    cheat[cheat.length-1] = cheat[cheat.length-1].replace(/[01]$/, cheat[cheat.length-1][65] == '1' ? '0': '1')
//    await v.verifyTx(proof.proof.a, proof.proof.b, proof.proof.c, cheat)
//  });
//
//});
