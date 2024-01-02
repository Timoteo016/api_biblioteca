const express = require ('express');


//Import & config middleware w/ auth server
const { auth } = require("express-oauth2-jwt-bearer");
//import middleware error handler
const errorHandler = require("./middleware/errorHandler");

const autenticacion = auth({
audience: "http://localhost:3000/api/productos",
issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
tokenSigningAlg: "RS256",
});


const app = express();
app.use(express.json());



//import router libros
const librosRouter = require('./router/libros');





app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(3000,() =>{
    console.log('Servidor iniciado en el puerto 3000');
});


