const { initialize } = require("zokrates-js/node");

const source = `
def main(private field a, field b): 
  assert(a == b)
  return
`;

initialize().then((zok) => {
  // compilation
  const artifacts = zok.compile(source);
  // computation
  const { witness, output } = zok.computeWitness(artifacts, ["2", "2"]);
  // run setup
  const keypair = zok.setup(artifacts.program);
  // generate proof
  const proof = zok.generateProof(artifacts.program, witness, keypair.pk);
  // export solidity verifier
  const r = zok.verify(keypair.vk, proof);
  console.log({ r });
});
