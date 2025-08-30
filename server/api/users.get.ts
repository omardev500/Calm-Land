import { storage } from '~/server/database/db';

export default defineEventHandler(async (event) => {
  try {
    const users = await storage.getItem("users") || []
    
    return users
    
  } catch (error) {
    console.error('Database error:', error)
    return {
      status: 500,
      message: 'Internal server error'
    }
  }
})
