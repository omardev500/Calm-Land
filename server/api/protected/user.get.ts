import { verifyToken } from "~/server/utils/token"

export default defineEventHandler((event) => {
  const token = getCookie(event, 'auth_token')
  
  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Not authenticated'
    })
  }
  
  const decoded = verifyToken(token)
  
  if (!decoded) {
    throw createError({
      statusCode: 401,
      message: 'Invalid token'
    })
  }
  
  return {
    message: "Protected data",
    user: decoded
  }
})
