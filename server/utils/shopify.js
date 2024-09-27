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

// https://db03-115-241-16-130.ngrok-free.app/api/auth?shop=my-test-store-it-is.myshopify.com
// https://774d-115-241-16-130.ngrok-free.app/api/auth/callback?code=55e1e61714d69fae105780b0f3aaf79d&hmac=ac85b50458f93cc069ec4f4165b0d9a0b48ffbcbe3374e535efe454803559c58&host=YWRtaW4uc2hvcGlmeS5jb20vc3RvcmUvbXktdGVzdC1zdG9yZS1pdC1pcw&shop=my-test-store-it-is.myshopify.com&state=492325135775825&timestamp=1727431925
