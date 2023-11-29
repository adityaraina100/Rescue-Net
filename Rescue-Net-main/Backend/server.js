const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const userRoutes  = require("./routes/userRoute")
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config()
connectDB()
const app = express();
const port = 3001; 

app.use(bodyParser.json());

app.use("/api/user" , userRoutes)

app.get("/", async function (req, res) {
    // if (!req.session.isLoggedIn) {
      res.send("Api running")
      // res.redirect("/login");
    //   return;
    // }
})

app.get("/login", async function (req, res) {
  res.send("Logged in ")
}
)
app.use(notFound)
app.use(errorHandler)
// // Login endpoint
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   // Simulated authentication
//   const user = users.find((user) => user.username === username && user.password === password);

//   if (user) {
//     res.status(200).json({ message: 'Login successful' });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
