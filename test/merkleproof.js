const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const MP = artifacts.require("MerkleProof");

const leaves = Array(100)
  .fill(0)
  .map((_, i) => keccak256(i));
const tree = new MerkleTree(leaves, keccak256);
const hexroot = tree.getHexRoot();
const leaf = keccak256(1);
const hexleaf = "0x" + leaf.toString("hex");
const proof = tree.getProof(leaf);

console.log({ proof });

const hexproof = proof.map((x) => tree.bufferToHex(x.data));
const positions = proof.map((x) => (x.position === "right" ? 1 : 0));

console.log(hexroot);
console.log(hexleaf);
console.log(hexproof);
console.log(positions);

describe("merkle proof", function () {
  let contract, accounts;

  beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    contract = await MP.new();
    console.log(`[*] Accounts: (${accounts.length})`);
  });

  it("default", async () => {
    const verified = await contract.verify.call(
      hexroot,
      hexleaf,
      hexproof,
      positions
    );
    expect(verified).to.equal(true);
  });
});
