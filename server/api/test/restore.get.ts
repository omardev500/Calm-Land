import { storage } from "~/server/database/db";

export default defineEventHandler(async () => {
  await storage.setItem("users", []) 
  return 'Done!'
})
