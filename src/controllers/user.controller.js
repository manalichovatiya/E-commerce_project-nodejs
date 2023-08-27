const { userService , categoryService , productService } = require("../services");

/** create user */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    const userExists = await userService.getUserByEmail(reqBody.email);
    if (userExists) {
      throw new Error("User already created by this email!");
    }

    const user = await userService.createUser(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

// /** Get user list */
// const getUserList = async (req, res) => {
//   try {
//     const { search, ...options } = req.query;
//     let filter = {};

//     if (search) {
//       filter.$or = [
//         { first_name: { $regex: search, $options: "i" } },
//         { last_name: { $regex: search, $options: "i" } },
//       ];
//     }
//     const getList = await userService.getUserList(filter, options);

//     res.status(200).json({
//       success: true,
//       message: "Get user list successfully!",
//       data: getList,
//     });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

/** Get user details by id */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getUserById(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete user */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }
    await userService.deleteUser(userId);

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**All data */
const getAlldata  = async(req,res) => {
  try {
      const userlist = await userService.getUserList();
      if(!userlist){
        throw new Error("No user data found -!- ");
      }
      const categorylist = await categoryService.getCategoryList();
      if(!categorylist){
        throw new Error("No Category data not found -!- ");
      }
      const productlist = await productService.getProductList();
      if(!productlist){
        throw new Error("No Product data not found -!- ");
      }
      res.status(200).json({
          success:true,
          message:"All data dispatch successfully",
          userData: userlist,
          categoryData: categorylist,
          productData: productlist,
      });
  } catch (error) {
      res.status(400).json({
          success:false,
          message: error.message,
      });
  }
}
module.exports = {
  createUser,
  getUserDetails,
  deleteUser,
  getAlldata,
};