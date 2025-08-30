import { storage } from '~/server/database/db';

export const getUser = async (username: string) => {
  const users = await storage.getItem("users") || []
  return users.find(x => x.username === username)
}
