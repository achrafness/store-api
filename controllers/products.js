const Product = require("../models/product")

const getAllProductsStatic = async (req, res) => {
    const product = await Product.find({})
    res.status(200).json({length: product.length , product:product})
}
const getAllProducts = async (req, res) => {
    const { featured, company, name , sort , fields , numericFilters  } = req.query;
    const queryObject = {};
    if (featured) {
      queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = { $regex: name, $options: 'i' };
    }
    if(numericFilters){
      const operatorMap = {
        '>': '$gt',
        '>=': '$gte',
        '=': '$eq',
        '<': '$lt',
        '<=': '$lte',
      }
      const regEx = /\b(<=|<|=|>|>=)\b/g
      let filters = numericFilters.replace(
        regEx,
        (match) => `-${operatorMap[match]}-`
      );
      const options = ['price', 'rating'];
      filters = filters.split(',').forEach((item) => {
        const [field, operator, value] = item.split('-')
        if (options.includes(field)) {
          queryObject[field] = { [operator]: Number(value) }
        }
      })
    }
    let result =  Product.find(queryObject)
    if(sort){
        sortList = sort.split(",").join(" ")
        result = result.sort(sortList)
    }else{
        result = result.sort('createdAt')
    }
    if(fields){
        fieldsList = fields.split(",").join(" ")
        console.log(fieldsList);
        result = result.select(fieldsList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 5 
    const skip = (page - 1) * limit
    const product =  await result.skip(skip).limit(limit)
    res.status(200).json({length: product.length , product:product})
}
module.exports = {
    getAllProducts,
    getAllProductsStatic
}