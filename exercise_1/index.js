const express = require('express');
const app = express();
const port = 3051;

app.use(express.static('src/utils/css'));

app.get('', (req, res)=>{
    res.sendFile(`${__dirname}/src/index.html`)
})

app.listen(port, ()=> console.log(`Server runnin in ${port} port`));