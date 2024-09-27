import shopify from "../utils/shopify.js";
const initialLoad = async (req,res,next) =>{
    console.log("initial load ran");
    try{
       let {hmac,...query} = req.query;
       if(hmac){
           console.log(hmac,query);
           let validateHmac = await shopify.utils.validateHmac(req.query);
           console.log(validateHmac,"here")
       }
    if(hmac){

    }
        console.log(req.query);
        next();
    }catch(err){
        console.log('An error occured in initial load',err);
        return res.status(403).send({error:true})
    }

};

export default initialLoad;