const { productService } = require("../services");

/** create product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;

    // const productExists = await productService.getProductByEmail(reqBody.email);
    // if (productExists) {
    //   throw new Error("Product already created by this email!");
    // }

    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Product create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get product list */
const getProductList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { Product_name: { $regex: search, $options: "i" } },
        { Product_number : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await productService.getProductList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get product list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete product */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.ProductId;
    const productExists = await productService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }
    await productService.deleteProduct(productId);

    res.status(200).json({
      success: true,
      message: "Product delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createProduct,
  getProductList,
  deleteProduct
};