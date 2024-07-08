const express=require('express')
const router=express.Router()
const typeDefs=require('../schema')
const resolvers=require('../resolvers')
const {ApolloServer,gql}=require('apollo-server-express')
const server=new ApolloServer({typeDefs,resolvers})
router.post('/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const {data,error}=await server.executeOperation({
            query:gql`query{
            mutation{
            createUser(input:(name:"${name}",
            email:"${email}",
            password:"${password}")
            {
            id
            name
            emai
            password}
            }}`
        });
        if(error){
            return res.status(500).send({message:err})
        }



    }catch(err){
        res.status(500).send({message:err});
    }
})