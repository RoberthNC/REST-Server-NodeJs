import express from "express";
import cors from "cors";

import router from "../routes/user.js";

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = "/api/users";

        //Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares(){
        //Cors
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio public
        this.app.use(express.static("public"));
    }

    routes(){
        this.app.use(this.usersPath, router);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Corriento en el puerto ${this.port}`);
        });
    }
}

export default Server;