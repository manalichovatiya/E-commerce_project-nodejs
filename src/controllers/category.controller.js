const { categoryService} = require("../services");

/** create user */
const createCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    // const userExists = await categoryService.getUserByEmail(reqBody.email);
    // if (userExists) {
    //   throw new Error("User already created by this email!");
    // }

    const category = await categoryService.createCategory(reqBody);
    // if (!user) {
    //   throw new Error("Something went wrong, please try again or later!");
    // }
    res.status(200).json({
      success: true,
      message: "Category create successfully!",
      data: { category },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    createCategory
}