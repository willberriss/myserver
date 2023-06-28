import express from "express";

import {router} from "./app/routes/note_routes.js";

import bodyParser from "body-parser";
const port = 8000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function run() {
  try {
    app.use("/", router);

    app.listen(port, () => {
        console.log("We are listening on port " + port);
    });

  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
    console.log("Finally - doing bugger all.");
  }
}
run().catch(console.dir);


