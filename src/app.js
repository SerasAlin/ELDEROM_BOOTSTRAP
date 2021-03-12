const path = require('path');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

//Define paths for Express config
const distDirectoryPath = path.join(__dirname, '../dist');
const pugPath = path.join(__dirname, '/pug');

//Setup pug engine and views location
app.set("json spaces", 4);
app.set('views', pugPath);
app.set('view engine', 'pug');

//Setup status directory to serve
app.use(express.static(distDirectoryPath));

//DB stuff
const uri = process.env.MONGODB_URI || "mongodb+srv://SerasAlin:SerasAlin96@elderom-mqw6m.mongodb.net/elderom_cluj?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 3000

client.connect((err, database) => {
    db = database.db("elderom_cluj");
    app.listen(port, function () {
    })
});

app.get('/', (req, res) => {
    res.render('index', {
        title:"Elderom Cluj-Napoca"
    })
});

app.get('/litere-volumetrice', async(req, res) => {
    try{
        await db.collection('litere_volumetrice').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('litere-volumetrice',
                {
                    photos: result,
                    title: "Elderom-Litere-volumetrice"
                })

        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/mobilier-iluminare',async(req, res) => {
    try{
        await db.collection('mobilier_iluminare').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('mobilier',
                {
                    photos: result,
                    title: "Elderom-Mobilier"
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/panouri-reclame', async(req, res) => {
    try{
        await db.collection('panouri_reclame').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('reclame',
                {
                    photos: result,
                    title: "Elderom-Reclame"
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/standuri-expo-totemuri', async(req, res) => {
    try{
        await db.collection('standuri_expo_totemuri').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('standuri-expo',
                {
                    photos: result,
                    title: "Elderom-Standuri-Expo"
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/unicate-diverse', async(req, res) => {
    try{
        await db.collection('unicate').find().toArray(function (err, result) {
            if (err) {
                return console.log(err)
            }
            res.render('unicate',
                {
                    photos: result,
                    title: "Elderom-Unicate"
                })
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('/*', (req, res) => {
    res.render('404', {
        title: "404",
        subtitle1:"Page Not Found",
        subtitle2:"Pagina nu a fost gasita"
    })
});

app.get("*", (req, res) => {
    res.render('404', {
        title: "404",
        subtitle1:"Page Not Found",
        subtitle2:"Pagina nu a fost gasita"
    })
});
