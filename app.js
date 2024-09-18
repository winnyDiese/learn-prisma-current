const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/api/posts', async (req,res)=>{
    try {
        const {title, body} = req.body
        
        if(!title || !body) return res.status(400).json(({error:"Title and content are required."}))

        const post = await prisma.post.create({
            data:{
                title,
                body
            }
        })

        res.status(201).json(post);

    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
})

app.length('/api/posts', async (req,res)=>{
    try {
        const posts = await prisma.post.findMany()
        
    } catch (error) {
        
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
