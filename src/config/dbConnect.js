import mongoose from "mongoose";
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://alura:123@cluster0.g0cfk78.mongodb.net/alura-node?retryWrites=true&w=majority&appName=Cluster0");

let db = mongoose.connection;



export default db;
