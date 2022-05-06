const express = require('express');
const morgan = require('morgan');
const main = require('./main');


const app = express();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));



app.listen(app.get('port'), ()=>{

    return true;
})


