const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vijay:vijay@cluster0.marbr.mongodb.net/studentdatas?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connection Suceesfully ✔");
  })
  .catch((e) => {
    console.log(e);
  });
