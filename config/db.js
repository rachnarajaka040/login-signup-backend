const mongoose=require('mongoose');

const connection=async()=>{
    await mongoose.connect("mongodb+srv://rachna:12345@cluster0.d5ixq3k.mongodb.net/");
}

module.exports=connection;