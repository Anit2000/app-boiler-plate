## Vite's working and purpose

### Purpose
 We have used vite to smoothen the development process by leveraging Vite's HMR and easy configurations


Right now we only have tackeled the development code we'll do the production one later

- [ ] Creating a vite server


```
    import { createServer as createViteServer }
    const viteServer = await createViteSever({
        root : path.resolve(process.cwd(),"client"),
        server : {
            middleWareMode : true
        },
        appType : "spa"
    });
    app.use(viteServer.middlewares);
    const template = await viteServer.transformFromIndexHtml(url,fs,readFileSync(path.resolve(process.cwd()."client","index.html"),"utf-8"))
```


   ***createViteServer*** creates a development server and additional configs make sure vite hands control to express<br>
   ***app.use(vite.middelwares)*** ensures that any request to express gets passed back to vite<br>
   ***template*** It is the starting point for the client

Note : For production we'll be serving the react/client file statically in express.js


