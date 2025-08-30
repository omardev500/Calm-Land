import { storage } from '~/server/database/db';
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const users = (await storage.getItem('users')) || []
    
    body.passwordHash = await bcrypt.hash(body.passwordHash, 10)
    
    const newUser = { id: users.length + 1, ...body }
    
    users.push(newUser)
    
    await storage.setItem('users', users); 
    return newUser
  } catch (error) {
    console.error("An error eccoured when adding a new user: ", error);
  }
})
