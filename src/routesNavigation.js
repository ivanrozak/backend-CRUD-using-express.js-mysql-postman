const router = require('./routes/product')
const product = require('./routes/product')

router.use('/product', product)

module.exports = router
