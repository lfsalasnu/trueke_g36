const express = require('express')
const rutas=express.Router()

const datos=require('../Modelo/bd_g36')

rutas.post('/nuevo',(req,res)=>{
    let body=req.body
    let nuevo=new datos({
        nombre:body.nombre,
        descripcion:body.descripcion,
        cantidad:body.cantidad,
        valor:body.valor,
        usuario:body.usuario,
        imagen:body.imagen
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

rutas.get('/todo',(req,res)=>{
    datos
        .find({})
        .then(todo=>res.json(todo))
})

rutas.post('/actualizar2',(req,res)=>{
    let body=req.body
    //let act=datos.findById(body.id)
    //console.log(body.nombre)
    if (body.nombre!='') {
        //console.log("entro")
        datos.findByIdAndUpdate(body.id,{
            $set:{nombre:body.nombre}
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })
        
    }
    
    if (body.descripcion!='') {
        //console.log("entro")
        datos.findByIdAndUpdate(body.id,{
            $set:{descripcion:body.descripcion}
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })
        
    }

    if (body.valor!='') {
        //console.log("entro")
        datos.findByIdAndUpdate(body.id,{
            $set:{valor:body.valor}
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })
        
        if (body.imagen!='') {
            //console.log("entro")
            datos.findByIdAndUpdate(body.id,{
                $set:{imagen:body.imagen}
            },function(error,info){
                if(error){
                    console.log(error)
                }
                else{
                    console.log({info})
                }
            })
            
        }
    }

    if (body.cantidad!=0) {
        //console.log("entro")
        datos.findByIdAndUpdate(body.id,{
            $set:{cantidad:body.cantidad}
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log({info})
            }
        })
        
    }

        
})

rutas.post('/actualizar',(req,res)=>{
    let body=req.body
    let nombre=body.nombre
    datos.updateOne({_id:body.id}, {
        $set:{
            cantidad:body.cantidad,
            imagen:body.imagen
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

rutas.get('/eliminar/:id',(req,res)=>{
    let {id}=req.params
    datos
        .findByIdAndDelete(id)
        .then(res.send('Registro borrado'))
})

module.exports=rutas