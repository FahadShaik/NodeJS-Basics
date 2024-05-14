import express from "express";
import product from "../model/Product.js";
let router = express.Router();

router.get("/", (req, resp) => {
  resp.send("Prod  Root request");
});

/**
 * URL: http://127.0.0.1:8080/products/create
 * method: POST
 */

router.post("/create", async (req, resp) => {
  console.log("inside create method");
  let newProduct = {
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    info: req.body.info,
    qty: req.body.qty,
  };
  //logic to find and create a new product
  let addProduct = await product.findOne({ name: newProduct.name });

  if (addProduct) {
    // console.log("Hello");
    return resp.status(401).json({ msg: "Product already exists" });
  }

  addProduct = new product(newProduct);

  await addProduct.save();
  resp.json({ msg: "Product uploaded successfully", product: addProduct });
});

/**
 * URL: http://127.0.0.1:8080/products/allprods
 * method: get
 */
router.get("/allprods", async (req, resp) => {
  let productsList = await product.find();
  resp.status(200).json(productsList);
});

/**
 * URL: http://127.0.0.1:8080/products/
 * method: get
 */

router.get("/:id", async (req, resp) => {
  let productId = req.params.id;
  let verifyProduct = await product.findById(productId);
  resp.json(verifyProduct);
});

/**
 * URL: http://127.0.0.1:8080/products/update/663a13dcccac9caa11e805a1
 * method: PUT
 */

router.put("/update/:id", async (req, resp) => {
  console.log("Inside update method");
  let updatedProduct = {
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    info: req.body.info,
    qty: req.body.qty,
  };
  console.log(updatedProduct);
  let productId = req.params.id;
  console.log(productId);
  let verifyProduct = await product.findById(productId);
  // console.log(verifyProduct);
  if (!verifyProduct) {
    return resp.json({ msg: "Product not found" });
  }
  verifyProduct = await product.findByIdAndUpdate(
    productId,
    {
      $set: updatedProduct,
    },
    { new: true }
  );
  // console.log(verifyProduct);
  resp.json({ msg: "Product updated", product: verifyProduct });
});
/**
 * URL: http://127.0.0.1:8080/663b4a3b740dea3541541541
 * TYPE:DELETE
 */
router.delete("/:id", async (req, resp) => {
  let productId = req.params.id;
  let verifyProduct = await product.findById(productId);
  if (!verifyProduct) {
    return resp.json({ msg: "product not found" });
  }
  verifyProduct = await product.findByIdAndDelete(productId);
  resp.json({ msg: "Product deleted successfully" });
});

export default router;
