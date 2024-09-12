import { Request, Response} from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getPosts = async (req: Request, res: Response):Promise<void> => {
    try {
        const posts = await prisma.post.findMany()
        res.status(200).json(posts)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
}
