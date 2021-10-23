import "reflect-metadata";
import express from 'express';


const main = async () => {
    const app = express();

    app.listen(4000, () => {
        console.log(`Server started on localhost:4000`)
    });
}


main().catch((err) => {
    console.error(err)
})