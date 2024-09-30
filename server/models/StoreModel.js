import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    shop:{
        type:String,
        required:true,
        unique:true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:false
    }
});
const StoreModel = mongoose.model("stores",storeSchema);

export default StoreModel;