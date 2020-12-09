const router = require('express').Router()
const {
  getProduct,
  getProductById,
  postProduct
} = require('../controller/product')

router.get('/', getProduct)
router.get('/:id', getProductById)
router.post('/', postProduct)

module.exports = router
