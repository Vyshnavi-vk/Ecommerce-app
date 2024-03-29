import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import {
    productCountController,
    searchProductController,
    createProductController,
    productListController,
    productFiltersController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productPhotoController,
    updateProductController,
    relatedProductController,
    productCategoryController,
    tokenController,
    paymentController
}
    from '../controllers/productController.js'
import formidable from 'express-formidable'


const router = express.Router()

router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
);
//routes
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

router.post('/product-filter', productFiltersController)

router.get('/product-count', productCountController)

router.get('/product-list/:page', productListController)

router.get('/search/:keyword', searchProductController)

router.get('/related-product/:pid/:cid', relatedProductController)

router.get('/product-category/:slug', productCategoryController)

router.get('/braintree/token', tokenController)

router.post('/braintree/payment', requireSignIn, paymentController)

export default router;