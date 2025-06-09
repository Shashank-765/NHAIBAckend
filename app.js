const express = require('express');
const app = express();
const contractRoutes = require('./routes/contractRoutes');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


app.use(helmet()); 
app.use(morgan('dev')); 
app.use(cors({
    origin: (origin, callback) => callback(null, origin),
    credentials: true
  }));
app.use(express.json());
app.use('/', contractRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
