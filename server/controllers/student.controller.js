const express = require("express");
const bcrypt = require("bcryptjs");
const {pool} = require("../config/db");
const jwt = require("jsonwebtoken");


async function login(req,res){
    try{
        const {username, password} = req.body;
        if (!username || !password){
return res.status(400).json({message : "all fields are required"});
        }
        const [rows]= await pool.promise().query("SELECT * FROM students WHERE  username=? LIMIT 1",[username]);

        const student = rows[0];
        if (!student){
            return res.status(401).json({message : "Invalid Credentials"})
        }
        const ok = await bcrypt.compare(password,student.password_hash);
        if(!ok){
            return res.status(400).json({message: "Invalid Credentials"})
        }
        const token = jwt.sign(
            {id : student.id, name: student.name, username: student.username},
            process.env.JWT_SECRET,
            {expiresIn:"2d"}
      )
      return res.json({token});

    }catch(err){
        return res.status(500).json({message:err.message})
    }
}
 async function me(req,res){
    try{
        const [rows] = await pool.promise().query(
            "SELECT id, name, username FROM students WHERE id =?",[req.user.id]
        );
        return res.json(rows[0]);
    }catch(err){
        return res.status(500).json({message:err.message});
    }
    }
    module.exports={login, me}