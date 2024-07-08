const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const app = express();
const userApiFromRouter=require('./routes/usersRoutes')
const port = 3030;
const url= 'mongodb+srv://nithyaailuri:nithya@cluster0.omdndsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
app.use(express.json())//parsing
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log('server live 3030');
    })
}
function TESTING(){
    return 1;
}
TESTING();
StartServer();
