import { request, response } from "express";

const userGet = (req = request,res = response)=>{

    const query = req.query;

    res.json({
        msg:"get API - Controller",
        query
    });
}

const userPost = (req,res)=>{

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg:"post API - Controller",
        nombre,
        edad
    });
}

const userPut = (req,res)=>{

    const { id } = req.params;

    res.status(500).json({
        msg:"put API - Controller",
        id
    });
}
const userPatch = (req,res)=>{
    res.json({
        msg:"patch API - Controller"
    });
}

const userDelete = (req,res)=>{
    res.json({
        msg:"delete API - Controller"
    });
}

export {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}