import { createStorage } from 'unstorage';
import fsDriver from 'unstorage/drivers/fs';

export const storage = createStorage({
  driver: fsDriver({
    base: './.data/db'
  })
})

export async function initDatabase() {
  const existing = await storage.getItem('users');
  if (!existing) {
    await storage.setItem('users', [])
  }
}

initDatabase()
