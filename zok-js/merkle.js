const { MerkleTree } = require("merkletreejs");
const SHA256 = require("crypto-js/sha256");

const leaves = Array(100)
  .fill(0)
  .map((_, i) => SHA256(i));
const tree = new MerkleTree(leaves, SHA256);
const root = tree.getHexRoot();
const leaf = SHA256(1);
const proof = tree.getProof(leaf);

for (const leaf of proof) {
  console.log("leaf", tree.bufferToHex(leaf.data));
  console.log("position", leaf.position);
}

console.log("root", root);
console.log("leaf", leaf.toString());

//console.log(tree.verify(proof, leaf, root)) // true
