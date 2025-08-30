import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET || 'your-fallback-secret-change-in-production';

export const generateToken = (payload: any) => {
  return jwt.sign(payload, secret, { expiresIn: '14d' })
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret)
  } catch {
    return null
  }
}
