const express=require("express");
const app=express();
const port=8000;

const admin=(req,res)=>{
    return res.send("ADMIN page");
};
const isadmin=(req,res,next)=>{
    return res.send("ADMIN is running");
    next();
};
const isloggedin=(req,res)=>{
    return res.send("logged in");
    next();
}


app.get("/",(req,res)=>{
    return res.send("HOMe page");
});

app.get("/admin",isloggedin,isadmin,admin);


app.listen(port,()=>{
    console.log("Server is running");
});