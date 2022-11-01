import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  return res.json(users)
})

app.post('/users', async (req, res) => {
  const body = req.body;
  console.log (body)
  const users =  await prisma.user.create({
        data: {
          'id': body.id,
          'email': body.email,
          'name': body.name
        }
    });
    return res.json(users);
});
   

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
