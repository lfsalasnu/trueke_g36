const express = require('express')
const rutas_usr=express.Router()

const datos=require('../Modelo/bd_usuarios')

rutas_usr.post('/nuevo',(req,res)=>{
    let body=req.body
    let nuevo=new datos({
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        ciudad:body.ciudad,
        usuario:body.usuario,
        cont:body.cont
    })

    

    nuevo.save((err,nuevodb)=>{
        if(err){
            res.send(`<p>${err}</p>`)
        }
        else{
            res.json({nuevodb})
        }
    })
    
    //res.json(body)
})

rutas_usr.get('/todo',(req,res)=>{
    datos
        .find({})
        .then(todo=>res.json(todo))
})

rutas_usr.post('/actualizar',(req,res)=>{
    let body=req.body
    datos.updateOne({nombre:body.nombres}, {
        $set:{
            edad:body.edad,
            ciudad:"no hay ciudad"
        }
        
    },function(error,info){
        if(error){
            res.send('error')
        }
        else{
            res.json({info})
        }
    })
    //res.json({body})
})

rutas_usr.get('/eliminar/:id',(req,res)=>{
    let {id}=req.params
    datos
        .findByIdAndDelete(id)
        .then(res.send('Registro borrado'))
})

module.exports=rutas_usr