
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = async () => {
    try {

        const post = await prisma.post.create({
            data: {
                title: "My first post",
                body: "My first body"
            },
        });

        console.log(post);
        
    } catch (error) {
        console.error('Error creating post:', error);
    }
};

app();
