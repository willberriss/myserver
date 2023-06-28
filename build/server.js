var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { router } from "./app/routes/note_routes.js";
import bodyParser from "body-parser";
const port = 8000;
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            app.use("/", router);
            app.listen(port, () => {
                console.log("We are listening on port " + port);
            });
        }
        finally {
            // Ensures that the client will close when you finish/error
            //await client.close();
            console.log("Finally - doing bugger all.");
        }
    });
}
run().catch(console.dir);
