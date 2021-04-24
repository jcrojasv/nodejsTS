"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = require("./core/server");
const port = 3000;
server_1.server.build()
    .listen(port, () => console.log(`Listen on port: ${port}`));
