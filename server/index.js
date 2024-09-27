import express from "express";
import fs from "fs"
import path from 'node:path'
import initialLoad from "./middleware/initialLoad.js";
import "dotenv/config";
import shopify from "./utils/shopify.js";
import { createServer as createViteServer } from "vite";
import authRouter from "./utils/authHandler.js";

const dev = process.env.NODE_ENV == 'dev' || false;

const app = express();

const createServer = async () => {

    // app.use(initialLoad);
    app.use("/api/auth",authRouter);

    
    const viteServer = await createViteServer({
        root: path.resolve(process.cwd(), "client"),
        server: {
            middlewareMode: true
        },
        appType: 'custom'
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