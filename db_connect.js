const my = require('mysql2');
const db = my.createConnection({
    host: 'localhost',
    user: 'fin',
    password: '123',
    database: 'finance'
})
db.connect(function(err) {
    if(err) throw err;
    console.log('connected');
})

    // let q = `INSERT INTO items(id, name, harga) VALUES(?,?,?)`
    // data = [Math.round(Math.random()*100+100),'user'+Math.random(),10000]
    // db.query(q,data,function(err,rows){
    //     if(err) throw err;
    //     console.log(rows);
// })