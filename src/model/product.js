const connection = require('../config/mysql')

module.exports = {
  getProduct: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM product', (error, result) => {
        // console.log(error)
        // console.log(result)
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getProductByIdModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM product WHERE product_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  postProductModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO product SET ?',
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              product_id: result.insertId,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }
}
