const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
//1 api movies
router.get('/movies',function(req,res){
    res.send('["Hacksaw-Ridge","Tomorrow-War","Spider-man",Wrong-turn","Harry-Potter"]')
});
//2. api movie by indexid
router.get('/movies/:movieId',function(req,res){
    mov=["Hacksaw-Ridge","Tomorrow-War","Spider-man","Wrong-turn","Harry-Potter"]
    let value =req.params.movieId;
    if(value>mov.length-1){
        res.send('"doesnt exists"')
    }
    else{
        res.send(mov[value])
    }
})
//3. fetch movies from array
router.get('/moviez',function(req,res){
    res.send([{id: 1,name:'The Shining'},{id: 2,name:'Incendies'},{id: 3,name :'3 idiots'},{
        id: 4,name:'Hulk'},{id: 5,name:'Thor'
    }]);
})
//4.

module.exports = router;
