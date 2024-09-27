import express from "express";
import shopify from "./shopify.js";

const authRouter = express.Router();


authRouter.get("/callback",async(req,res) =>{
    let callback = await shopify.auth.callback({
        rawRequest:req,
        rawResponse:res,

    });
    let redirectUrl = await shopify.auth.getEmbeddedAppUrl({
        rawRequest:req,
        rawResponse:res,
    });
    res.redirect(redirectUrl);

});

authRouter.get("/",async (req,res) =>{
    await shopify.auth.begin({
        shop: shopify.utils.sanitizeShop(req.query.shop,true),
        callbackPath: '/api/auth/callback',
        isOnline:false,
        rawRequest:req,
        rawResponse:res,
    })
})


export default authRouter;