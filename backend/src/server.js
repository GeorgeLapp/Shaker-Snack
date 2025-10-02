const express = require('express');

const app = express();
app.use(express.json());

app.get('/api/product-matrix', getProductMatrix);
app.post('/api/start-sale', startSale);
app.post('/api/issue-product', issueProduct);

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
function getProductMatrix(req, res) {
  // TODO: implement
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
function startSale(req, res) {
  // TODO: implement
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
function issueProduct(req, res) {
  // TODO: implement
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
