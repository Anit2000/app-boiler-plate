import StoreModel from "../models/StoreModel.js";

const appUninstallHandler = async (topic, shop, webhookRequestBody, webhookId, apiVersion) => {
    const webhookBody = JSON.parse(webhookRequestBody);
    await StoreModel.findOneAndUpdate({ shop }, { isActive: false });
};
export default appUninstallHandler;