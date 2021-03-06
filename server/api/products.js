const router = require('express').Router()
const { models: { Product , Room, ProductType}} = require('../db')
module.exports = router

// GET /api/products
// all products page
router.get('/', async (req, res, next) => {
  try {
    res.send(await Product.findAll());
  } catch (err) {
    next(err)
  }
})

// GET /api/products/rooms
// all products page
router.get('/rooms', async (req, res, next) => {
  try {
    res.send(await Room.findAll());
  } catch (err) {
    next(err)
  }
})


// GET /api/products/types
// all products page
router.get('/types', async (req, res, next) => {
  try {
    res.send(await ProductType.findAll());
  } catch (err) {
    next(err)
  }
})


// GET /api/products/:id
// single product page, selecting by product id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Product.findByPk(req.params.id));
  }
  catch (error) {
    next(error);
  }
});

// PUT /api/products/:id
router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(await product.update({
      name: req.body.productName,
      description : req.body.productDescription,
      quantity: req.body.productQuantity,
      cost: req.body.productCost,
    }))
  }
  catch (error) {
    next(error);
  }
});

// GET /api/products/productType/:id
// filter products by type, selecting by productType id
router.get('/productType/:id', async (req, res, next) => {
  try {
    const product = await Product.findAll({
      where: {
        productTypeId: req.params.id
      }
    })
    res.send(product);
  }
  catch (error) {
    next(error);
  }
});

// GET /api/products/roomType/:id
// filter products by room, selecting by room id
router.get('/room/:id', async (req, res, next) => {
  try {
    const product = await Product.findAll({
      where: {
        roomId: req.params.id
      }
    })
    res.send(product);
  }
  catch (error) {
    next(error);
  }
});