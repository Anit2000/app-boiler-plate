import express from "express";
import fs from "fs"
import path from 'node:path';
import mongoose from "mongoose";
import initialLoad from "./middleware/initialLoad.js";
import "dotenv/config";
import { createServer as createViteServer } from "vite";
import authRouter from "./utils/authHandler.js";

const dev = process.env.NODE_ENV == 'dev' || false;

const app = express();

const createServer = async () => {
    app.disable("x-powered-by");

    // handling webhooks
    // app.post("/api/webhooks/:topic",express.text({type:'*/*'}),async)
    // app.use(initialLoad);
    app.use("/api/auth",authRouter);

    mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB connected'))
    const viteServer = await createViteServer({
        root: path.resolve(process.cwd(), "client"),
        server: {
            middlewareMode: true
        },
        appType: 'spa'
    });
    app.use(viteServer.middlewares);
    app.use('*', async (req, res) => {
        const url = req.originalUrl;
        try {
            const template = await viteServer.transformIndexHtml(url, fs.readFileSync(path.resolve(process.cwd(), "client", "index.html"), "utf-8"));
            res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
        } catch (err) {
            console.log("error occured", err)
            res.status(500).end(err)
        }
    })
    app.listen(8082, () => {
        console.log("listening to PORT", process.env.PORT || 8082)
    })
}
createServer();