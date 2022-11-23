const express = require('express')
const app1 = express()
const port = 5000

const bodyParser=require('body-parser')
app1.use(bodyParser.json())
app1.use(bodyParser.urlencoded({extended:false}))

const cors=require('cors')
app1.use(cors([]))

// Conexión Mongo
const mongoose = require('mongoose')
    //.connect('mongodb://localhost:27017/g_36')
        //.connect('mongodb://trueke:123456789abcd@ac-wfj5jiq-shard-00-00.py9ltpf.mongodb.net:27017,ac-wfj5jiq-shard-00-01.py9ltpf.mongodb.net:27017,ac-wfj5jiq-shard-00-02.py9ltpf.mongodb.net:27017/?ssl=true&replicaSet=atlas-i85vos-shard-0&authSource=admin&retryWrites=true&w=majority/trueke_g36')
mongoose
    .connect('mongodb+srv://trueke:123456789abcd@cluster0.py9ltpf.mongodb.net/trueke_g36')
    .then(() => console.log('conectado a la base de datos'))

// modelo
const datos = require('./Modelo/bd_g36')



const rutas=require('./router/rutas')
app1.use('/articulos',rutas)

const rutas_usr=require('./router/rutas_usuario')
app1.use('/usuarios',rutas_usr)

app1.listen(port, () => { console.log(`Conexión puerto ${port}`) })   