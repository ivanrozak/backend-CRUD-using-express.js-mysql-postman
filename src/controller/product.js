const {
  getProduct,
  getProductByIdModel,
  postProductModel
} = require('../model/product')
const helper = require('../helper/response')

module.exports = {
  getProduct: async (request, response) => {
    try {
      const result = await getProduct()
      return helper.response(response, 200, 'Success Get Product', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getProductById: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getProductByIdModel(id)
      if (result.length > 0) {
        return helper.response(
          response,
          200,
          'Success Get Product By Id',
          result
        )
      } else {
        return helper.response(response, 200, `Product By Id : ${id} Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  postProduct: async (request, response) => {
    // request.body = form Input
    // request.params = dete, update
    // request.query = search, sort, pagination
    // console.log(request.query)
    // console.log(request.params)
    // console.log(request.body)
    try {
      const {
        category_id,
        product_name,
        product_price,
        product_status
      } = request.body
      const setData = {
        category_id,
        product_name,
        product_price,
        product_created_at: new Date(),
        product_status
      }
      const result = await postProductModel(setData)
      console.log(result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}
