const mongoose = require("mongoose");

const chatschema= new mongoose.Schema( {
    from : {
        type: String,
        required : true,
    },
    to : {
        type : String,
         required : true,
    },
    msg : {
       type : String,
        maxlength : 50,
    },
    created_at : {
        type : Date,
        required :true,

    }
    });
    module.exports = mongoose.model("chat", chatschema);
