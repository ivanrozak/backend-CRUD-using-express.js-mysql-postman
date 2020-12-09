const router = require('express').Router()
const {
  getProduct,
  getProductById,
  postProduct,
  patchProduct
} = require('../controller/product')

router.get('/', getProduct)
// router.get('/:id', getProductById)
router.post('/', postProduct)
router.patch('/:id', patchProduct)

module.exports = router
