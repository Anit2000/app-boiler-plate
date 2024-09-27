import express from "express";
import shopify from "./shopify";

const authRouter = express.Router();


authRouter.get("/",async (req,res) =>{
    await shopify.auth.begin({
        shop: shopify.utils.sanitizeShop(req.query.shop,true),
        callbackPath: 'api/auth/callback',
        isOnline:false,
        rawRequest:req,
        rawResponse:res
    })
})

authRouter.get("/callback",async(req,res) =>{
    let callback = await shopify.auth.callback({
        rawRequest:req,
        rawResponse:res
    });
    console.log(callback.session);
    let redirectUrl = await shopify.auth.getEmbeddedAppUrl({
        rawRequest:req,
        rawResponse:res
    });
    res.redirect(redirectUrl);

});

export default authRouter;