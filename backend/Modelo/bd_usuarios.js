const mongoose=require('mongoose')

const esquema= mongoose.Schema({
    nombres: String,
    apellidos: String,
    ciudad: String,
    edad: Number,
    usuario:String,
    cont:String
})

const datos_usr=mongoose.model('usuarios',esquema)

module.exports=datos_usr