import 'reflect-metadata';
import { container } from "./core/container.core";
import { server } from "./core/server";
import { TYPES } from "./core/types.core";

const port = 3000;

server.build()
  .listen(port, () => console.log(`Listen on port: ${port}`));