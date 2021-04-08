const express = require('express');
const app = express();
const port = 3052;

app.use(express.static('src/utils/css'));
app.use(express.static('src/utils/js'));

app.get('', (req, res)=>{
    res.sendFile(`${__dirname}/src/index.html`)
})

app.listen(port, ()=> console.log(`Server runnin in ${port} port`));