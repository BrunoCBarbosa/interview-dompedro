const con = require('../database/databaseConnection');

module.exports = {
    async index(req, res){
  
        await con.query('SELECT * FROM register',(err, data) => {
            if(err){
                res.json(err);
            }
            res.json(data)
        })
    },

    async save(req, res){
        const data = req.body 
     
        await con.query('INSERT INTO register set ?', data, (err, result) => {
            if(err){
                res.json(err);
            }

            return res.json({ message: "Register created!!" })
        })
       
    }
}