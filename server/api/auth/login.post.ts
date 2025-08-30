import { storage } from '~/server/database/db';
import { getUser } from '~/server/utils/findUser';
import bcrypt from 'bcryptjs'
import { generateToken } from '~/server/utils/token'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // 1. Await the getUser function (it's async)
  const user = await getUser(body.username)
  
  // 2. Check if the user exist first
  if (!user) {
    return { success: false, message: 'User not found' }
  }
  
  // 3. Compare the entered password with the user's actual one
  const isValid = await bcrypt.compare(body.password, user.passwordHash)
  
  if (!isValid) {
    return { success: false, message: 'Invalid username or password' }
  }
  
  // 4. Remove password from response and fix syntax
  const { passwordHash, ...userWithoutPassword } = user;
  
  // 5. Generate Token
  const token = generateToken({
    id: user.id,
    username: user.username
  })
  
  // 6. Set token as HTTP-only cookie
  setCookie(event, 'auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 14, // 14 days
    sameSite: 'strict'
  })
  
  // 7. Return success message with the user and token
  return {
    success: true,
    message: "Login successfully",
    user: userWithoutPassword,
    token 
  }
})
