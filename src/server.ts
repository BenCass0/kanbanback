

const express=require('express');
const app=express();
const morgan=require('morgan')
const path=require('path');
const mysql=require('mysql2');
const myConnection=require('express-myconnection');
//Importing routes
const customerRoutes=require('./Routes/customers');
//Settings
app.set('port',process.env.PORT||3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'12345',
    port:'3306',
    database:'crudnodejsmysql'
},'single'))

app.use(express.urlencoded({extends:false}));
//Routes
app.use('/', customerRoutes);

//Static files
app.use(express.static(path.join(__dirname,'public')))

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});