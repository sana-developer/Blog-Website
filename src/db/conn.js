const mongoose = require("mongoose");
//creating a db
mongoose.connect("mongodb://localhost:27017/website",{
    useCreateIndex: true,
    useNewUrlParser: true,
   useUnifiedTopology: true 
}).then(()=>{
    console.log("Connection Successfull");
}).catch((error) => {
    console.log(error);
})