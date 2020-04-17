const express = require("express");
let app = express();

//app.get('/',(req,res) => res.send("Hello From Express"));
app.use(express.static('public'));
app.use('/',function(req,res){
    res.sendFile(path.resolve('public/index.html'));
});

app.listen(3000, () => console.log("Express listening on port 3000"));

