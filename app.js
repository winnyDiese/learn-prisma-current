const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/api/posts', async (req, res) => {
    try {
      const { title, content } = req.body
  
      // Validation simple
      if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required." });
      }
  
      const post = await prisma.post.create({
        data: {
          title,
          content,  // Utilisez 'content' comme dans votre modèle Prisma
        },
      });
  
      res.status(201).json(post);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.get('/api/posts', async (req,res)=>{
    try {
        const posts = await prisma.post.findMany()
        res.status(200).json(posts)
    } catch (error) {
        console.erreur(error)
        res.status(500).json({ error: 'Internal server error' });
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
