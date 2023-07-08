const express = require ("express");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const db =  require("./models");
const diseaseRouter = require("./routes/diseases");
const usersRouter = require("./routes/users");

app.use(express.json());
app.use(cors());

app.use("/diseases", diseaseRouter);
app.use("/users", usersRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
   app.listen(3003, () => {
    console.log("database server is running on port 3003")
   }); 
   // app.post('/signup', (req, res) => {
   //    const { username } = req.body;
   //   console.log(req.body)
   //    // Perform any necessary operations with the firstName
    
   //    res.json({ username });
   //  }); 
})
