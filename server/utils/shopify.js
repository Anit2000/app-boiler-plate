import { shopifyApi } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";
import "dotenv/config";

const shopify = shopifyApi({
    apiKey:process.env.APP_CLIENT_ID,
    apiSecretKey:process.env.APP_CLIENT_SECRET,
    scopes:[process.env.APP_SCOPES],
    hostName:process.env.APP_URL.replace("https://",""),
    hostScheme:'https',
    isEmbeddedApp:true,
    apiVersion:"2024-07"
});
export default shopify;

// https://774d-115-241-16-130.ngrok-free.app/api/auth?shop=my-test-store-it-is.myshopify.com

