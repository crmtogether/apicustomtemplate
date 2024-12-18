const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
var demoRouter = require("./routes/demo");

console.log(`STARTING...`);

app.use("/", demoRouter);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
     console.log(`STARTED`);
});

console.log(`STARTED`);