const express = require("express");
const bParser = require('body-parser');
// Reyhan Alkadri
const app = express();
app.use(bParser.urlencoded({extended:false})); // req.body.nama, req.body.umur

app.get('/', function(req, res){;
    res.sendFile(__dirname+'/index.html');
});

app.post('/', function(req, res){;
    const nama = req.body.nama;
    const umur = req.body.umur;
    let json = {};
    if(!nama){
        json.error = 'nama tidak boleh kosong';
        res.end(JSON.stringify(json));
    }
    else if(!umur){
        json.error = 'umur tidak boleh kosong';
        res.end(JSON.stringify(json));
    }
    else if(umur<0){
        json.error = 'umur tidak boleh negatif';
        res.end(JSON.stringify(json));
    }
    else {
        json.name = nama;
        let vokal = 0;
        var kata = nama.split(' ').length;
        var tahun_lahir = 2020 - umur;
        if(umur%2==0){
            hasil = true;
        }else{
            hasil = false;
        }
        for(let s=0;s<nama.length; ++s){
            const vc = nama[s];
            if (vc == 'a' || vc == 'i' || vc == 'u' || vc == 'e' || vc == 'o'){;
                ++vokal;
            }
        }
        json.jumlahVokal = vokal;
        json.jumlahKata = kata;
        json.tahunLahir = tahun_lahir;
        json.umurGenap = hasil;
        res.end(JSON.stringify(json));
    } 
});

app.listen(8000, function(){
    console.log('Listen pada port http://localhost:8000');
})