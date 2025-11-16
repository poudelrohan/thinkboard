import express from "express";
import { createNode, deleteNode, getAllNotes, updateNode } from "../controllers/noteControllers.js";

const router = express.Router();

router.get("/",getAllNotes);

router.post("/",createNode);

router.put("/:id",updateNode);

router.delete("/:id",deleteNode);

export default router;

// app.get("/api/notes", (req,res) =>{
//     res.send("You have 50 notes");
// });


// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({message: "Post created Successfully"})
// })

// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message: "Post created Successfully"})
// })

// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message: "Post created Successfully"})
// })
