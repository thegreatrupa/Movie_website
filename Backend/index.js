const express = require("express");
const mongoose = require("mongoose");
let MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
const cors = require('cors');


const app = express();
//app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/movie_website_authentication");
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
app.use(bodyParser.json());

const UserSchema = mongoose.Schema({ 
  name : String,
  email: String,
  password: String,
  watchlist: [String],
  likes: [String]
});

const UserModel = mongoose.model("users", UserSchema);
UserModel.createIndexes();


// const UserSchema_data = mongoose.Schema({ 
//   name : String,
//   watchlist: [String],
//   likes: [String]
// });

// const UserModel_data = mongoose.model("users_data", UserSchema_data);
// UserModel_data.createIndexes();

app.get("/user", (req, res) => { 
  UserModel.find()
    .then(function (users) {
      res.send(users) 
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.post("/match", (req, res) => { 
  UserModel.find()
    .then(function (users) { 
      let a=0; 
      for(let i in users){ 
        if(users[i].email === req.body.email && users[i].password === req.body.password) {a=1; break;}
      }
      if(a==0) res.send('0');
      else if(a==1) res.send('1'); 
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.post("/exist", (req, res) => {
  UserModel.find()
    .then(function (users) {
      let a=0;
      for(let i in users){ 
        if(users[i].name === req.body.name || users[i].email === req.body.email) {a=1; break;}
      }
      if(a===1) res.send('1'); 
      else if(a===0) res.send('0');
    })
    .catch(function (err) {
      console.log(err);
    });
});


app.post("/userData", (req, res) => {
  UserModel.find()
    .then(function (users) {
      let a=0;
      for(let i in users){
        if(users[i].email === req.body.email) {res.send(users[i]); break;}
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});



app.post("/register", async (req, resp) => {
  try {
    const user = new UserModel(req.body);
    let result = await user.save();
    result = result.toObject(); 
    if (result) { 
      resp.send("registered successfully"); 
    } else {
      resp.send("Unable to register")
      // console.log("User already register");
    }
  } catch (e) {
    resp.send("Something is Wrong");
  }
});


app.post("/add_watchlist", async (req, resp) => {
  console.log("came for watchlist : " + req.body.movie_name)
  console.log(req.body)
  try {
    let result = await UserModel.updateOne(
      { email: req.body.email},
      { $push: { watchlist: req.body.movie_name } }
    )
    // result = result.toObject();
    console.log(result);
    if (result.modifiedCount === 1) { 
      resp.send("1"); 
    } else if (result.modifiedCount === 0) {
      resp.send("0")
    }
  } catch (e) {
    resp.send("Something is Wrong");
  }
});


app.post("/delete_watchlist", async (req, resp) => {
  console.log("came for remove from watchlist : " + req.body.movie_name)
  console.log(req.body)
  try {
    let result = await UserModel.updateOne(
      { email: req.body.email},
      { $pull: { watchlist: req.body.movie_name } }
    )
    // result = result.toObject();
    console.log(result);
    if (result.modifiedCount === 1) { 
      resp.send("1"); 
    } else if (result.modifiedCount === 0) {
      resp.send("0")
    }
  } catch (e) {
    resp.send("Something is Wrong");
  }
});


app.post("/add_like", async (req, resp) => {
  console.log("came for like : " + req.body.movie_name)
  console.log(req.body)
  try {
    let result = await UserModel.updateOne(
      { email: req.body.email},
      { $push: { likes: req.body.movie_name } }
    )
    // result = result.toObject();
    console.log(result);
    if (result.modifiedCount === 1) { 
      resp.send("1"); 
    } else if (result.modifiedCount === 0) {
      resp.send("0")
    }
  } catch (e) {
    resp.send("Something went wrong");
  }
});


app.post("/delete_like", async (req, resp) => {
  console.log("came for remove from likes : " + req.body.movie_name)
  console.log(req.body)
  try {
    let result = await UserModel.updateOne(
      { email: req.body.email},
      { $pull: { likes: req.body.movie_name } }
    )
    // result = result.toObject();
    console.log(result);
    if (result.modifiedCount === 1) { 
      resp.send("1"); 
    } else if (result.modifiedCount === 0) {
      resp.send("0")
    }
  } catch (e) {
    resp.send("Something is Wrong");
  }
});



app.listen(3001, () => {
  console.log("server is running");
});
