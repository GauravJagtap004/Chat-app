const mongoose = require("mongoose");
const Chat=require('./models/chat');

main()
  .then(()=>{
    console.log("connection successful");
  })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats = [
    {
  from: "neha",
  to: "priya",
  msg : "send me your exam sheets",
  created_at : new Date(),
    },
      {
  from: "gaurav",
  to: "tejas",
  msg : "best of luck",
  created_at : new Date(),
    } ,
 {
  from: "parth",
  to: "yoyesh",
  msg : "give me a pen",
  created_at : new Date(),
    },
    {
  from: "sunny",
  to: "janhavi",
  msg : "give me a book",
  created_at : new Date(),
    },
    {
  from: "tejas",
  to: "pratiksha",
  msg : "give me a love",
  created_at : new Date(),
    },
    {
  from: "lokesh",
  to: "ayan",
  msg : "give me a botle",
  created_at : new Date(),
    },
    {
  from: "kunal",
  to: "kwtan",
  msg : "give me a addmission",
  created_at : new Date(),
    },
    {
  from: "zende",
  to: "mansi",
  msg : "what are you doing",
  created_at : new Date(),
    },
];
 try {
    await Chat.insertMany(allchats);
    console.log("Chats inserted successfully");
  } catch (err) {
    console.log("Error inserting chats:", err);
  }

