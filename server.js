const ethers = require('ethers');
const fs = require('fs');
const express=require('express')
const app = express();

app.get('/getAdress', (req, res) => {

  for (let i = 0; i < 10; i++) {
    const entropy = ethers.utils.randomBytes(32);
    const mnemonic = ethers.utils.entropyToMnemonic(entropy);
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    const csv = `${Buffer.from(entropy).toString('hex')},${mnemonic},${wallet.address}\n`;
try {
  fs.appendFileSync('address.csv', csv);
} catch (error) {
  console.log(error);
}

  }
  res.status(200).send("CSV created successfully!");
})
app.listen(3000);
